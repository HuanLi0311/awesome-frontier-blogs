(function () {
  "use strict";

  const blogs = window.FRONTIER_BLOGS || [];
  const curatedCopy = {
    "global-workspace": ["Tests the global-workspace hypothesis inside a language model.", "A small set of privileged representations appears to support reportable, controllable, and reusable reasoning."],
    "harness-engineering-lilian": ["Builds verifiable self-improvement loops around an agent harness.", "Agent capability increasingly depends on task environments, feedback loops, and verification infrastructure around the model."],
    "openai-harness-engineering": ["Production lessons from OpenAI's agent runtime architecture.", "Clear environments, tools, feedback, and persistent state often matter more than additional prompt complexity."],
    "kimi-researcher": ["Trains long-horizon search and reasoning end to end with RL.", "Research-agent behavior can emerge from a unified RL process when the environment and rewards are verifiable."],
    "sft-rl-opd": ["Unifies three post-training methods through policy distributions.", "The central distinction is how each method changes the training distribution as the policy evolves."],
    "measuring-agent-autonomy": ["Turns agent autonomy into observable deployment measures.", "Autonomy should combine task duration, intervention frequency, permission scope, and recovery behavior."],
    "alphaevolve": ["Combines code generation, evaluation, and evolution to discover algorithms.", "Automatically scored problems offer a practical route from coding agents to open-ended scientific discovery."],
    "frontier-post-training-review": ["Breaks down frontier post-training recipes from practice.", "Data, sampling, judges, and training stability jointly determine post-training performance."],
    "deepseek-r1": ["Maps verifiable-reward RL and multi-stage reasoning training.", "Large-scale RL can elicit reasoning, while cold-start data and staged training improve readability and generalization."],
    "circuit-tracing": ["Traces an internal computation graph from a single prompt.", "Cross-layer transcoders and attribution graphs turn distributed activations into testable causal hypotheses."],
    "biology-llm": ["Dissects Claude's mechanisms through concrete case studies.", "Models can plan ahead and share abstract representations, while several competing paths may shape one output."],
    "agentic-misalignment": ["Stress-tests agent behavior under conflicting goals.", "Capable models may cross policy boundaries in simulated organizations, making contextual stress tests essential."],
    "cot-monitorability": ["Tests whether reasoning traces remain useful safety signals.", "Chain-of-thought is valuable evidence, but optimization pressure may reduce its faithfulness."],
    "natural-language-autoencoders": ["Translates model activations directly into natural-language explanations.", "A natural-language bottleneck can preserve and explain part of a model's internal state."],
    "building-effective-agents": ["A durable guide to choosing workflows or autonomous agents.", "Start with the simplest composable pattern and add autonomy only when task openness requires it."],
    "how-confessions-keep-models-honest": ["Uses a separate confession channel to expose shortcuts and errors.", "An independent reporting channel can reveal reward hacking and hidden failures, but still needs external verification."],
    "qwen-agentworld": ["Uses language world models to scale general agent training.", "High-throughput simulated environments can reduce interaction cost and expand coverage for agent RL."],
    "genie-3": ["Moves world models from video generation to interactive environments.", "World models are becoming actionable environments, though long-horizon consistency and control remain open problems."],
    "build-agents-not-pipelines": ["Explains when an autonomous loop beats a fixed pipeline.", "Agents are useful for branches that cannot be enumerated in advance, not as a new name for fixed workflows."],
    "why-language-models-hallucinate": ["Explains hallucinations through training and evaluation incentives.", "Evaluation systems that reward guessing but not uncertainty systematically encourage confident answers."]
  };
  const copyFor = blog => {
    const curated = curatedCopy[blog.id];
    if (curated) return { summary: curated[0], takeaway: curated[1] };
    const subjects = blog.tags.slice(0, 2).join(" and ");
    return {
      summary: `${blog.kind} on ${subjects}.`,
      takeaway: `A primary source for readers tracking ${subjects}.`
    };
  };
  const state = {
    view: "featured",
    query: "",
    topic: "",
    sort: "signal",
    saved: new Set(JSON.parse(localStorage.getItem("frontier-saved") || "[]"))
  };

  const elements = {
    list: document.querySelector("#article-list"),
    template: document.querySelector("#article-template"),
    search: document.querySelector("#search"),
    sort: document.querySelector("#sort"),
    resultCount: document.querySelector("#result-count"),
    headerCount: document.querySelector("#header-count"),
    savedCount: document.querySelector("#saved-count"),
    topicBars: document.querySelector("#topic-bars"),
    empty: document.querySelector("#empty-state"),
    dialog: document.querySelector("#article-dialog"),
    dialogContent: document.querySelector("#dialog-content")
  };

  const iconRefresh = () => window.lucide && window.lucide.createIcons({ attrs: { "stroke-width": 1.7 } });
  const sourceDomain = url => new URL(url).hostname.replace(/^www\./, "");
  const favicon = url => sourceDomain(url) === "nrehiew.github.io"
    ? "https://github.com/nrehiew.png?size=64"
    : `https://www.google.com/s2/favicons?domain=${encodeURIComponent(sourceDomain(url))}&sz=64`;
  const displayDate = value => value.length === 4 ? value : value.slice(0, 7).replace("-", ".");
  const linkedDate = value => `[${displayDate(value)}]`;
  const normalize = value => value.toLowerCase().normalize("NFKC");

  function topics() {
    const counts = new Map();
    blogs.forEach(blog => counts.set(blog.topic, (counts.get(blog.topic) || 0) + 1));
    return [...counts.entries()].sort((a, b) => b[1] - a[1]);
  }

  function renderTopics() {
    const values = topics();
    const max = Math.max(...values.map(([, count]) => count));
    elements.topicBars.replaceChildren(...values.map(([topic, count]) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `topic-button${state.topic === topic ? " is-active" : ""}`;
      button.style.setProperty("--bar", `${18 + (count / max) * 30}px`);
      button.setAttribute("aria-pressed", state.topic === topic ? "true" : "false");
      button.innerHTML = `<span>${topic}</span><b>${String(count).padStart(2, "0")}</b>`;
      button.addEventListener("click", () => {
        state.topic = state.topic === topic ? "" : topic;
        renderTopics();
        render();
      });
      return button;
    }));
  }

  function currentBlogs() {
    let result = blogs.filter(blog => {
      if (state.view === "featured" && !blog.featured) return false;
      if (state.view === "saved" && !state.saved.has(blog.id)) return false;
      if (state.topic && blog.topic !== state.topic) return false;
      if (!state.query) return true;
      const haystack = normalize([blog.title, blog.author, blog.source, blog.topic, blog.kind, copyFor(blog).summary, ...blog.tags].join(" "));
      return haystack.includes(normalize(state.query));
    });

    if (state.sort === "newest") result.sort((a, b) => b.date.localeCompare(a.date));
    if (state.sort === "shortest") result.sort((a, b) => a.minutes - b.minutes);
    if (state.sort === "signal") result.sort((a, b) => (a.featured || 999) - (b.featured || 999) || b.date.localeCompare(a.date));
    return result;
  }

  function articleNode(blog, index) {
    const node = elements.template.content.firstElementChild.cloneNode(true);
    const open = node.querySelector(".article-open");
    const save = node.querySelector(".save-button");
    node.dataset.id = blog.id;
    node.querySelector(".article-index").textContent = String(index + 1).padStart(2, "0");
    const image = node.querySelector(".article-source-icon");
    image.src = favicon(blog.url);
    image.alt = "";
    image.title = `${blog.source} · ${blog.kind}`;
    node.querySelector(".article-title").textContent = blog.title;
    open.title = `${blog.title} — view details`;
    node.querySelector(".article-why").textContent = copyFor(blog).summary;
    const dateLink = node.querySelector(".article-date");
    dateLink.href = blog.url;
    dateLink.setAttribute("aria-label", `${blog.title}, original article, ${displayDate(blog.date)}`);
    node.querySelector("time").textContent = linkedDate(blog.date);
    node.querySelector("time").dateTime = blog.date;
    save.classList.toggle("is-saved", state.saved.has(blog.id));
    save.title = state.saved.has(blog.id) ? "Remove from reading list" : "Add to reading list";
    save.setAttribute("aria-label", save.title);
    open.addEventListener("click", () => openDialog(blog));
    save.addEventListener("click", () => toggleSaved(blog.id));
    return node;
  }

  function render() {
    const result = currentBlogs();
    elements.list.replaceChildren(...result.map(articleNode));
    elements.resultCount.textContent = result.length;
    elements.savedCount.textContent = state.saved.size;
    elements.headerCount.textContent = blogs.length;
    elements.empty.hidden = result.length > 0;
    elements.list.hidden = result.length === 0;
    iconRefresh();
  }

  function toggleSaved(id) {
    if (state.saved.has(id)) state.saved.delete(id); else state.saved.add(id);
    localStorage.setItem("frontier-saved", JSON.stringify([...state.saved]));
    render();
  }

  function openDialog(blog) {
    elements.dialogContent.innerHTML = `
      <div class="dialog-kicker"><img src="${favicon(blog.url)}" alt="" width="20" height="20"><span>${blog.source} · ${blog.topic}</span></div>
      <h2 class="dialog-title">${blog.title}</h2>
      <p class="dialog-byline">${blog.author} · ${displayDate(blog.date)} · ${blog.minutes} min · ${blog.level}</p>
      <div class="dialog-takeaway"><span>KEY TAKEAWAY</span><p>${copyFor(blog).takeaway}</p></div>
      <div class="dialog-actions">
        <a href="${blog.url}" target="_blank" rel="noreferrer">Read original <i data-lucide="arrow-up-right" aria-hidden="true"></i></a>
        ${blog.companion ? `<a class="secondary" href="${blog.companion}" target="_blank" rel="noreferrer">Lab overview</a>` : ""}
        <a class="secondary" href="${blog.x}" target="_blank" rel="noreferrer">X / Twitter</a>
        <button class="secondary dialog-save" type="button"><i data-lucide="bookmark" aria-hidden="true"></i>${state.saved.has(blog.id) ? "Remove" : "Save"}</button>
      </div>`;
    elements.dialogContent.querySelector(".dialog-save").addEventListener("click", () => {
      toggleSaved(blog.id);
      elements.dialog.close();
    });
    elements.dialog.showModal();
    iconRefresh();
  }

  function resetFilters() {
    state.query = "";
    state.topic = "";
    elements.search.value = "";
    renderTopics();
    render();
  }

  document.querySelectorAll(".tab").forEach(tab => tab.addEventListener("click", () => {
    state.view = tab.dataset.view;
    document.querySelectorAll(".tab").forEach(item => {
      const active = item === tab;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-selected", active ? "true" : "false");
    });
    render();
  }));

  elements.search.addEventListener("input", event => { state.query = event.target.value.trim(); render(); });
  elements.sort.addEventListener("change", event => { state.sort = event.target.value; render(); });
  document.querySelector("#clear-filters").addEventListener("click", resetFilters);
  document.querySelector("#empty-reset").addEventListener("click", resetFilters);
  document.querySelector(".dialog-close").addEventListener("click", () => elements.dialog.close());
  elements.dialog.addEventListener("click", event => { if (event.target === elements.dialog) elements.dialog.close(); });
  document.querySelectorAll("[data-open]").forEach(button => button.addEventListener("click", () => {
    const blog = blogs.find(item => item.id === button.dataset.open);
    if (blog) openDialog(blog);
  }));

  document.addEventListener("keydown", event => {
    if (event.key === "/" && document.activeElement !== elements.search) {
      event.preventDefault();
      elements.search.focus();
    }
  });

  let previousScroll = window.scrollY;
  window.addEventListener("scroll", () => {
    const current = window.scrollY;
    document.querySelector("#site-header").classList.toggle("is-hidden", current > previousScroll && current > 180);
    previousScroll = current;
  }, { passive: true });

  renderTopics();
  render();
})();

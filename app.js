(function () {
  "use strict";

  const blogs = window.FRONTIER_BLOGS || [];
  const copyFor = blog => ({
    summary: blog.intro || blog.summary || "Primary source in the frontier agent systems catalog.",
    takeaway: blog.takeaway || blog.intro || "A source for readers tracking this system thread."
  });
  const state = {
    view: "featured",
    query: "",
    layer: "",
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
    layerTabs: document.querySelector("#layer-tabs"),
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
  const displayDate = value => value;
  const linkedDate = value => `[${displayDate(value)}]`;
  const normalize = value => String(value || "").toLowerCase().normalize("NFKC");
  const layerOrder = ["External Harness", "Internal Model"];
  const topicOrder = [
    "Loops", "Context & Memory", "Orchestration", "Verification",
    "Data & Environment", "Pre & Mid-training", "Reinforcement Learning",
    "On-policy Distillation", "Self-evolution"
  ];
  const impactRank = { S: 0, A: 1, B: 2 };
  const dateKey = blog => blog.dateValue || `${blog.date}-01`;

  function topics() {
    const counts = new Map();
    blogs.filter(blog => !state.layer || blog.layer === state.layer)
      .forEach(blog => counts.set(blog.topic, (counts.get(blog.topic) || 0) + 1));
    return [...counts.entries()].sort((a, b) => topicOrder.indexOf(a[0]) - topicOrder.indexOf(b[0]));
  }

  function renderLayers() {
    const all = document.createElement("button");
    all.type = "button";
    all.className = `layer-tab${state.layer ? "" : " is-active"}`;
    all.setAttribute("aria-selected", state.layer ? "false" : "true");
    all.innerHTML = `<span>All layers</span><b>${blogs.length}</b>`;
    all.addEventListener("click", () => {
      state.layer = "";
      state.topic = "";
      renderLayers();
      renderTopics();
      render();
    });

    const buttons = layerOrder.map(layer => {
      const button = document.createElement("button");
      const count = blogs.filter(blog => blog.layer === layer).length;
      button.type = "button";
      button.className = `layer-tab${state.layer === layer ? " is-active" : ""}`;
      button.setAttribute("aria-selected", state.layer === layer ? "true" : "false");
      button.innerHTML = `<span>${layer}</span><b>${count}</b>`;
      button.addEventListener("click", () => {
        state.layer = state.layer === layer ? "" : layer;
        state.topic = "";
        renderLayers();
        renderTopics();
        render();
      });
      return button;
    });
    elements.layerTabs.replaceChildren(all, ...buttons);
  }

  function renderTopics() {
    const values = topics();
    const max = Math.max(1, ...values.map(([, count]) => count));
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
      if (state.layer && blog.layer !== state.layer) return false;
      if (state.topic && blog.topic !== state.topic) return false;
      if (!state.query) return true;
      const haystack = normalize([
        blog.title, blog.organization, blog.author, blog.source, blog.layer,
        blog.topic, blog.kind, blog.impact, copyFor(blog).summary, ...(blog.tags || [])
      ].join(" "));
      return haystack.includes(normalize(state.query));
    });

    if (state.sort === "newest") result.sort((a, b) => dateKey(b).localeCompare(dateKey(a)));
    if (state.sort === "shortest") result.sort((a, b) => a.minutes - b.minutes);
    if (state.sort === "signal") result.sort((a, b) => (a.featured || 999) - (b.featured || 999) || impactRank[a.impact] - impactRank[b.impact] || dateKey(b).localeCompare(dateKey(a)));
    return result;
  }

  function articleNode(blog, index) {
    const node = elements.template.content.firstElementChild.cloneNode(true);
    const open = node.querySelector(".article-open");
    const save = node.querySelector(".save-button");
    node.dataset.id = blog.id;
    node.querySelector(".article-index").textContent = String(index + 1).padStart(2, "0");
    const image = node.querySelector(".article-source-icon");
    image.src = blog.logo || favicon(blog.url);
    image.alt = blog.organization || "";
    image.title = `${blog.organization || blog.source} / ${blog.kind || "Primary source"}`;
    node.querySelector(".article-title").textContent = blog.title;
    open.title = `${blog.title} — view details`;
    node.querySelector(".article-why").textContent = copyFor(blog).summary;
    node.querySelector(".article-topic").textContent = blog.topic;
    node.querySelector(".article-impact").textContent = blog.impact || "";
    const dateLink = node.querySelector(".article-date");
    dateLink.href = blog.url;
    dateLink.setAttribute("aria-label", `${blog.title}, original article, ${displayDate(blog.date)}`);
    node.querySelector("time").textContent = linkedDate(blog.date);
    node.querySelector("time").dateTime = blog.dateValue || blog.date;
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
      <div class="dialog-kicker"><img src="${blog.logo || favicon(blog.url)}" alt="" width="20" height="20"><span>${blog.layer} / ${blog.topic}</span></div>
      <h2 class="dialog-title">${blog.title}</h2>
      <p class="dialog-byline">${blog.organization || blog.author} / ${displayDate(blog.date)} / ${blog.minutes} min / ${blog.impact} - ${blog.level}</p>
      <div class="dialog-takeaway"><span>KEY TAKEAWAY</span><p>${copyFor(blog).takeaway}</p></div>
      <div class="dialog-actions">
        <a href="${blog.url}" target="_blank" rel="noreferrer">Read original <i data-lucide="arrow-up-right" aria-hidden="true"></i></a>
        ${blog.companion ? `<a class="secondary" href="${blog.companion}" target="_blank" rel="noreferrer">Lab overview</a>` : ""}
        ${blog.x ? `<a class="secondary" href="${blog.x}" target="_blank" rel="noreferrer">X / Twitter</a>` : ""}
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
    state.layer = "";
    state.topic = "";
    elements.search.value = "";
    renderLayers();
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
  document.querySelectorAll("[data-filter-topic]").forEach(button => button.addEventListener("click", () => {
    state.view = "all";
    state.layer = "";
    state.topic = button.dataset.filterTopic;
    document.querySelectorAll(".tab").forEach(item => {
      const active = item.dataset.view === "all";
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-selected", active ? "true" : "false");
    });
    renderLayers();
    renderTopics();
    render();
    document.querySelector("#library").scrollIntoView({ behavior: "smooth" });
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

  renderLayers();
  renderTopics();
  render();
})();

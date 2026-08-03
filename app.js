(function () {
  "use strict";

  const blogs = window.FRONTIER_BLOGS || [];
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
      const haystack = normalize([blog.title, blog.author, blog.source, blog.topic, blog.kind, blog.why, ...blog.tags].join(" "));
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
    open.title = `${blog.title} — 查看详情`;
    node.querySelector(".article-why").textContent = blog.why;
    const dateLink = node.querySelector(".article-date");
    dateLink.href = blog.url;
    dateLink.setAttribute("aria-label", `${blog.title} 原文，${displayDate(blog.date)}`);
    node.querySelector("time").textContent = linkedDate(blog.date);
    node.querySelector("time").dateTime = blog.date;
    save.classList.toggle("is-saved", state.saved.has(blog.id));
    save.title = state.saved.has(blog.id) ? "移出稍后读" : "加入稍后读";
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
      <div class="dialog-takeaway"><span>KEY TAKEAWAY</span><p>${blog.takeaway}</p></div>
      <div class="dialog-actions">
        <a href="${blog.url}" target="_blank" rel="noreferrer">阅读原文 <i data-lucide="arrow-up-right" aria-hidden="true"></i></a>
        ${blog.companion ? `<a class="secondary" href="${blog.companion}" target="_blank" rel="noreferrer">实验室导读</a>` : ""}
        <a class="secondary" href="${blog.x}" target="_blank" rel="noreferrer">X / Twitter</a>
        <button class="secondary dialog-save" type="button"><i data-lucide="bookmark" aria-hidden="true"></i>${state.saved.has(blog.id) ? "移出稍后读" : "稍后读"}</button>
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

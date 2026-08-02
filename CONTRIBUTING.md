# Contributing

Thank you for helping keep the signal high. A good contribution makes a reading decision easier; it does not only add another link.

## Before opening a pull request

1. Link the original article, technical report, or author-owned page.
2. Confirm the page is publicly accessible without an account.
3. Search `data/blogs.js` for the title and canonical URL to avoid duplicates.
4. Prefer durable technical content over launch announcements.

## Required metadata

Add one object to `data/blogs.js` with the existing schema:

```js
{
  id: "stable-short-id",
  title: "Original title",
  author: "Author or team",
  source: "Publication",
  date: "YYYY-MM-DD",
  url: "https://canonical.example/article",
  x: "https://x.com/author",
  topic: "Agents & Harnesses",
  tags: ["three", "specific", "tags"],
  kind: "Lab research",
  level: "Intermediate",
  minutes: 18,
  why: "Why this changes a reader's understanding or practice.",
  takeaway: "One claim directly supported by the source."
}
```

Use only one of the existing top-level topics. If none fits, open an issue before adding a new taxonomy branch.

## Editorial review

A submission is evaluated on primary evidence, technical depth, durability, originality, and how much it adds beyond existing entries. Popularity on X/Twitter is a discovery signal, not an acceptance criterion.

Dates must come from the original page, feed, or release record. Use a year only when the source does not expose a reliable day. Do not infer a precise date from a search snippet.

## Verification

Open `index.html` through a local HTTP server and check desktop and mobile layouts. Confirm search can find the new title, the topic bar count increases, the dialog opens, and all external links use HTTPS.

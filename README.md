<div align="center">

# Awesome Frontier Blogs

<span>A field guide to the technical writing shaping frontier LLMs and agents.</span>

[Interactive index](https://huanli0311.github.io/awesome-frontier-blogs/) · [Full catalog](CATALOG.md) · [Contribute](CONTRIBUTING.md)

![Curated](https://img.shields.io/badge/curated-20-087f8c?style=flat-square)
![Catalog](https://img.shields.io/badge/catalog-50-e6533f?style=flat-square)
![Updated](https://img.shields.io/badge/updated-2026.08-14231f?style=flat-square)

</div>

> Papers tell you the result. Great technical writing shows how researchers arrived there. This list prioritizes original lab research, independent analysis, and reproducible technical reports on LLMs, agents, post-training, interpretability, and alignment.

## How to read this list

This is not a company-by-company news feed. It is organized as four dependent reading paths:

1. Build — Understand agent loops, harnesses, tools, and environments beyond the model.
2. Train — Learn how SFT, RL, on-policy data, and verifiers shape a policy.
3. Inspect — Trace features, circuits, and internal model representations.
4. Trust — Test the boundaries with autonomy, monitorability, misalignment, and hallucination evaluations.

Every entry is checked against its original source. Dates are precise when the source exposes them; precision is never inferred from a search snippet.

## The shortlist

### 1. Build — Agents & harnesses

- Harness Engineering for Self-Improvement [[2026.07]](https://lilianweng.github.io/posts/2026-07-04-harness/) <sub>Builds verifiable self-improvement loops around an agent harness.</sub>
- Harness Engineering [[2026.02]](https://openai.com/index/harness-engineering/) <sub>Production lessons from OpenAI's agent runtime architecture.</sub>
- Building Effective Agents [[2024.12]](https://www.anthropic.com/engineering/building-effective-agents) <sub>A durable guide to choosing workflows or autonomous agents.</sub>
- AlphaEvolve [[2025.05]](https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/) <sub>Combines code generation, evaluation, and evolution to discover algorithms.</sub>
- Qwen-AgentWorld [[2026.06]](https://github.com/QwenLM/Qwen-AgentWorld) <sub>Uses language world models to scale general agent training.</sub>
- Build Agents, Not Pipelines [[2026.05]](https://seangoedecke.com/build-agents-not-pipelines/) <sub>Explains when an autonomous loop beats a fixed pipeline.</sub>

### 2. Train — Reasoning & post-training

- Kimi-Researcher [[2025.06]](https://moonshotai.github.io/Kimi-Researcher/) <sub>Trains long-horizon search and reasoning end to end with RL.</sub>
- SFT, RL, and On-Policy Distillation Through a Distributional Lens [[2026.05]](https://nrehiew.github.io/blog/sft_rl_opd/) <sub>Unifies three post-training methods through policy distributions.</sub>
- Frontier Post-training Recipe Review [[2026.06]](https://www.interconnects.ai/p/frontier-post-training-recipe-review) <sub>Breaks down frontier post-training recipes from practice.</sub>
- DeepSeek-R1 [[2025.01]](https://github.com/deepseek-ai/DeepSeek-R1) <sub>Maps verifiable-reward RL and multi-stage reasoning training.</sub>

### 3. Inspect — Mechanistic interpretability

- Verbalizable Representations Form a Global Workspace in Language Models [[2026.07]](https://transformer-circuits.pub/2026/workspace/index.html) <sub>Tests the global-workspace hypothesis inside a language model.</sub>
- Circuit Tracing [[2025.03]](https://transformer-circuits.pub/2025/attribution-graphs/methods.html) <sub>Traces an internal computation graph from a single prompt.</sub>
- On the Biology of a Large Language Model [[2025.03]](https://transformer-circuits.pub/2025/attribution-graphs/biology.html) <sub>Dissects Claude's mechanisms through concrete case studies.</sub>
- Natural Language Autoencoders [[2026.05]](https://transformer-circuits.pub/2026/nla/index.html) <sub>Translates model activations directly into natural-language explanations.</sub>

### 4. Trust — Alignment & evaluations

- Measuring AI Agent Autonomy in Practice [[2025.09]](https://www.anthropic.com/research/measuring-agent-autonomy) <sub>Turns agent autonomy into observable deployment measures.</sub>
- Agentic Misalignment [[2025.06]](https://www.anthropic.com/research/agentic-misalignment) <sub>Stress-tests agent behavior under conflicting goals.</sub>
- Evaluating Chain-of-Thought Monitorability [[2025.12]](https://openai.com/index/evaluating-chain-of-thought-monitorability/) <sub>Tests whether reasoning traces remain useful safety signals.</sub>
- How Confessions Can Keep Language Models Honest [[2025.12]](https://openai.com/index/how-confessions-can-keep-language-models-honest/) <sub>Uses a separate confession channel to expose shortcuts and errors.</sub>
- Why Language Models Hallucinate [[2025.09]](https://openai.com/index/why-language-models-hallucinate/) <sub>Explains hallucinations through training and evaluation incentives.</sub>
- Genie 3 [[2025.08]](https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/) <sub>Moves world models from video generation to interactive environments.</sub>

## What qualifies

An entry must satisfy at least two of these criteria:

- Primary — Published by the research team or author, or grounded in first-hand experiments.
- Durable — Still useful for understanding a method, system, or debate after the launch cycle.
- Inspectable — Supports its claims with experiments, code, data, figures, or explicit reasoning.

Product announcements, unsourced summaries, SEO aggregations, and paper-abstract rewrites are excluded. Popularity is a discovery signal, not evidence of quality.

## Data & interface

The full 50-entry collection is in [CATALOG.md](CATALOG.md), with structured metadata in [`data/blogs.js`](data/blogs.js). The repository root is a build-free static reading desk with topic filters, search, sorting, article details, and a local reading list.

Preview locally:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Contributing

Recommend original sources through an issue or pull request. Read [CONTRIBUTING.md](CONTRIBUTING.md) first, then provide one sentence on why the piece matters and one source-supported takeaway. Taxonomy quality takes priority over list size.

## Acknowledgements

The information architecture draws from [Awesome-AgenticLLM-RL-Papers](https://github.com/xhyumiracle/Awesome-AgenticLLM-RL-Papers), [Awesome-LLM-Strawberry](https://github.com/hijkzzz/Awesome-LLM-Strawberry), and [LLM Course](https://github.com/mlabonne/llm-course). Two additional reference repositories returned 404 on 2026-08-03, so their current structure was not treated as reproducible evidence.

## License

The index and frontend use the repository's [MIT License](LICENSE). Article copyrights remain with their original authors and publishers.

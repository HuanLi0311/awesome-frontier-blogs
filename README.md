<div align="center">

# Awesome Frontier Blogs

**A field guide to the technical writing shaping frontier LLMs and agents.**

[Interactive index](https://huanli0311.github.io/awesome-frontier-blogs/) · [Full catalog](CATALOG.md) · [Contribute](CONTRIBUTING.md)

![Curated](https://img.shields.io/badge/curated-20-087f8c?style=flat-square)
![Catalog](https://img.shields.io/badge/catalog-50-e6533f?style=flat-square)
![Updated](https://img.shields.io/badge/updated-2026.08-14231f?style=flat-square)

</div>

> 论文告诉你结论，优秀的技术博客告诉你研究者如何抵达结论。这个列表优先收录前沿实验室原文、研究者深度文章和可复现的技术报告，重点关注 LLM、agent、post-training、interpretability 与 alignment。

## How to read this list

这里不是按公司排列的新闻流，而是四条相互依赖的阅读路线：

1. **Build** — 先理解模型之外的 agent loop、harness、工具与环境。
2. **Train** — 再理解 SFT、RL、on-policy data 与 verifier 如何塑造策略。
3. **Inspect** — 接着进入 feature、circuit 与模型内部表征。
4. **Trust** — 最后用 autonomy、monitorability、misalignment 与 hallucination evals 检查边界。

每条内容都经过原始链接访问核验。日期能从原站确定时精确到日；原站只提供年份时不补造精确日期。

## The shortlist

### 1. Build — Agents & harnesses

- **Harness Engineering for Self-Improvement** [[2026.07]](https://lilianweng.github.io/posts/2026-07-04-harness/) — 用 harness 构建可验证的自我改进闭环。
- **Harness Engineering** [[2026.02]](https://openai.com/index/harness-engineering/) — 来自 OpenAI 的生产级 agent 运行框架经验。
- **Building Effective Agents** [[2024.12]](https://www.anthropic.com/engineering/building-effective-agents) — 区分 workflow 与 agent 的经典工程指南。
- **AlphaEvolve** [[2025.05]](https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/) — 用代码生成、自动评测和进化搜索发现新算法。
- **Qwen-AgentWorld** [[2026.06]](https://github.com/QwenLM/Qwen-AgentWorld) — 用语言世界模型扩展通用 agent 训练。
- **Build Agents, Not Pipelines** [[2026.05]](https://seangoedecke.com/build-agents-not-pipelines/) — 判断何时该用自主循环而非固定管线。

### 2. Train — Reasoning & post-training

- **Kimi-Researcher** [[2025.06]](https://moonshotai.github.io/Kimi-Researcher/) — 端到端 RL 训练长程检索与推理 agent。
- **SFT, RL, and On-Policy Distillation Through a Distributional Lens** [[2026.05]](https://nrehiew.github.io/blog/sft_rl_opd/) — 用策略分布统一理解三种后训练范式。
- **Frontier Post-training Recipe Review** [[2026.06]](https://www.interconnects.ai/p/frontier-post-training-recipe-review) — 从实践角度拆解前沿后训练配方。
- **DeepSeek-R1** [[2025.01]](https://github.com/deepseek-ai/DeepSeek-R1) — 可验证奖励 RL 与多阶段推理训练路线。

### 3. Inspect — Mechanistic interpretability

- **Verbalizable Representations Form a Global Workspace in Language Models** [[2026.07]](https://transformer-circuits.pub/2026/workspace/index.html) — 在模型内部验证 global workspace 假说。
- **Circuit Tracing** [[2025.03]](https://transformer-circuits.pub/2025/attribution-graphs/methods.html) — 从单次 prompt 追踪模型内部计算图。
- **On the Biology of a Large Language Model** [[2025.03]](https://transformer-circuits.pub/2025/attribution-graphs/biology.html) — 用具体案例解剖 Claude 的内部机制。
- **Natural Language Autoencoders** [[2026.05]](https://transformer-circuits.pub/2026/nla/index.html) — 把模型激活直接翻译成自然语言解释。

### 4. Trust — Alignment & evaluations

- **Measuring AI Agent Autonomy in Practice** [[2025.09]](https://www.anthropic.com/research/measuring-agent-autonomy) — 把 agent 自主性拆成可观测部署指标。
- **Agentic Misalignment** [[2025.06]](https://www.anthropic.com/research/agentic-misalignment) — 压力测试目标冲突下的 agent 越界行为。
- **Evaluating Chain-of-Thought Monitorability** [[2025.12]](https://openai.com/index/evaluating-chain-of-thought-monitorability/) — 检验思维链能否成为可靠的安全监控窗口。
- **How Confessions Can Keep Language Models Honest** [[2025.12]](https://openai.com/index/how-confessions-can-keep-language-models-honest/) — 用独立 confession 通道暴露取巧与失误。
- **Why Language Models Hallucinate** [[2025.09]](https://openai.com/index/why-language-models-hallucinate/) — 从训练与评测激励解释模型幻觉。
- **Genie 3** [[2025.08]](https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/) — 从视频生成迈向可交互的世界模型。

## What qualifies

收录内容至少满足以下三项中的两项：

- **Primary**：来自研究团队、作者本人或包含一手实验的技术报告。
- **Durable**：半年后仍能帮助理解方法、系统或争议，而不只是发布新闻。
- **Inspectable**：给出实验、代码、数据、图表或足以复核的明确论证。

不收录纯产品发布稿、无来源摘要、SEO 聚合页和只复述论文摘要的文章。高热度不是质量证明，但会作为发现候选的信号。

## Data & interface

完整 50 篇见 [CATALOG.md](CATALOG.md)，结构化元数据位于 [`data/blogs.js`](data/blogs.js)。仓库根目录是一个无需构建的静态阅读台，支持主题筛选、全文搜索、排序、文章详情和本地“稍后读”。

本地预览：

```bash
python -m http.server 8000
```

然后访问 `http://localhost:8000`。

## Contributing

请通过 issue 或 pull request 推荐原文。提交前阅读 [CONTRIBUTING.md](CONTRIBUTING.md)，并提供一句“为什么值得读”和一句可被原文支持的关键结论。分类讨论优先于数量增长。

## Acknowledgements

信息架构参考了 [Awesome-AgenticLLM-RL-Papers](https://github.com/xhyumiracle/Awesome-AgenticLLM-RL-Papers)、[Awesome-LLM-Strawberry](https://github.com/hijkzzz/Awesome-LLM-Strawberry) 与 [LLM Course](https://github.com/mlabonne/llm-course)。用户提供的另外两个参考仓库在 2026-08-03 检索时已返回 404，因此未将其当前结构作为可复现依据。

## License

索引与前端代码采用仓库中的 [MIT License](LICENSE)。文章版权归原作者与来源机构所有。

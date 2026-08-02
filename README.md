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

| Read | Source | Why it matters |
|---|---|---|
| [Harness Engineering for Self-Improvement](https://lilianweng.github.io/posts/2026-07-04-harness/) | Lilian Weng · 2026 | 把递归自我改进落到训练管线、评测和部署系统，而不是停在概念层。 |
| [Harness Engineering](https://openai.com/index/harness-engineering/) | OpenAI · 2026-02 | 来自生产环境的 harness 经验，讨论如何把模型能力转化为稳定完成率。 |
| [Building Effective Agents](https://www.anthropic.com/engineering/building-effective-agents) | Anthropic · 2024 | 区分 workflow 与 agent，给出从 prompt chaining 到自主循环的工程模式。 |
| [AlphaEvolve](https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/) | Google DeepMind · 2025 | 把代码生成、自动评测与进化搜索组成能发现新算法的闭环。 |
| [Qwen-AgentWorld](https://github.com/QwenLM/Qwen-AgentWorld) | Qwen · 2026 | 用语言世界模型模拟环境，降低真实 agent 交互与 RL 的训练成本。 |
| [Build Agents, Not Pipelines](https://seangoedecke.com/build-agents-not-pipelines/) | Sean Goedecke · 2026 | 简洁解释何时需要自主循环，何时确定性 pipeline 已经足够。 |

### 2. Train — Reasoning & post-training

| Read | Source | Why it matters |
|---|---|---|
| [Kimi-Researcher](https://moonshotai.github.io/Kimi-Researcher/) | Moonshot AI · 2025 | 展示端到端 agentic RL 如何训练长程检索、规划与证据综合。 |
| [SFT, RL, and On-Policy Distillation Through a Distributional Lens](https://nrehiew.github.io/blog/sft_rl_opd/) | Nathan Rehiew · 2025 | 用统一分布视角解释三种后训练范式，是近期高信号概念文。 |
| [Frontier Post-training Recipe Review](https://www.interconnects.ai/p/frontier-post-training-recipe-review) | Interconnects · 2026 | 从实践者角度连接论文算法名与数据、采样、评判器和稳定性。 |
| [DeepSeek-R1](https://github.com/deepseek-ai/DeepSeek-R1) | DeepSeek · 2025 | 推理模型浪潮的关键开放报告，给出可验证奖励 RL 与多阶段训练路线。 |

### 3. Inspect — Mechanistic interpretability

| Read | Source | Why it matters |
|---|---|---|
| [Verbalizable Representations Form a Global Workspace in Language Models](https://transformer-circuits.pub/2026/workspace/index.html) | Anthropic · 2026 | 把 global workspace 假说转化成可干预的模型内部实验。 |
| [Circuit Tracing](https://transformer-circuits.pub/2025/attribution-graphs/methods.html) | Anthropic · 2025 | 从单次 prompt 构造模型计算图，是理解 attribution graphs 的方法入口。 |
| [On the Biology of a Large Language Model](https://transformer-circuits.pub/2025/attribution-graphs/biology.html) | Anthropic · 2025 | 用规划、诗歌、算术和幻觉案例展示 circuit tracing 能看见什么。 |
| [Natural Language Autoencoders](https://transformer-circuits.pub/2026/nla/index.html) | Anthropic · 2026 | 尝试让模型把内部状态直接翻译成自然语言，探索 SAE 之外的新路线。 |

### 4. Trust — Alignment & evaluations

| Read | Source | Why it matters |
|---|---|---|
| [Measuring AI Agent Autonomy in Practice](https://www.anthropic.com/research/measuring-agent-autonomy) | Anthropic · 2025 | 把“自主性”拆成任务持续时间、介入频率、权限与恢复等可观测指标。 |
| [Agentic Misalignment](https://www.anthropic.com/research/agentic-misalignment) | Anthropic · 2025 | 跨模型压力测试有权限的 agent 在目标冲突下是否会策略性越界。 |
| [Evaluating Chain-of-Thought Monitorability](https://openai.com/index/evaluating-chain-of-thought-monitorability/) | OpenAI · 2025-12 | 研究推理轨迹能否成为监控前沿模型行为的可靠窗口。 |
| [How Confessions Can Keep Language Models Honest](https://openai.com/index/how-confessions-can-keep-language-models-honest/) | OpenAI · 2025-12 | 探索独立 confession 通道对奖励黑客和隐藏失误的检测价值。 |
| [Why Language Models Hallucinate](https://openai.com/index/why-language-models-hallucinate/) | OpenAI · 2025-09 | 从训练与评测激励解释幻觉为何持续存在，而不只归因于模型缺陷。 |
| [Genie 3](https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/) | Google DeepMind · 2025 | 世界模型从视频生成走向可交互环境，直接影响 agent 的训练边界。 |

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

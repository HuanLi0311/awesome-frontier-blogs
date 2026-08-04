<div align="center">

# awesome-frontier-blogs


<span>A field guide to the technical writing that builds long-horizon agents: an external harness coupled to an internal model.</span>

[Interactive index](https://huanli0311.github.io/awesome-frontier-blogs/) / [README catalog](README.md) / [Contribute](CONTRIBUTING.md)

![Catalog](https://img.shields.io/badge/catalog-155-087f8c?style=flat-square)
![Taxonomy](https://img.shields.io/badge/taxonomy-external%20%2B%20internal-e6533f?style=flat-square)
![Updated](https://img.shields.io/badge/updated-2026.08-14231f?style=flat-square)

</div>

> This catalog treats an agent as a coupled system: an externalized harness and an internalized model. Entries are grouped by the main place where capability is stored or improved. Within each section, articles are ordered newest first.

## How to read the taxonomy

This catalog has two layers:

- External Harness: loops, context and memory, orchestration and multi-agent control, and verification describe capabilities that live outside the model weights at runtime.
- Internal Model: data and environment, pre/mid-training, reinforcement learning, on-policy distillation, and self-evolution describe capabilities that are learned into the model or its persistent policy.

An article is assigned one primary section. Bridge topics appear once, under the side where their main intervention lands. The date is the original publication month, not a later page update.

## Influence scale

- S: Field-defining work, a landmark method, or a widely reused benchmark or artifact.
- A: Primary technical work from a frontier lab or a reproducible system with experiments, code, data, or evaluations.
- B: Rigorous independent technical writing with explicit methods and links to primary evidence.

The scale describes durable technical influence, not web traffic or company size. Author names are taken from the source when available; team labels are used when the source publishes collectively.

## External Harness

Loops, context and memory, orchestration and multi-agent control, and verification describe the runtime system around the model.

### Loops

How a system plans, executes, recovers, and sustains work over many steps.

| Date | Blog | Author | Organization | Impact |
|---|---|---|---|---|
| [2026.07](https://openai.com/index/scientific-computing-agentic-ai/) | <img src="assets/logos/openai.svg" alt="" width="16" height="16"> [A Scientific Computing Agent](https://openai.com/index/scientific-computing-agentic-ai/) | OpenAI Research team | OpenAI | A |
| [2026.07](https://openai.com/index/codex-maxxing-long-running-work/) | <img src="assets/logos/openai.svg" alt="" width="16" height="16"> [Codex Maxxing: Long-Running Work](https://openai.com/index/codex-maxxing-long-running-work/) | OpenAI Engineering team | OpenAI | A |
| [2026.07](https://openai.com/index/open-source-codex-orchestration-symphony/) | <img src="assets/logos/openai.svg" alt="" width="16" height="16"> [Open-Source Codex Orchestration: Symphony](https://openai.com/index/open-source-codex-orchestration-symphony/) | OpenAI Engineering team | OpenAI | A |
| [2026.07](https://research.google/blog/science-one-framework-a-verifiable-autonomous-research-framework-via-chain-of-evidence/) | <img src="assets/logos/google-research.svg" alt="" width="16" height="16"> [Science One Framework: A Verifiable Autonomous Research Framework via Chain-of-Evidence](https://research.google/blog/science-one-framework-a-verifiable-autonomous-research-framework-via-chain-of-evidence/) | Google Research team | Google Research | A |
| [2026.05](https://seangoedecke.com/build-agents-not-pipelines/) | <img src="assets/logos/independent.svg" alt="" width="16" height="16"> [Build Agents, Not Pipelines](https://seangoedecke.com/build-agents-not-pipelines/) | Sean Goedecke | Independent | B |
| [2026.04](https://research.google/blog/reasoningbank-enabling-agents-to-learn-from-experience/) | <img src="assets/logos/google-research.svg" alt="" width="16" height="16"> [ReasoningBank: Enabling Agents to Learn from Experience](https://research.google/blog/reasoningbank-enabling-agents-to-learn-from-experience/) | Google Research team | Google Research | A |
| [2026.02](https://openai.com/index/harness-engineering/) | <img src="assets/logos/openai.svg" alt="" width="16" height="16"> [Harness Engineering](https://openai.com/index/harness-engineering/) | OpenAI Engineering team | OpenAI | A |
| [2026.01](https://openai.com/index/unrolling-the-codex-agent-loop/) | <img src="assets/logos/openai.svg" alt="" width="16" height="16"> [Unrolling the Codex Agent Loop](https://openai.com/index/unrolling-the-codex-agent-loop/) | OpenAI Engineering team | OpenAI | A |
| [2025.04](https://huggingface.co/blog/tiny-agents) | <img src="assets/logos/huggingface.svg" alt="" width="16" height="16"> [Tiny Agents: An MCP-Powered Agent in 50 Lines of Code](https://huggingface.co/blog/tiny-agents) | Hugging Face team | Hugging Face | A |
| [2025.03](https://openai.com/index/new-tools-for-building-agents/) | <img src="assets/logos/openai.svg" alt="" width="16" height="16"> [New Tools for Building Agents](https://openai.com/index/new-tools-for-building-agents/) | OpenAI Agents team | OpenAI | A |
| [2025.02](https://deepmind.google/blog/co-scientist-a-multi-agent-ai-partner-to-accelerate-research/) | <img src="assets/logos/google-deepmind.svg" alt="" width="16" height="16"> [Co-Scientist: A Multi-Agent AI Partner to Accelerate Research](https://deepmind.google/blog/co-scientist-a-multi-agent-ai-partner-to-accelerate-research/) | Google DeepMind team | Google DeepMind | A |
| [2025.02](https://openai.com/index/deep-research/) | <img src="assets/logos/openai.svg" alt="" width="16" height="16"> [Deep Research](https://openai.com/index/deep-research/) | OpenAI Research team | OpenAI | A |
| [2024.12](https://www.anthropic.com/engineering/building-effective-agents) | <img src="assets/logos/anthropic.svg" alt="" width="16" height="16"> [Building Effective Agents](https://www.anthropic.com/engineering/building-effective-agents) | Erik Schluntz and Barry Zhang | Anthropic | A |
| [2024.10](https://openai.com/index/computer-using-agent/) | <img src="assets/logos/openai.svg" alt="" width="16" height="16"> [Computer-Using Agent](https://openai.com/index/computer-using-agent/) | OpenAI Research team | OpenAI | A |
| [2023.06](https://deepmind.google/blog/generally-capable-agents-emerge-from-open-ended-play/) | <img src="assets/logos/google-deepmind.svg" alt="" width="16" height="16"> [Generally Capable Agents Emerge from Open-Ended Play](https://deepmind.google/blog/generally-capable-agents-emerge-from-open-ended-play/) | Google DeepMind team | Google DeepMind | S |
| [2022.11](https://react-lm.github.io/) | <img src="assets/logos/google-research.svg" alt="" width="16" height="16"> [ReAct: Synergizing Reasoning and Acting in Language Models](https://react-lm.github.io/) | Shunyu Yao et al. | Princeton / Google | S |
| [2022.05](https://deepmind.google/blog/a-generalist-agent/) | <img src="assets/logos/google-deepmind.svg" alt="" width="16" height="16"> [A Generalist Agent](https://deepmind.google/blog/a-generalist-agent/) | Scott Reed et al. | DeepMind | S |
| [2018.06](https://deepmind.google/blog/agents-that-imagine-and-plan/) | <img src="assets/logos/google-deepmind.svg" alt="" width="16" height="16"> [Agents That Imagine and Plan](https://deepmind.google/blog/agents-that-imagine-and-plan/) | Google DeepMind team | DeepMind | A |

### Context & Memory

How systems select, compress, retrieve, and preserve state across calls.

| Date | Blog | Author | Organization | Impact |
|---|---|---|---|---|
| [2026.04](https://research.google/blog/designing-synthetic-datasets-for-the-real-world-mechanism-design-and-reasoning-from-first-principles/) | <img src="assets/logos/google-research.svg" alt="" width="16" height="16"> [Designing Synthetic Datasets for the Real World](https://research.google/blog/designing-synthetic-datasets-for-the-real-world-mechanism-design-and-reasoning-from-first-principles/) | Google Research team | Google Research | A |
| [2025.12](https://research.google/blog/titans-miras-helping-ai-have-long-term-memory/) | <img src="assets/logos/google-research.svg" alt="" width="16" height="16"> [Titans + MIRAS: Helping AI Have Long-Term Memory](https://research.google/blog/titans-miras-helping-ai-have-long-term-memory/) | Google Research team | Google Research | A |
| [2025.09](https://research.google/blog/the-anatomy-of-a-personal-health-agent/) | <img src="assets/logos/google-research.svg" alt="" width="16" height="16"> [The Anatomy of a Personal Health Agent](https://research.google/blog/the-anatomy-of-a-personal-health-agent/) | Google Research team | Google Research | A |
| [2024.09](https://www.anthropic.com/news/contextual-retrieval) | <img src="assets/logos/anthropic.svg" alt="" width="16" height="16"> [Contextual Retrieval](https://www.anthropic.com/news/contextual-retrieval) | Anthropic Research team | Anthropic | A |
| [2024.06](https://www.anthropic.com/news/prompting-long-context) | <img src="assets/logos/anthropic.svg" alt="" width="16" height="16"> [Long Context as a Model Capability](https://www.anthropic.com/news/prompting-long-context) | Anthropic Research team | Anthropic | A |
| [2024.02](https://blog.google/technology/ai/google-gemini-next-generation-model-february-2024/) | <img src="assets/logos/google-deepmind.svg" alt="" width="16" height="16"> [Gemini 1.5: Unlocking Multimodal Understanding across Millions of Tokens](https://blog.google/technology/ai/google-gemini-next-generation-model-february-2024/) | Google DeepMind team | Google DeepMind | A |
| [2023.10](https://research.memgpt.ai/) | <img src="assets/logos/google-research.svg" alt="" width="16" height="16"> [MemGPT: Towards LLMs as Operating Systems](https://research.memgpt.ai/) | MemGPT team | UC Berkeley / Letta | A |
| [2023.06](https://lilianweng.github.io/posts/2023-06-23-agent/) | <img src="assets/logos/independent.svg" alt="" width="16" height="16"> [LLM-Powered Autonomous Agents](https://lilianweng.github.io/posts/2023-06-23-agent/) | Lilian Weng | OpenAI | S |
| [2023.04](https://arxiv.org/abs/2304.03442) | <img src="assets/logos/google-research.svg" alt="" width="16" height="16"> [Generative Agents: Interactive Simulacra of Human Behavior](https://arxiv.org/abs/2304.03442) | Joon Sung Park et al. | Stanford University | S |
| [2023.02](https://github.com/dvlab-research/LongLoRA) | <img src="assets/logos/microsoft.svg" alt="" width="16" height="16"> [LongLoRA: Efficient Fine-Tuning of Long-Context Large Language Models](https://github.com/dvlab-research/LongLoRA) | Yunyang Xiong et al. | Microsoft Research | A |
| [2022.01](https://jalammar.github.io/illustrated-retrieval-transformer/) | <img src="assets/logos/independent.svg" alt="" width="16" height="16"> [The Illustrated Retrieval Transformer](https://jalammar.github.io/illustrated-retrieval-transformer/) | Jay Alammar | Independent | B |
| [2021.12](https://deepmind.google/blog/improving-language-models-by-retrieving-from-trillions-of-tokens/) | <img src="assets/logos/google-deepmind.svg" alt="" width="16" height="16"> [Improving Language Models by Retrieving from Trillions of Tokens](https://deepmind.google/blog/improving-language-models-by-retrieving-from-trillions-of-tokens/) | Sebastian Borgeaud et al. | DeepMind | S |
| [2021.12](https://deepmind.google/blog/perceiver-ar-general-purpose-long-context-autoregressive-generation/) | <img src="assets/logos/google-deepmind.svg" alt="" width="16" height="16"> [Perceiver AR: General-Purpose Long-Context Autoregressive Generation](https://deepmind.google/blog/perceiver-ar-general-purpose-long-context-autoregressive-generation/) | DeepMind team | DeepMind | A |
| [2021.06](https://deepmind.google/blog/a-new-model-and-dataset-for-long-range-memory/) | <img src="assets/logos/google-deepmind.svg" alt="" width="16" height="16"> [A New Model and Dataset for Long-Range Memory](https://deepmind.google/blog/a-new-model-and-dataset-for-long-range-memory/) | DeepMind team | DeepMind | A |
| [2020.05](https://ai.meta.com/blog/retrieval-augmented-generation-streamlining-the-creation-of-intelligent-natural-language-processing-models/) | <img src="assets/logos/meta.svg" alt="" width="16" height="16"> [Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks](https://ai.meta.com/blog/retrieval-augmented-generation-streamlining-the-creation-of-intelligent-natural-language-processing-models/) | Facebook AI Research team | Meta AI | S |
| [2018.06](https://jalammar.github.io/illustrated-transformer/) | <img src="assets/logos/independent.svg" alt="" width="16" height="16"> [The Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/) | Jay Alammar | Independent | S |
| [2017.06](https://research.facebook.com/publications/memory-networks/) | <img src="assets/logos/meta.svg" alt="" width="16" height="16"> [Memory Networks](https://research.facebook.com/publications/memory-networks/) | Facebook AI Research team | Meta AI | A |

### Orchestration & Multi-agent Control

How tools, skills, protocols, and agent roles are composed at runtime.

| Date | Blog | Author | Organization | Impact |
|---|---|---|---|---|
| [2026.07](https://openai.com/index/openai-research-assistant/) | <img src="assets/logos/openai.svg" alt="" width="16" height="16"> [OpenAI Research Assistant](https://openai.com/index/openai-research-assistant/) | OpenAI Research team | OpenAI | A |
| [2026.07](https://www.anthropic.com/news/skills) | <img src="assets/logos/anthropic.svg" alt="" width="16" height="16"> [Skills](https://www.anthropic.com/news/skills) | Anthropic Engineering team | Anthropic | A |
| [2026.07](https://simonwillison.net/2026/Jul/31/stateless-mcp/) | <img src="assets/logos/independent.svg" alt="" width="16" height="16"> [Stateless MCP Has Recaptured My Interest](https://simonwillison.net/2026/Jul/31/stateless-mcp/) | Simon Willison | Independent | B |
| [2026.03](https://openai.com/index/the-next-evolution-of-the-agents-sdk/) | <img src="assets/logos/openai.svg" alt="" width="16" height="16"> [The Next Evolution of the Agents SDK](https://openai.com/index/the-next-evolution-of-the-agents-sdk/) | OpenAI Agents team | OpenAI | A |
| [2025.10](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills) | <img src="assets/logos/anthropic.svg" alt="" width="16" height="16"> [Equipping Agents for the Real World with Agent Skills](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills) | Anthropic Engineering team | Anthropic | A |
| [2025.06](https://huggingface.co/blog/agent-glossary) | <img src="assets/logos/huggingface.svg" alt="" width="16" height="16"> [Harness, Scaffold, and the AI Agent Terms Worth Getting Right](https://huggingface.co/blog/agent-glossary) | Hugging Face team | Hugging Face | B |
| [2025.04](https://huggingface.co/blog/smolagents) | <img src="assets/logos/huggingface.svg" alt="" width="16" height="16"> [smolagents: Simple Agents for Everyone](https://huggingface.co/blog/smolagents) | Hugging Face team | Hugging Face | A |
| [2025.03](https://www.anthropic.com/news/model-context-protocol) | <img src="assets/logos/anthropic.svg" alt="" width="16" height="16"> [Model Context Protocol](https://www.anthropic.com/news/model-context-protocol) | Anthropic Engineering team | Anthropic | S |
| [2024.10](https://www.microsoft.com/en-us/research/project/magentic-one/) | <img src="assets/logos/microsoft.svg" alt="" width="16" height="16"> [Magentic-One: A Generalist Multi-Agent System](https://www.microsoft.com/en-us/research/project/magentic-one/) | Microsoft Research team | Microsoft Research | A |
| [2024.05](https://swe-agent.com/latest/) | <img src="assets/logos/google-research.svg" alt="" width="16" height="16"> [SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering](https://swe-agent.com/latest/) | SWE-agent team | Princeton / Stanford | A |
| [2024.01](https://blog.langchain.com/langgraph/) | <img src="assets/logos/langchain.svg" alt="" width="16" height="16"> [LangGraph](https://blog.langchain.com/langgraph/) | LangChain team | LangChain | A |
| [2023.11](https://www.microsoft.com/en-us/research/project/autogen/) | <img src="assets/logos/microsoft.svg" alt="" width="16" height="16"> [AutoGen: Enabling Next-Gen LLM Applications](https://www.microsoft.com/en-us/research/project/autogen/) | Microsoft Research team | Microsoft Research | A |
| [2023.10](https://webarena.dev/) | <img src="assets/logos/google-research.svg" alt="" width="16" height="16"> [WebArena: A Realistic Web Environment for Building Autonomous Agents](https://webarena.dev/) | Shuyan Zhou et al. | Princeton University | S |
| [2023.09](https://github.com/THUDM/AgentBench) | <img src="assets/logos/independent.svg" alt="" width="16" height="16"> [AgentBench: Evaluating LLMs as Agents](https://github.com/THUDM/AgentBench) | Xiaotao Guo et al. | Tsinghua University | A |
| [2023.07](https://github.com/WooooDyy/AgentGym) | <img src="assets/logos/independent.svg" alt="" width="16" height="16"> [AgentGym: A Comprehensive Benchmark to Evaluate LLM-based Agents](https://github.com/WooooDyy/AgentGym) | AgentGym team | Tsinghua University | A |
| [2023.02](https://ai.meta.com/blog/toolformer-language-models-can-teach-themselves-to-use-tools/) | <img src="assets/logos/meta.svg" alt="" width="16" height="16"> [Toolformer: Language Models Can Teach Themselves to Use Tools](https://ai.meta.com/blog/toolformer-language-models-can-teach-themselves-to-use-tools/) | Timo Schick et al. | Meta AI | S |
| [2022.06](https://say-can.github.io/) | <img src="assets/logos/google-research.svg" alt="" width="16" height="16"> [SayCan: Grounding Language in Robotic Affordances](https://say-can.github.io/) | Michael Ahn et al. | Google Research | S |
| [2021.06](https://ai.googleblog.com/2021/06/language-models-as-few-shot-learners.html) | <img src="assets/logos/google-research.svg" alt="" width="16" height="16"> [Language Models as Few-Shot Learners for Tool Use](https://ai.googleblog.com/2021/06/language-models-as-few-shot-learners.html) | Google Research team | Google Research | A |
| [2020.10](https://dspy.ai/) | <img src="assets/logos/google-research.svg" alt="" width="16" height="16"> [DSPy: Compiling Declarative Language Model Calls into Self-Improving Pipelines](https://dspy.ai/) | DSPy team | Stanford University | A |

### Verification

How systems check outcomes, trajectories, faithfulness, safety, and failure modes.

| Date | Blog | Author | Organization | Impact |
|---|---|---|---|---|
| [2026.07](https://huggingface.co/blog/is-it-agentic-enough) | <img src="assets/logos/huggingface.svg" alt="" width="16" height="16"> [Is It Agentic Enough? Benchmarking Open Models on Your Own Tooling](https://huggingface.co/blog/is-it-agentic-enough) | Hugging Face team | Hugging Face | A |
| [2026.06](https://huggingface.co/blog/ServiceNow/mosaicleaks) | <img src="assets/logos/salesforce.svg" alt="" width="16" height="16"> [MosaicLeaks: Can Your Research Agent Keep a Secret?](https://huggingface.co/blog/ServiceNow/mosaicleaks) | ServiceNow Research team | ServiceNow | A |
| [2026.06](https://huggingface.co/blog/ibm-research/vakra-benchmark-analysis) | <img src="assets/logos/independent.svg" alt="" width="16" height="16"> [VAKRA: Reasoning, Tool Use, and Failure Modes of Agents](https://huggingface.co/blog/ibm-research/vakra-benchmark-analysis) | IBM Research team | IBM Research | A |
| [2026.04](https://www.anthropic.com/research/evaluating-ai-systems) | <img src="assets/logos/anthropic.svg" alt="" width="16" height="16"> [Evaluating AI Systems](https://www.anthropic.com/research/evaluating-ai-systems) | Anthropic Research team | Anthropic | A |
| [2026.03](https://www.anthropic.com/research/statistical-approach-to-model-evals) | <img src="assets/logos/anthropic.svg" alt="" width="16" height="16"> [Statistical Approach to Model Evals](https://www.anthropic.com/research/statistical-approach-to-model-evals) | Anthropic Research team | Anthropic | A |
| [2026.01](https://huggingface.co/blog/futurebench) | <img src="assets/logos/huggingface.svg" alt="" width="16" height="16"> [FutureBench: Evaluating Agents on Predicting Future Events](https://huggingface.co/blog/futurebench) | FutureBench team | Hugging Face community | B |
| [2025.12](https://openai.com/index/evaluating-chain-of-thought-monitorability/) | <img src="assets/logos/openai.svg" alt="" width="16" height="16"> [Evaluating Chain-of-Thought Monitorability](https://openai.com/index/evaluating-chain-of-thought-monitorability/) | OpenAI Research team | OpenAI | A |
| [2025.12](https://openai.com/index/how-confessions-can-keep-language-models-honest/) | <img src="assets/logos/openai.svg" alt="" width="16" height="16"> [How Confessions Can Keep Language Models Honest](https://openai.com/index/how-confessions-can-keep-language-models-honest/) | OpenAI Research team | OpenAI | A |
| [2025.11](https://www.anthropic.com/research/swe-bench-sonnet) | <img src="assets/logos/anthropic.svg" alt="" width="16" height="16"> [SWE-bench Sonnet](https://www.anthropic.com/research/swe-bench-sonnet) | Anthropic Research team | Anthropic | A |
| [2025.09](https://www.anthropic.com/research/measuring-agent-autonomy) | <img src="assets/logos/anthropic.svg" alt="" width="16" height="16"> [Measuring AI Agent Autonomy in Practice](https://www.anthropic.com/research/measuring-agent-autonomy) | Anthropic Research team | Anthropic | A |
| [2025.09](https://openai.com/index/why-language-models-hallucinate/) | <img src="assets/logos/openai.svg" alt="" width="16" height="16"> [Why Language Models Hallucinate](https://openai.com/index/why-language-models-hallucinate/) | OpenAI Research team | OpenAI | A |
| [2025.07](https://deepmind.google/blog/facts-benchmark-suite-systematically-evaluating-the-factuality-of-large-language-models/) | <img src="assets/logos/google-deepmind.svg" alt="" width="16" height="16"> [FActScore and the Facts Benchmark Suite](https://deepmind.google/blog/facts-benchmark-suite-systematically-evaluating-the-factuality-of-large-language-models/) | Google DeepMind team | Google DeepMind | A |
| [2025.06](https://www.anthropic.com/research/agentic-misalignment) | <img src="assets/logos/anthropic.svg" alt="" width="16" height="16"> [Agentic Misalignment: How LLMs Could Be Insider Threats](https://www.anthropic.com/research/agentic-misalignment) | Anthropic Research team | Anthropic | A |
| [2025.06](https://www.anthropic.com/research/prompt-injection-defenses) | <img src="assets/logos/anthropic.svg" alt="" width="16" height="16"> [Prompt Injection Defenses](https://www.anthropic.com/research/prompt-injection-defenses) | Anthropic Research team | Anthropic | A |
| [2025.04](https://openai.com/index/designing-agents-to-resist-prompt-injection/) | <img src="assets/logos/openai.svg" alt="" width="16" height="16"> [Designing Agents to Resist Prompt Injection](https://openai.com/index/designing-agents-to-resist-prompt-injection/) | OpenAI Safety team | OpenAI | A |
| [2025.03](https://openai.com/index/safety-gym/) | <img src="assets/logos/openai.svg" alt="" width="16" height="16"> [Safety Gym](https://openai.com/index/safety-gym/) | OpenAI Safety team | OpenAI | A |
| [2025.02](https://huggingface.co/blog/gaia2) | <img src="assets/logos/huggingface.svg" alt="" width="16" height="16"> [GAIA2 and ARE: Empowering the Community to Study Agents](https://huggingface.co/blog/gaia2) | GAIA team | Hugging Face community | A |
| [2025.01](https://github.com/shmsw25/FActScore) | <img src="assets/logos/meta.svg" alt="" width="16" height="16"> [FActScore: Fine-grained Atomic Evaluation of Factual Precision](https://github.com/shmsw25/FActScore) | Sewon Min et al. | Meta AI / Princeton | S |
| [2024.10](https://www.anthropic.com/research/discovering-language-model-behaviors-with-model-written-evaluations) | <img src="assets/logos/anthropic.svg" alt="" width="16" height="16"> [Discovering Language Model Behaviors with Model-Written Evaluations](https://www.anthropic.com/research/discovering-language-model-behaviors-with-model-written-evaluations) | Anthropic Research team | Anthropic | A |
| [2024.08](https://www.swebench.com/) | <img src="assets/logos/google-research.svg" alt="" width="16" height="16"> [SWE-bench: Can Language Models Resolve Real-World GitHub Issues?](https://www.swebench.com/) | John Yang et al. | Princeton University | S |
| [2024.05](https://huggingface.co/blog/screensuite) | <img src="assets/logos/huggingface.svg" alt="" width="16" height="16"> [ScreenSuite: Evaluation Suite for GUI Agents](https://huggingface.co/blog/screensuite) | ScreenSuite team | Hugging Face community | A |
| [2024.04](https://www.anthropic.com/research/emergent-misalignment-reward-hacking) | <img src="assets/logos/anthropic.svg" alt="" width="16" height="16"> [Emergent Misalignment from Reward Hacking](https://www.anthropic.com/research/emergent-misalignment-reward-hacking) | Anthropic Research team | Anthropic | A |
| [2024.01](https://www.anthropic.com/research/sleeper-agents-training-deceptive-llms-that-persist-through-safety-training) | <img src="assets/logos/anthropic.svg" alt="" width="16" height="16"> [Sleeper Agents: Training Deceptive LLMs That Persist Through Safety Training](https://www.anthropic.com/research/sleeper-agents-training-deceptive-llms-that-persist-through-safety-training) | Evan Hubinger et al. | Anthropic | S |
| [2023.03](https://metr.org/) | <img src="assets/logos/independent.svg" alt="" width="16" height="16"> [How Capable Are AI Agents? Measuring Agent Autonomy](https://metr.org/) | METR team | METR | A |
| [2022.09](https://webshop-pnlp.github.io/) | <img src="assets/logos/google-research.svg" alt="" width="16" height="16"> [WebShop: Towards Scalable Real-World Web Interaction](https://webshop-pnlp.github.io/) | Shunyu Yao et al. | Princeton University | S |
| [2021.08](https://deepmind.google/blog/melting-pot-an-evaluation-suite-for-multi-agent-reinforcement-learning/) | <img src="assets/logos/google-deepmind.svg" alt="" width="16" height="16"> [Melting Pot: An Evaluation Suite for Multi-Agent Reinforcement Learning](https://deepmind.google/blog/melting-pot-an-evaluation-suite-for-multi-agent-reinforcement-learning/) | DeepMind team | DeepMind | S |

## Internal Model

Data and environment, pre/mid-training, reinforcement learning, on-policy distillation, and self-evolution describe capabilities learned into the model or its persistent policy.

### Data / Environment

How tasks, environments, simulations, and interaction data are synthesized.

| Date | Blog | Author | Organization | Impact |
|---|---|---|---|---|
| [2026.06](https://github.com/QwenLM/Qwen-AgentWorld) | <img src="assets/logos/qwen.svg" alt="" width="16" height="16"> [Qwen-AgentWorld: Language World Models for General Agents](https://github.com/QwenLM/Qwen-AgentWorld) | Qwen Research team | Alibaba / Qwen | A |
| [2026.04](https://research.google/blog/convapparel-measuring-and-bridging-the-realism-gap-in-user-simulators/) | <img src="assets/logos/google-research.svg" alt="" width="16" height="16"> [ConvApparel: Measuring the Realism Gap in User Simulators](https://research.google/blog/convapparel-measuring-and-bridging-the-realism-gap-in-user-simulators/) | Google Research team | Google Research | A |
| [2025.11](https://deepmind.google/blog/sima-2-an-agent-that-plays-reasons-and-learns-with-you-in-virtual-3d-worlds/) | <img src="assets/logos/google-deepmind.svg" alt="" width="16" height="16"> [SIMA 2: An Agent That Plays, Reasons and Learns in Virtual 3D Worlds](https://deepmind.google/blog/sima-2-an-agent-that-plays-reasons-and-learns-with-you-in-virtual-3d-worlds/) | Google DeepMind team | Google DeepMind | A |
| [2025.08](https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/) | <img src="assets/logos/google-deepmind.svg" alt="" width="16" height="16"> [Genie 3: A New Frontier for World Models](https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/) | Google DeepMind team | Google DeepMind | A |
| [2025.06](https://huggingface.co/blog/screenenv) | <img src="assets/logos/huggingface.svg" alt="" width="16" height="16"> [ScreenEnv: Deploy Your Full-Stack Desktop Agent](https://huggingface.co/blog/screenenv) | ScreenEnv team | Hugging Face community | A |
| [2025.04](https://huggingface.co/blog/waypoint-1) | <img src="assets/logos/independent.svg" alt="" width="16" height="16"> [Waypoint-1: Real-Time Interactive Video Diffusion](https://huggingface.co/blog/waypoint-1) | Overworld team | Overworld | A |
| [2024.12](https://deepmind.google/blog/genie-2-a-large-scale-foundation-world-model/) | <img src="assets/logos/google-deepmind.svg" alt="" width="16" height="16"> [Genie 2: A Large-Scale Foundation World Model](https://deepmind.google/blog/genie-2-a-large-scale-foundation-world-model/) | Google DeepMind team | Google DeepMind | A |
| [2024.08](https://deepmind.google/blog/robocat-a-self-improving-robotic-agent/) | <img src="assets/logos/google-deepmind.svg" alt="" width="16" height="16"> [RoboCat: A Self-Improving Robotic Agent](https://deepmind.google/blog/robocat-a-self-improving-robotic-agent/) | Google DeepMind team | Google DeepMind | S |
| [2023.05](https://voyager.minedojo.org/) | <img src="assets/logos/nvidia.svg" alt="" width="16" height="16"> [Voyager: An Open-Ended Embodied Agent with Large Language Models](https://voyager.minedojo.org/) | Guanzhi Wang et al. | NVIDIA / Caltech | S |
| [2023.03](https://minedojo.org/) | <img src="assets/logos/nvidia.svg" alt="" width="16" height="16"> [MineDojo: Building Open-Ended Embodied Agents with Internet-Scale Knowledge](https://minedojo.org/) | MineDojo team | NVIDIA / Caltech | A |
| [2022.11](https://github.com/Farama-Foundation/D4RL) | <img src="assets/logos/independent.svg" alt="" width="16" height="16"> [D4RL: Datasets for Deep Data-Driven Reinforcement Learning](https://github.com/Farama-Foundation/D4RL) | Justin Fu et al. | UC Berkeley | S |
| [2021.08](https://deepmind.google/blog/deepmind-and-blizzard-open-starcraft-ii-as-an-ai-research-environment/) | <img src="assets/logos/google-deepmind.svg" alt="" width="16" height="16"> [DeepMind and Blizzard Release StarCraft II as an AI Research Environment](https://deepmind.google/blog/deepmind-and-blizzard-open-starcraft-ii-as-an-ai-research-environment/) | DeepMind team | DeepMind | A |
| [2020.07](https://openai.com/index/procgen-benchmarking-the-generalization-of-reinforcement-learning/) | <img src="assets/logos/openai.svg" alt="" width="16" height="16"> [Procgen: Benchmarking the Generalization of Reinforcement Learning](https://openai.com/index/procgen-benchmarking-the-generalization-of-reinforcement-learning/) | OpenAI Research team | OpenAI | S |
| [2020.02](https://minerl.io/) | <img src="assets/logos/microsoft.svg" alt="" width="16" height="16"> [MineRL: Towards AI in Minecraft](https://minerl.io/) | MineRL team | Carnegie Mellon / Microsoft | A |
| [2019.10](https://openai.com/index/openai-five/) | <img src="assets/logos/openai.svg" alt="" width="16" height="16"> [OpenAI Five](https://openai.com/index/openai-five/) | OpenAI Research team | OpenAI | A |

### Pre/Mid-training

How architecture, data mixtures, long context, and base-model capability are built.

| Date | Blog | Author | Organization | Impact |
|---|---|---|---|---|
| [2026.05](https://openai.com/index/what-parameter-golf-taught-us/) | <img src="assets/logos/openai.svg" alt="" width="16" height="16"> [What Parameter Golf Taught Us](https://openai.com/index/what-parameter-golf-taught-us/) | OpenAI Research team | OpenAI | A |
| [2025.04](https://qwenlm.github.io/blog/qwen3/) | <img src="assets/logos/qwen.svg" alt="" width="16" height="16"> [Qwen3 Technical Report](https://qwenlm.github.io/blog/qwen3/) | Qwen Research team | Alibaba / Qwen | A |
| [2025.03](https://ai.google.dev/gemma/docs/core/model_card_3) | <img src="assets/logos/google-deepmind.svg" alt="" width="16" height="16"> [Gemma 3: Technical Report](https://ai.google.dev/gemma/docs/core/model_card_3) | Google DeepMind team | Google DeepMind | A |
| [2024.12](https://github.com/deepseek-ai/DeepSeek-V3) | <img src="assets/logos/deepseek.svg" alt="" width="16" height="16"> [DeepSeek-V3 Technical Report](https://github.com/deepseek-ai/DeepSeek-V3) | DeepSeek team | DeepSeek | A |
| [2024.11](https://allenai.org/blog/olmo2) | <img src="assets/logos/independent.svg" alt="" width="16" height="16"> [OLMo 2: The Best Fully Open Language Model to Date](https://allenai.org/blog/olmo2) | OLMo team | Allen Institute for AI | A |
| [2024.09](https://qwenlm.github.io/blog/qwen2.5/) | <img src="assets/logos/qwen.svg" alt="" width="16" height="16"> [Qwen2.5 Technical Report](https://qwenlm.github.io/blog/qwen2.5/) | Qwen Research team | Alibaba / Qwen | A |
| [2024.04](https://ai.meta.com/research/publications/the-llama-3-herd-of-models/) | <img src="assets/logos/meta.svg" alt="" width="16" height="16"> [The Llama 3 Herd of Models](https://ai.meta.com/research/publications/the-llama-3-herd-of-models/) | Meta AI team | Meta AI | S |
| [2024.02](https://allenai.org/olmo) | <img src="assets/logos/independent.svg" alt="" width="16" height="16"> [OLMo: Accelerating the Science of Language Models](https://allenai.org/olmo) | OLMo team | Allen Institute for AI | A |
| [2024.01](https://mistral.ai/news/mixtral-of-experts) | <img src="assets/logos/mistral.svg" alt="" width="16" height="16"> [Mixtral of Experts](https://mistral.ai/news/mixtral-of-experts) | Mistral AI team | Mistral AI | A |
| [2023.09](https://mistral.ai/news/announcing-mistral-7b) | <img src="assets/logos/mistral.svg" alt="" width="16" height="16"> [Mistral 7B](https://mistral.ai/news/announcing-mistral-7b) | Mistral AI team | Mistral AI | S |
| [2023.05](https://www.microsoft.com/en-us/research/publication/phi-3-technical-report-a-highly-capable-language-model-locally-on-your-phone/) | <img src="assets/logos/microsoft.svg" alt="" width="16" height="16"> [Phi-3 Technical Report](https://www.microsoft.com/en-us/research/publication/phi-3-technical-report-a-highly-capable-language-model-locally-on-your-phone/) | Microsoft Research team | Microsoft Research | A |
| [2023.03](https://openai.com/index/gpt-4-research/) | <img src="assets/logos/openai.svg" alt="" width="16" height="16"> [GPT-4 Research](https://openai.com/index/gpt-4-research/) | OpenAI Research team | OpenAI | S |
| [2022.04](https://blog.google/technology/ai/google-palm-2-ai-large-language-model/) | <img src="assets/logos/google-research.svg" alt="" width="16" height="16"> [PaLM: Scaling Language Modeling with Pathways](https://blog.google/technology/ai/google-palm-2-ai-large-language-model/) | Google Research team | Google Research | S |
| [2022.03](https://deepmind.google/blog/language-modelling-at-scale-gopher-ethical-considerations-and-retrieval/) | <img src="assets/logos/google-deepmind.svg" alt="" width="16" height="16"> [Training Compute-Optimal Large Language Models](https://deepmind.google/blog/language-modelling-at-scale-gopher-ethical-considerations-and-retrieval/) | Jordan Hoffmann et al. | DeepMind | S |
| [2021.09](https://lilianweng.github.io/lil-log/2021/09/25/train-large-neural-networks.html) | <img src="assets/logos/independent.svg" alt="" width="16" height="16"> [Train Large Neural Networks](https://lilianweng.github.io/lil-log/2021/09/25/train-large-neural-networks.html) | Lilian Weng | OpenAI | B |
| [2020.05](https://openai.com/index/language-models-are-few-shot-learners/) | <img src="assets/logos/openai.svg" alt="" width="16" height="16"> [Language Models are Few-Shot Learners](https://openai.com/index/language-models-are-few-shot-learners/) | Tom Brown et al. | OpenAI | S |
| [2020.01](https://openai.com/index/scaling-laws-for-neural-language-models/) | <img src="assets/logos/openai.svg" alt="" width="16" height="16"> [Scaling Laws for Neural Language Models](https://openai.com/index/scaling-laws-for-neural-language-models/) | Jared Kaplan et al. | OpenAI | S |
| [2019.02](https://openai.com/index/better-language-models/) | <img src="assets/logos/openai.svg" alt="" width="16" height="16"> [Language Models are Unsupervised Multitask Learners](https://openai.com/index/better-language-models/) | Alec Radford et al. | OpenAI | S |

### Reinforcement Learning

How reward, exploration, process supervision, and policy optimization shape behavior.

| Date | Blog | Author | Organization | Impact |
|---|---|---|---|---|
| [2026.07](https://github.com/MoonshotAI/Kimi-K3) | <img src="assets/logos/moonshot.svg" alt="" width="16" height="16"> [Kimi K3: Open Frontier Intelligence](https://github.com/MoonshotAI/Kimi-K3) | Moonshot AI team | Moonshot AI | A |
| [2026.06](https://moonshotai.github.io/Kimi-Researcher/) | <img src="assets/logos/moonshot.svg" alt="" width="16" height="16"> [Kimi-Researcher: End-to-End RL Training for Emerging Agentic Capabilities](https://moonshotai.github.io/Kimi-Researcher/) | Moonshot AI team | Moonshot AI | A |
| [2026.05](https://www.interconnects.ai/p/frontier-post-training-recipe-review) | <img src="assets/logos/independent.svg" alt="" width="16" height="16"> [Frontier Post-training Recipe Review](https://www.interconnects.ai/p/frontier-post-training-recipe-review) | Nathan Lambert and Finbarr Timbers | Interconnects | B |
| [2025.07](https://huggingface.co/blog/AI-MO/kimina-prover) | <img src="assets/logos/independent.svg" alt="" width="16" height="16"> [Kimina-Prover: Applying Test-Time RL Search](https://huggingface.co/blog/AI-MO/kimina-prover) | AI-MO team | AI-MO | A |
| [2025.01](https://github.com/deepseek-ai/DeepSeek-R1) | <img src="assets/logos/deepseek.svg" alt="" width="16" height="16"> [DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via RL](https://github.com/deepseek-ai/DeepSeek-R1) | DeepSeek team | DeepSeek | S |
| [2024.11](https://github.com/deepseek-ai/DeepSeek-Math) | <img src="assets/logos/deepseek.svg" alt="" width="16" height="16"> [GRPO: DeepSeekMath](https://github.com/deepseek-ai/DeepSeek-Math) | DeepSeek team | DeepSeek | A |
| [2024.10](https://openai.com/index/learning-to-reason-with-llms/) | <img src="assets/logos/openai.svg" alt="" width="16" height="16"> [Learning to Reason with LLMs](https://openai.com/index/learning-to-reason-with-llms/) | OpenAI Research team | OpenAI | A |
| [2024.09](https://openai.com/index/improving-mathematical-reasoning-with-process-supervision/) | <img src="assets/logos/openai.svg" alt="" width="16" height="16"> [Improving Mathematical Reasoning with Process Supervision](https://openai.com/index/improving-mathematical-reasoning-with-process-supervision/) | Hunter Lightman et al. | OpenAI | S |
| [2024.04](https://deepmind.google/blog/learning-through-human-feedback/) | <img src="assets/logos/google-deepmind.svg" alt="" width="16" height="16"> [Learning through Human Feedback](https://deepmind.google/blog/learning-through-human-feedback/) | DeepMind team | DeepMind | A |
| [2023.10](https://danijar.com/project/dreamerv3/) | <img src="assets/logos/google-deepmind.svg" alt="" width="16" height="16"> [DreamerV3](https://danijar.com/project/dreamerv3/) | Danijar Hafner et al. | Google DeepMind | S |
| [2023.08](https://deepmind.google/blog/rl-unplugged-benchmarks-for-offline-reinforcement-learning/) | <img src="assets/logos/google-deepmind.svg" alt="" width="16" height="16"> [RL Unplugged](https://deepmind.google/blog/rl-unplugged-benchmarks-for-offline-reinforcement-learning/) | DeepMind team | DeepMind | A |
| [2023.06](https://deepmind.google/blog/alphadev-discovers-faster-sorting-algorithms/) | <img src="assets/logos/google-deepmind.svg" alt="" width="16" height="16"> [AlphaDev Discovers Faster Sorting Algorithms](https://deepmind.google/blog/alphadev-discovers-faster-sorting-algorithms/) | Daniel Mankowitz et al. | Google DeepMind | S |
| [2023.03](https://deepmind.google/blog/alphazero-shedding-new-light-on-chess-shogi-and-go/) | <img src="assets/logos/google-deepmind.svg" alt="" width="16" height="16"> [AlphaZero: Shedding New Light on Chess, Shogi and Go](https://deepmind.google/blog/alphazero-shedding-new-light-on-chess-shogi-and-go/) | DeepMind team | DeepMind | S |
| [2022.12](https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback) | <img src="assets/logos/anthropic.svg" alt="" width="16" height="16"> [Constitutional AI: Harmlessness from AI Feedback](https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback) | Yuntao Bai et al. | Anthropic | S |
| [2022.11](https://deepmind.google/blog/muzero-mastering-go-chess-shogi-and-atari-without-rules/) | <img src="assets/logos/google-deepmind.svg" alt="" width="16" height="16"> [MuZero: Mastering Go, Chess, Shogi and Atari without Rules](https://deepmind.google/blog/muzero-mastering-go-chess-shogi-and-atari-without-rules/) | Julian Schrittwieser et al. | DeepMind | S |
| [2022.08](https://deepmind.google/blog/agent57-outperforming-the-human-atari-benchmark/) | <img src="assets/logos/google-deepmind.svg" alt="" width="16" height="16"> [Agent57: Outperforming the Human Atari Benchmark](https://deepmind.google/blog/agent57-outperforming-the-human-atari-benchmark/) | Adria Puigdomenech Badia et al. | DeepMind | S |
| [2022.04](https://deepmind.google/blog/going-beyond-average-for-reinforcement-learning/) | <img src="assets/logos/google-deepmind.svg" alt="" width="16" height="16"> [Going Beyond Average for Reinforcement Learning](https://deepmind.google/blog/going-beyond-average-for-reinforcement-learning/) | DeepMind team | DeepMind | A |
| [2022.04](https://www.anthropic.com/research/training-a-helpful-and-harmless-assistant-with-reinforcement-learning-from-human-feedback) | <img src="assets/logos/anthropic.svg" alt="" width="16" height="16"> [Training a Helpful and Harmless Assistant with RLHF](https://www.anthropic.com/research/training-a-helpful-and-harmless-assistant-with-reinforcement-learning-from-human-feedback) | Anthropic team | Anthropic | S |
| [2021.12](https://deepmind.google/blog/alphastar-mastering-the-real-time-strategy-game-starcraft-ii/) | <img src="assets/logos/google-deepmind.svg" alt="" width="16" height="16"> [AlphaStar: Mastering Real-Time Strategy Games](https://deepmind.google/blog/alphastar-mastering-the-real-time-strategy-game-starcraft-ii/) | DeepMind team | DeepMind | S |
| [2021.06](https://openai.com/index/reinforcement-learning-with-prediction-based-rewards/) | <img src="assets/logos/openai.svg" alt="" width="16" height="16"> [Reinforcement Learning with Prediction-Based Rewards](https://openai.com/index/reinforcement-learning-with-prediction-based-rewards/) | OpenAI Research team | OpenAI | A |
| [2020.12](https://openai.com/index/dota-2-with-large-scale-deep-reinforcement-learning/) | <img src="assets/logos/openai.svg" alt="" width="16" height="16"> [Dota 2 with Large-Scale Deep Reinforcement Learning](https://openai.com/index/dota-2-with-large-scale-deep-reinforcement-learning/) | OpenAI Research team | OpenAI | S |
| [2020.10](https://deepmind.google/blog/acme-a-new-framework-for-distributed-reinforcement-learning/) | <img src="assets/logos/google-deepmind.svg" alt="" width="16" height="16"> [ACME: A Research Framework for Distributed Reinforcement Learning](https://deepmind.google/blog/acme-a-new-framework-for-distributed-reinforcement-learning/) | DeepMind team | DeepMind | A |
| [2020.06](https://lilianweng.github.io/lil-log/2020/06/07/exploration-strategies-in-deep-reinforcement-learning.html) | <img src="assets/logos/independent.svg" alt="" width="16" height="16"> [Exploration Strategies in Deep Reinforcement Learning](https://lilianweng.github.io/lil-log/2020/06/07/exploration-strategies-in-deep-reinforcement-learning.html) | Lilian Weng | OpenAI | B |

### On-policy Distillation

How teacher behavior is transferred while the student policy is changing.

| Date | Blog | Author | Organization | Impact |
|---|---|---|---|---|
| [2026.05](https://nrehiew.github.io/blog/sft_rl_opd/) | <img src="assets/logos/independent.svg" alt="" width="16" height="16"> [SFT, RL, and On-Policy Distillation Through a Distributional Lens](https://nrehiew.github.io/blog/sft_rl_opd/) | Nathan Rehiew | Independent | B |
| [2025.01](https://huggingface.co/blog/open-r1/update-3) | <img src="assets/logos/huggingface.svg" alt="" width="16" height="16"> [Open-R1: Update 3 - Distillation and GRPO Training](https://huggingface.co/blog/open-r1/update-3) | Hugging Face team | Hugging Face | A |
| [2024.12](https://openai.com/index/api-model-distillation/) | <img src="assets/logos/openai.svg" alt="" width="16" height="16"> [API Model Distillation](https://openai.com/index/api-model-distillation/) | OpenAI Research team | OpenAI | A |
| [2024.06](https://www.microsoft.com/en-us/research/publication/orca-2-teaching-small-language-models-how-to-reason/) | <img src="assets/logos/microsoft.svg" alt="" width="16" height="16"> [Orca 2: Teaching Small Language Models How to Reason](https://www.microsoft.com/en-us/research/publication/orca-2-teaching-small-language-models-how-to-reason/) | Microsoft Research team | Microsoft Research | A |
| [2023.11](https://www.microsoft.com/en-us/research/publication/orca-a-method-for-enhancing-small-language-models-with-reasoning/) | <img src="assets/logos/microsoft.svg" alt="" width="16" height="16"> [Orca: Progressive Learning from Complex Explanation Traces](https://www.microsoft.com/en-us/research/publication/orca-a-method-for-enhancing-small-language-models-with-reasoning/) | Microsoft Research team | Microsoft Research | A |
| [2023.09](https://arxiv.org/abs/2303.03546) | <img src="assets/logos/google-research.svg" alt="" width="16" height="16"> [Distilling Step-by-Step: Outperforming Larger Language Models](https://arxiv.org/abs/2303.03546) | Sewon Min et al. | Google Research | A |
| [2023.03](https://crfm.stanford.edu/2023/03/13/alpaca.html) | <img src="assets/logos/google-research.svg" alt="" width="16" height="16"> [Stanford Alpaca](https://crfm.stanford.edu/2023/03/13/alpaca.html) | TAO et al. | Stanford CRFM | A |
| [2023.02](https://www.microsoft.com/en-us/research/project/self-instruct/) | <img src="assets/logos/microsoft.svg" alt="" width="16" height="16"> [Self-Instruct: Aligning Language Models with Self-Generated Instructions](https://www.microsoft.com/en-us/research/project/self-instruct/) | Yizhong Wang et al. | Microsoft Research | S |
| [2022.12](https://github.com/microsoft/LMOps) | <img src="assets/logos/microsoft.svg" alt="" width="16" height="16"> [MiniLLM: Knowledge Distillation of Large Language Models](https://github.com/microsoft/LMOps) | Microsoft Research team | Microsoft Research | A |

### Self-evolution

How models and agents accumulate experience, revise behavior, and improve across tasks.

| Date | Blog | Author | Organization | Impact |
|---|---|---|---|---|
| [2026.07](https://lilianweng.github.io/posts/2026-07-04-harness/) | <img src="assets/logos/independent.svg" alt="" width="16" height="16"> [Harness Engineering for Self-Improvement](https://lilianweng.github.io/posts/2026-07-04-harness/) | Lilian Weng | OpenAI | A |
| [2025.05](https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/) | <img src="assets/logos/google-deepmind.svg" alt="" width="16" height="16"> [AlphaEvolve: A Gemini-Powered Coding Agent for Designing Algorithms](https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/) | Google DeepMind team | Google DeepMind | A |
| [2025.01](https://huggingface.co/blog/LinkedIn/gpt-oss-agentic-rl) | <img src="assets/logos/independent.svg" alt="" width="16" height="16"> [Unlocking Agentic RL Training for GPT-OSS](https://huggingface.co/blog/LinkedIn/gpt-oss-agentic-rl) | LinkedIn Research team | LinkedIn | A |
| [2024.12](https://openai.com/index/evolution-through-large-models/) | <img src="assets/logos/openai.svg" alt="" width="16" height="16"> [Evolution through Large Models](https://openai.com/index/evolution-through-large-models/) | OpenAI Research team | OpenAI | A |
| [2024.08](https://selfrag.github.io/) | <img src="assets/logos/google-research.svg" alt="" width="16" height="16"> [Self-RAG: Learning to Retrieve, Generate, and Critique through Self-Reflection](https://selfrag.github.io/) | Akari Asai et al. | University of Washington | S |
| [2023.03](https://arxiv.org/abs/2303.11366) | <img src="assets/logos/independent.svg" alt="" width="16" height="16"> [Reflexion: Language Agents with Verbal Reinforcement Learning](https://arxiv.org/abs/2303.11366) | Noah Shinn et al. | Northeastern University | S |
| [2023.02](https://arxiv.org/abs/2305.13160) | <img src="assets/logos/microsoft.svg" alt="" width="16" height="16"> [CRITIC: Large Language Models Can Self-Correct with Tool-Interactive Critiquing](https://arxiv.org/abs/2305.13160) | Wenyue Hua et al. | Microsoft Research | A |
| [2022.04](https://openai.com/index/improving-language-models-by-following-instructions/) | <img src="assets/logos/openai.svg" alt="" width="16" height="16"> [Training Language Models to Follow Instructions with Human Feedback](https://openai.com/index/improving-language-models-by-following-instructions/) | Long Ouyang et al. | OpenAI | S |
| [2021.06](https://deepmind.google/blog/learning-human-objectives-by-evaluating-hypothetical-behaviours/) | <img src="assets/logos/google-deepmind.svg" alt="" width="16" height="16"> [Learning Human Objectives by Evaluating Hypothetical Behaviours](https://deepmind.google/blog/learning-human-objectives-by-evaluating-hypothetical-behaviours/) | DeepMind team | DeepMind | A |
| [2020.06](https://arxiv.org/abs/1805.01160) | <img src="assets/logos/google-deepmind.svg" alt="" width="16" height="16"> [Learning to Model Other Minds](https://arxiv.org/abs/1805.01160) | DeepMind team | DeepMind | A |

## Logo sources

Unit marks are cached as SVG files in [assets/logos](assets/logos). They are reused across entries so the catalog stays readable and does not depend on third-party favicon services. Simple Icons and Worldvectorlogo are used as the source registries for the cached marks.

## Curation policy

Keep primary lab research, engineering retrospectives, reproducible systems, benchmarks, and independent explanations that materially improve understanding. Exclude launch-only announcements, partnership news, unsourced summaries, and duplicate reposts.

Recommend an article through an issue or pull request with its original URL, publication month, author, organization, primary taxonomy section, and one source-supported reason it belongs.

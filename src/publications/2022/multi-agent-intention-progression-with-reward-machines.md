---
_hidden: false
title: Multi-Agent Intention Progression with Reward Machines
authors:
  - Dann, Michael
  - Yao, Yuan
  - Alechina, Natasha
  - Logan, Brian
  - Thangarajah, John
authors_orcid:
  - 0000-0002-7658-022X
  - 0000-0002-2705-6245
  - 0000-0003-3306-9891
  - 0000-0003-0648-7107
  - 0000-0002-7699-6444
year: 2022
doi: https://doi.org/10.24963/ijcai.2022/31
openalex_id: W4285602641
venue: Proceedings of the Thirty-First International Joint Conference on Artificial
Intelligence
pdf_url: https://www.ijcai.org/proceedings/2022/0031.pdf
abstract_page: 1
abstract_screenshot: src/publications/2022/multi-agent-intention-progression-with-reward-machines.png
keywords:
  - Computer science
  - Scheduling (production processes)
  - Distributed computing
  - Multi-agent system
  - Artificial intelligence
  - Machine learning
  - Mathematical optimization
---

Recent work in multi-agent intention scheduling has shown that enabling agents to predict the actions of other agents when choosing their own actions can be beneficial. However existing approaches to 'intention-aware' scheduling assume that the programs of other agents are known, or are "similar" to that of the agent making the prediction. While this assumption is reasonable in some circumstances, it is less plausible when the agents are not co-designed. In this paper, we present a new approach to multi-agent intention scheduling in which agents predict the actions of other agents based on a high-level specification of the tasks performed by an agent in the form of a reward machine (RM) rather than on its (assumed) program. We show how a reward machine can be used to generate tree and rollout policies for an MCTS-based scheduler. We evaluate our approach in a range of multi-agent environments, and show that RM-based scheduling out-performs previous intention-aware scheduling approaches in settings where agents are not co-designed

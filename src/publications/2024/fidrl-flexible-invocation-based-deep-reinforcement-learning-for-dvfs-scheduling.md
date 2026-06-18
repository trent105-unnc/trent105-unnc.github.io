---
_hidden: false
title: "FiDRL: Flexible Invocation-Based Deep Reinforcement Learning for DVFS
Scheduling in Embedded Systems"
authors:
  - Li, Jingjin
  - Jiang, Weixiong
  - He, Yuting
  - Yang, Qingyu
  - Gao, Anqi
  - Ha, Yajun
  - Özcan, Ender
  - Bai, Ruibin
  - Cui, Tianxiang
  - Yu, Heng
authors_orcid:
  - 0000-0001-7248-5180
  - 0000-0002-6014-6453
  - 0000-0002-1018-1912
  - 0000-0001-9375-0457
  - null
  - 0000-0003-4244-5916
  - 0000-0003-0276-1391
  - null
  - 0000-0002-0102-2581
  - 0000-0002-0305-2135
year: 2024
doi: https://doi.org/10.1109/tc.2024.3465933
openalex_id: W4402743254
venue: IEEE Transactions on Computers
abstract_screenshot: 
keywords:
  - Computer science
  - Reinforcement learning
  - Invocation
  - Scheduling (production processes)
  - Parallel computing
  - Distributed computing
  - Computer architecture
  - Artificial intelligence
  - Engineering
---

Deep Reinforcement Learning (DRL)-based Dynamic Voltage Frequency Scaling (DVFS) has shown great promise for energy conservation in embedded systems. While many works were devoted to validating its efficacy or improving its performance, few discuss the feasibility of the DRL agent deployment for embedded computing. State-of-the-art approaches focus on the miniaturization of agents’ inferential networks, such as pruning and quantization, to minimize their energy and resource consumption. However, this spatial-based paradigm still proves inadequate for resource-stringent systems. In this paper, we address the feasibility from a temporal perspective, where FiDRL, a flexible invocation-based DRL model is proposed to judiciously invoke itself to minimize the overall system energy consumption, given that the DRL agent incurs non-negligible energy overhead during invocations. Our approach is three-fold: (1) FiDRL that extends DRL by incorporating the agent's invocation interval into the action space to achieve invocation flexibility; (2) a FiDRL-based DVFS approach for both inter- and intra-task scheduling that minimizes the overall execution energy consumption; and (3) a FiDRL-based DVFS platform design and an on/off-chip hybrid algorithm specialized for training the DRL agent for embedded systems. Experiment results show that FiDRL achieves 55.1% agent invocation cost reduction, under 23.3% overall energy reduction, compared to state-of-the-art approaches.

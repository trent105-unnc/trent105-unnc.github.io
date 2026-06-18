---
_hidden: false
title: Quality Optimization of Adaptive Applications via Deep Reinforcement Learning in
Energy Harvesting Edge Devices
authors:
  - Chen, Fupeng
  - Yu, Heng
  - Jiang, Weixiong
  - Ha, Yajun
authors_orcid:
  - 0000-0002-1548-8243
  - 0000-0002-0305-2135
  - 0000-0002-6014-6453
  - 0000-0003-4244-5916
year: 2022
doi: https://doi.org/10.1109/tcad.2022.3142188
openalex_id: W4205905517
venue: IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems
abstract_screenshot: 
keywords:
  - Reinforcement learning
  - Computer science
  - Overhead (engineering)
  - Enhanced Data Rates for GSM Evolution
  - Frequency scaling
  - Maximization
  - Energy (signal processing)
  - Quality (philosophy)
  - Artificial intelligence
  - Real-time computing
  - Energy consumption
  - Mathematical optimization
  - Engineering
---

Applications with adaptability are widely available on the edge devices with energy harvesting capabilities. For their runtime quality optimization, however, current approaches cannot tackle the variations of quality modeling and harvested energy simultaneously. Therefore, in this article, we are the first to propose a deep reinforcement learning (DRL)-based dynamic voltage frequency scaling (DVFS) method that optimizes the application execution quality of energy harvesting edge devices to mitigate the variations. First, we propose a baseline DRL formulation that novelly migrates the objective of quality maximization into a reward function and constructs a DRL quality agent. Second, we devise a long short-term memory (LSTM)-based selector that performs DRL quality agent selection based on the energy harvesting history. Third, we further propose two optimization methods to alleviate the nonnegligible overhead of DRL computations: 1) an improved thinking-while-moving concurrent DRL scheme to compromise the “state drifting” issue during the DRL decision process and 2) a variable interstate duration decision scheme that compromises the DVFS overhead incurred in each action taken. The experiments take an adaptive stereo matching application as a case study. The results show that the proposed DRL-based DVFS method on average achieves 17.9% runtime reduction and 22.05% quality improvement compared to state-of-the-art solutions.

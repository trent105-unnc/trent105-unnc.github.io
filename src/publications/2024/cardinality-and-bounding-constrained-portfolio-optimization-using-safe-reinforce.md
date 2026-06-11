---
_hidden: false
title: Cardinality and Bounding Constrained Portfolio Optimization Using Safe
Reinforcement Learning
authors:
  - Li, Yiran
  - Du, Nanjiang
  - Song, Xingke
  - Yang, Xiaoying
  - Cui, Tianxiang
  - Xue, Ning
  - Farjudian, Amin
  - Ren, Jianfeng
  - Cheah, Wooi Ping
authors_orcid:
  - 0000-0002-1632-4531
  - 0000-0003-2029-4563
  - 0000-0003-1022-6823
  - 0000-0002-4062-6724
  - 0000-0002-0102-2581
  - 0000-0003-1449-9933
  - 0000-0002-1879-0763
  - null
  - 0000-0002-0829-2269
year: 2024
doi: https://doi.org/10.1109/ijcnn60899.2024.10651491
openalex_id: W4402352370
venue: 
pdf_url: 
abstract_page: 
abstract_screenshot: 
keywords:
  - Reinforcement learning
  - Bounding overwatch
  - Computer science
  - Portfolio
  - Cardinality (data modeling)
  - Mathematical optimization
  - Portfolio optimization
  - Artificial intelligence
  - Mathematics
  - Data mining
  - Economics
  - Financial economics
---

Portfolio optimization is a strategic approach aiming at achieving an optimal balance between risk and returns through the judicious allocation of limited capital across various assets. In recent years, there has been a growing interest in leveraging Deep Reinforcement Learning (DRL) to tackle the complexities of portfolio optimization. Despite its potential, a notable limitation of DRL algorithms is their inherent difficulty in integrating conflicted objectives with the reward functions throughout the learning process. Typically, DRL's reward function prioritizes the maximization of returns or other performance indicators, often overlooking the integration of risk aspects. Furthermore, the standard DRL framework struggles to incorporate practical constraints, such as cardinality and bounding, into the decision process. Without these constraints, the investment strategies developed might be unrealistic and unmanageable. To this end, in this paper, we propose an adaptive and safe DRL framework, which can dynamically optimize the portfolio weights while strictly respecting practical constraints. In our method, any infeasible action (i.e., one that violates the constraints) decided by the RL agent will be mapped to a feasible region using a safety layer. The extended Markowitz Mean-Variance (M-V) model is explicitly encoded in the safety layer to ensure the feasibility of the actions from the alternative views. In addition, we utilize Projection-based Interior-point Policy Optimization (IPO) to resolve multiple objectives and constraints in the examined problem. Extensive results on real-world datasets show that our method is effective in strictly respecting constraints under dynamic market environments, in contrast to prevailing data- driven trading strategies and conventional model-based static solutions.

---
_hidden: false
title: "De<sup>2</sup>r: Unifying DVFS and Early-Exit for Embedded AI Inference via
Reinforcement Learning"
authors:
  - He, Yuting
  - Li, Jingjin
  - Li, Chengtai
  - Yang, Qingyu
  - Wang, Zheng
  - Du, Heshan
  - Ren, Jianfeng
  - Yu, Heng
authors_orcid:
  - 0000-0002-1018-1912
  - 0000-0001-7248-5180
  - 0000-0003-0559-7507
  - 0000-0002-1525-2900
  - 0000-0003-0608-8093
  - 0000-0002-6300-3503
  - 0000-0003-4619-6590
  - null
year: 2025
doi: https://doi.org/10.23919/date64628.2025.10992707
openalex_id: W4410553228
venue: 
pdf_url: 
abstract_page: 
abstract_screenshot: 
keywords:
  - Reinforcement learning
  - Computer science
  - Inference
  - Artificial intelligence
---

Executing neural networks on resource-constrained embedded devices faces challenges. Efforts have been made at the application and system levels to reduce the execution cost. Among them, the early-exit networks reduce computational cost through intermediate exits, while Dynamic Voltage and Frequency Scaling (DVFS) offers system energy reduction. Existing works strive to unify early-exit and DVFS for combined benefits on both timing and energy flexibility, yet limitations exist: 1) varying time constraints that make different exit points become more, or less, important in terms of inference accuracy, are not taken care of, and 2) the optimal decisions of unifying DVFS and early-exit as a multi-objective optimization problem are not achieved due to the large configuration space. To address these challenges, we propose Dr<sup xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">2</sup>r, a reinforcement learning-based framework that jointly optimizes early-exit points and DVFS settings for continuous inference. In particular, Dr<sup xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">2</sup>r includes a cross-training mechanism that fine-tunes the early-exit network to accommodate dynamic time constraints and system conditions. Experimental results demonstrate that Dr<sup xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">2</sup>r achieves up to 22.03% energy reduction and 3.23% accuracy gain compared to contemporary techniques.

---
_hidden: false
title: "DARR: A Dual-Branch Arithmetic Regression Reasoning Framework for Solving
Machine Number Reasoning"
authors:
  - Li, Chengtai
  - Tan, Yee Yang
  - He, Yuting
  - Ren, Jianfeng
  - Bai, Ruibin
  - Zhao, Yitian
  - Yu, Heng
  - Jiang, Xudong
authors_orcid:
  - 0000-0003-0559-7507
  - null
  - 0000-0002-1018-1912
  - 0000-0003-4619-6590
  - 0000-0003-1722-568X
  - 0000-0003-4357-4592
  - 0000-0002-0305-2135
  - 0000-0002-9104-2315
year: 2025
doi: https://doi.org/10.1609/aaai.v39i2.32127
openalex_id: W4409346642
venue: Proceedings of the AAAI Conference on Artificial Intelligence
abstract_screenshot: darr-a-dual-branch-arithmetic-regression-reasoning-framework-for-solving-machine.png
keywords:
  - Arithmetic
  - Computer science
  - Dual (grammatical number)
  - Reasoning system
  - Proportional reasoning
  - Artificial intelligence
  - Mathematics
  - Mathematics education
---

Abstract visual reasoning (AVR) is a critical ability of humans, and it has been widely studied, but arithmetic visual reasoning, a unique task in AVR to reason over number sense, is less studied in the literature. To facilitate this research, we construct a Machine Number Reasoning (MNR) dataset to assess the model's ability in arithmetic visual reasoning over number sense and spatial layouts. To solve the MNR tasks, we propose a Dual-branch Arithmetic Regression Reasoning (DARR) framework, which includes an Intra-Image Arithmetic Regression Reasoning (IIARR) module and a Cross-Image Arithmetic Regression Reasoning (CIARR) module. The IIARR includes a set of Intra-Image Regression Blocks to identify the correct number orders and the underlying arithmetic rules within individual images, and an Order Gate to determine the correct number order. The CIARR establishes the arithmetic relations across different images through a `3-to-1' regressor and a set of`2-to-1' regressors, with a Selection Gate to select the most suitable `2-to-1' regressor and a gated fusion to combine the two kinds of regressors. Experiments on the MNR dataset show that the DARR outperforms state-of-the-art models for arithmetic visual reasoning.

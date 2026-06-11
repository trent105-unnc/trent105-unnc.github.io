---
_hidden: false
title: Siamese-Discriminant Deep Reinforcement Learning for Solving Jigsaw Puzzles with
Large Eroded Gaps
authors:
  - Song, Xingke
  - Jin, Jiahuan
  - Yao, Chenglin
  - Wang, Shihe
  - Ren, Jianfeng
  - Bai, Ruibin
authors_orcid:
  - 0000-0003-1022-6823
  - 0000-0002-9637-5450
  - null
  - 0000-0002-8371-6893
  - 0000-0003-4619-6590
  - 0000-0003-1722-568X
year: 2023
doi: https://doi.org/10.1609/aaai.v37i2.25325
openalex_id: W4382450481
venue: Proceedings of the AAAI Conference on Artificial Intelligence
pdf_url: https://ojs.aaai.org/index.php/AAAI/article/download/25325/25097
abstract_page: 1
abstract_screenshot: src/publications/2023/siamese-discriminant-deep-reinforcement-learning-for-solving-jigsaw-puzzles-with.png
keywords:
  - Jigsaw
  - Pairwise comparison
  - Reinforcement learning
  - Computer science
  - Discriminant
  - Artificial intelligence
  - Set (abstract data type)
  - Reinforcement
  - Machine learning
  - Sequence (biology)
  - Mathematics
  - Mathematics education
  - Engineering
---

Jigsaw puzzle solving has recently become an emerging research area. The developed techniques have been widely used in applications beyond puzzle solving. This paper focuses on solving Jigsaw Puzzles with Large Eroded Gaps (JPwLEG). We formulate the puzzle reassembly as a combinatorial optimization problem and propose a Siamese-Discriminant Deep Reinforcement Learning (SD2RL) to solve it. A Deep Q-network (DQN) is designed to visually understand the puzzles, which consists of two sets of Siamese Discriminant Networks, one set to perceive the pairwise relations between vertical neighbors and another set for horizontal neighbors. The proposed DQN considers not only the evidence from the incumbent fragment but also the support from its four neighbors. The DQN is trained using replay experience with carefully designed rewards to guide the search for a sequence of fragment swaps to reach the correct puzzle solution. Two JPwLEG datasets are constructed to evaluate the proposed method, and the experimental results show that the proposed SD2RL significantly outperforms state-of-the-art methods.

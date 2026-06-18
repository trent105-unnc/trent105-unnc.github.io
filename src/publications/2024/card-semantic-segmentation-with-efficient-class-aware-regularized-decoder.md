---
_hidden: false
title: "CARD: Semantic Segmentation With Efficient Class-Aware Regularized Decoder"
authors:
  - Huang, Ye
  - Kang, Di
  - Chen, Liang
  - Jia, Wenjing
  - He, Xiangjian
  - Duan, Lixin
  - Zhe, Xuefei
  - Bao, Linchao
authors_orcid:
  - 0000-0001-5668-5529
  - 0000-0002-8996-0897
  - 0000-0003-0712-4738
  - 0000-0002-0940-3338
  - 0000-0001-8962-540X
  - 0000-0002-0723-4016
  - 0000-0002-5005-7166
  - 0000-0001-9543-3754
year: 2024
doi: https://doi.org/10.1109/tcsvt.2024.3395132
openalex_id: W4396214386
venue: IEEE Transactions on Circuits and Systems for Video Technology
abstract_screenshot: 
keywords:
  - Computer science
  - Class (philosophy)
  - Segmentation
  - Artificial intelligence
  - Natural language processing
  - Semantics (computer science)
  - Image segmentation
  - Pattern recognition (psychology)
  - Programming language
---

Semantic segmentation has recently achieved notable advances by exploiting “class-level” contextual information during learning, e.g., the Object Contextual Representation (OCR) and Context Prior (CPNet) approaches. However, these approaches simply concatenate class-level information to pixel features to boost pixel representation learning, which cannot fully utilize intra-class and inter-class contextual information. Moreover, these approaches learn soft class centers based on coarse mask prediction, which is prone to error accumulation. To better exploit class-level information, we propose a universal Class-Aware Regularization (CAR) approach to optimize the intra-class variance and inter-class distance during feature learning, motivated by the fact that humans can recognize an object by itself no matter which other objects it appears with. Moreover, we design a dedicated decoder for CAR (named CARD), which consists of a novel spatial token mixer and an upsampling module, to maximize its gain for existing baselines while being highly efficient in terms of computational cost. Specifically, CAR consists of three novel loss functions. The first loss function encourages more compact class representations within each class, the second directly maximizes the distance between different class centers, and the third further pushes the distance between inter-class centers and pixels. Furthermore, the class center in our approach is directly generated from ground truth instead of from the error-prone coarse prediction. CAR can be directly applied to most existing segmentation models during training, including OCR and CPNet, and can largely improve their accuracy at no additional inference overhead. Extensive experiments and ablation studies conducted on multiple benchmark datasets demonstrate that the proposed CAR can boost the accuracy of all baseline models by up to 2.23% mIOU with superior generalization ability. CARD outperforms state-of-the-art approaches on multiple benchmarks with a highly efficient architecture. The code will be available at https://github.com/edwardyehuang/CAR.

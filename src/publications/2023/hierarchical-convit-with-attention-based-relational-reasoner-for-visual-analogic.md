---
_hidden: false
title: Hierarchical ConViT with Attention-Based Relational Reasoner for Visual
Analogical Reasoning
authors:
  - He, Wentao
  - Zhang, Jialu
  - Ren, Jianfeng
  - Bai, Ruibin
  - Jiang, Xudong
authors_orcid:
  - 0000-0002-6319-1639
  - 0000-0001-9539-6789
  - 0000-0003-4619-6590
  - 0000-0003-1722-568X
  - 0000-0002-9104-2315
year: 2023
doi: https://doi.org/10.1609/aaai.v37i1.25072
openalex_id: W4382464482
venue: Proceedings of the AAAI Conference on Artificial Intelligence
abstract_screenshot: hierarchical-convit-with-attention-based-relational-reasoner-for-visual-analogic.png
keywords:
  - Semantic reasoner
  - Computer science
  - Semantics (computer science)
  - Artificial intelligence
  - Focus (optics)
  - Block (permutation group theory)
  - Visual reasoning
  - Pattern recognition (psychology)
  - Natural language processing
  - Programming language
  - Mathematics
---

Raven’s Progressive Matrices (RPMs) have been widely used to evaluate the visual reasoning ability of humans. To tackle the challenges of visual perception and logic reasoning on RPMs, we propose a Hierarchical ConViT with Attention-based Relational Reasoner (HCV-ARR). Traditional solution methods often apply relatively shallow convolution networks to visually perceive shape patterns in RPM images, which may not fully model the long-range dependencies of complex pattern combinations in RPMs. The proposed ConViT consists of a convolutional block to capture the low-level attributes of visual patterns, and a transformer block to capture the high-level image semantics such as pattern formations. Furthermore, the proposed hierarchical ConViT captures visual features from multiple receptive fields, where the shallow layers focus on the image fine details while the deeper layers focus on the image semantics. To better model the underlying reasoning rules embedded in RPM images, an Attention-based Relational Reasoner (ARR) is proposed to establish the underlying relations among images. The proposed ARR well exploits the hidden relations among question images through the developed element-wise attentive reasoner. Experimental results on three RPM datasets demonstrate that the proposed HCV-ARR achieves a significant performance gain compared with the state-of-the-art models. The source code is available at: <https://github.com/wentaoheunnc/HCV-ARR>.

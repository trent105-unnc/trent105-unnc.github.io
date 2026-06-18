---
_hidden: false
title: "WBNet: Weakly-supervised salient object detection via scribble and
pseudo-background priors"
authors:
  - Wang, Yi
  - Wang, Ruili
  - He, Xiangjian
  - Lin, Chi
  - Wang, Tianzhu
  - Jia, Qi
  - Fan, Xin
authors_orcid:
  - 0000-0002-2724-7834
  - 0000-0003-2899-9816
  - 0000-0001-8962-540X
  - 0000-0002-0302-5102
  - 0000-0002-9360-7287
  - null
  - 0000-0002-8991-4188
year: 2024
doi: https://doi.org/10.1016/j.patcog.2024.110579
openalex_id: W4396834613
venue: Pattern Recognition
abstract_screenshot: 
keywords:
  - Salient
  - Computer science
  - Artificial intelligence
  - Pattern recognition (psychology)
  - Prior probability
  - Feature (linguistics)
  - Generator (circuit theory)
  - Code (set theory)
  - Pixel
  - Source code
  - Object detection
  - Computer vision
  - Set (abstract data type)
---

Weakly supervised salient object detection (WSOD) methods endeavor to boost sparse labels to get more salient cues in various ways. Among them, an effective approach is using pseudo labels from multiple unsupervised self-learning methods, but inaccurate and inconsistent pseudo labels could ultimately lead to detection performance degradation. To tackle this problem, we develop a new multi-source WSOD framework, WBNet, that can effectively utilize pseudo-background (non-salient region) labels combined with scribble labels to obtain more accurate salient features. We first design a comprehensive salient pseudo-mask generator from multiple self-learning features. Then, we pioneer the exploration of generating salient pseudo-labels via point-prompted and box-prompted Segment-Anything Models (SAM). Then, WBNet leverages a pixel-level Feature Aggregation Module (FAM), a mask-level Transformer-decoder (TFD), and an auxiliary Boundary Prediction Module (EPM) with a hybrid loss function to handle complex saliency detection tasks. Comprehensively evaluated with state-of-the-art methods on five widely used datasets, the proposed method significantly improves saliency detection performance. The code and results are publicly available at https://github.com/yiwangtz/WBNet.

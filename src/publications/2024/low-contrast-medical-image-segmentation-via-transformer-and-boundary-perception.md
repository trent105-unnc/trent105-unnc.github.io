---
_hidden: false
title: Low-Contrast Medical Image Segmentation via Transformer and Boundary Perception
authors:
  - Zhang, Yinglin
  - Xi, Ruiling
  - Wang, Wei
  - Li, Heng
  - Hu, Lingxi
  - Lin, Huiyan
  - Towey, Dave
  - Bai, Ruibin
  - Fu, Huazhu
  - Higashita, Risa
  - Liu, Jiang
authors_orcid:
  - 0000-0002-3126-8785
  - 0000-0002-4421-4022
  - 0009-0005-3401-5184
  - 0000-0001-7754-7141
  - 0009-0009-3483-8841
  - 0009-0008-7212-4500
  - 0000-0003-0877-4353
  - 0000-0003-1722-568X
  - 0000-0002-9702-5524
  - 0000-0002-8160-2841
  - 0000-0001-6281-6505
year: 2024
doi: https://doi.org/10.1109/tetci.2024.3353624
openalex_id: W4394951203
venue: IEEE Transactions on Emerging Topics in Computational Intelligence
abstract_screenshot: 
keywords:
  - Computer vision
  - Artificial intelligence
  - Contrast (vision)
  - Segmentation
  - Image segmentation
  - Perception
  - Computer science
  - Psychology
  - Neuroscience
---

Low-contrast medical image segmentation is a challenging task that requires full use of local details and global context. However, existing convolutional neural networks (CNNs) cannot fully exploit global information due to limited receptive fields and local weight sharing. On the other hand, the transformer effectively establishes long-range dependencies but lacks desirable properties for modeling local details. This paper proposes a Transformer-embedded Boundary perception Network (TBNet) that combines the advantages of transformer and convolution for low-contrast medical image segmentation. Firstly, the transformer-embedded module uses convolution at the low-level layer to model local details and uses the Enhanced TRansformer (ETR) to capture long-range dependencies at the high-level layer. This module can extract robust features with semantic contexts to infer the possible target location and basic structure in low-contrast conditions. Secondly, we utilize the decoupled body-edge branch to promote general feature learning and precept precise boundary locations. The ETR establishes long-range dependencies across the whole feature map range and is enhanced by introducing local information. We implement it in a parallel mode, i.e., the group of self-attention with multi-head captures the global relationship, and the group of convolution retains local details. We compare TBNet with other state-of-the-art (SOTA) methods on the cornea endothelial cell, ciliary body, and kidney segmentation tasks. The TBNet improves segmentation performance, proving its effectiveness and robustness.

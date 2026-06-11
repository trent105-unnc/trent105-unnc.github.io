---
_hidden: false
title: "TM-UNet: Token-Memory Enhanced Sequential Modeling for Efficient Medical Image
Segmentation"
authors:
  - Jiao, Yaxuan
  - Xu, Qing
  - Luo, Yuxiang
  - He, Xiangjian
  - Chen, Zhe
  - Duan, Wenting
authors_orcid:
  - null
  - null
  - 0000-0002-9410-5553
  - 0000-0001-8962-540X
  - 0000-0002-2919-4481
  - 0000-0001-9665-4890
year: 2026
doi: https://doi.org/10.1109/isbi61048.2026.11515341
openalex_id: W4416354590
venue: 
pdf_url: https://arxiv.org/pdf/2511.12270
abstract_page: 1
abstract_screenshot: src/publications/2026/tm-unet-token-memory-enhanced-sequential-modeling-for-efficient-medical-image-se.png
keywords:
  - Pooling
  - Block (permutation group theory)
  - Segmentation
  - Discriminative model
  - Security token
  - Encoding (memory)
  - Representation (politics)
  - Pattern recognition (psychology)
  - Matching (statistics)
---

Medical image segmentation is essential for clinical diagnosis and treatment planning. Although transformer-based methods have achieved remarkable results, their high computational cost hinders clinical deployment. To address this issue, we propose TM-UNet, a novel lightweight framework that integrates token sequence modeling with an efficient memory mechanism for efficient medical segmentation. Specifically, we introduce a multi-scale token-memory (MSTM) block that transforms 2D spatial features into token sequences through strategic spatial scanning, leveraging matrix memory cells to selectively retain and propagate discriminative contextual information across tokens. This novel token-memory mechanism acts as a dynamic knowledge store that captures longrange dependencies with linear complexity, enabling efficient global reasoning without redundant computation. Our MSTM block further incorporates exponential gating to identify token effectiveness and multi-scale contextual extraction via parallel pooling operations, enabling hierarchical representation learning without computational overhead. Extensive experiments demonstrate that TM-UNet outperforms state-of-theart methods across diverse medical segmentation tasks with substantially reduced computation cost. The code is available at https://github.com/xq141839/TM-UNet.

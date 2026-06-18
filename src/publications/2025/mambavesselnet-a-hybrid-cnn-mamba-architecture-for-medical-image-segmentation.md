---
_hidden: false
title: "MambaVesselNet++: A Hybrid CNN-Mamba Architecture for Medical Image
Segmentation"
authors:
  - Xu, Qing
  - Chen, Yanming
  - Li, Yue
  - Liu, Ziyu
  - Lou, Zhenye
  - Zhang, Yixuan
  - Zheng, Huizhong
  - He, Xiangjian
authors_orcid:
  - 0000-0001-6898-0269
  - 0009-0004-2732-474X
  - 0000-0002-6908-3591
  - 0000-0002-3542-6832
  - null
  - 0009-0000-9636-6397
  - 0000-0003-1658-6467
  - 0000-0001-8962-540X
year: 2025
doi: https://doi.org/10.1145/3757324
openalex_id: W4413682217
venue: ACM Transactions on Multimedia Computing Communications and Applications
abstract_screenshot: 
keywords:
  - Computer science
  - Architecture
  - Artificial intelligence
  - Segmentation
  - Computer vision
  - Image (mathematics)
  - Image segmentation
---

Medical image segmentation plays an important role in computer-aided diagnosis. Traditional convolution-based U-shape segmentation architectures are usually limited by the local receptive field. Existing vision transformers have been widely applied to diverse medical segmentation frameworks due to their superior capabilities of capturing global contexts. Despite the advantage, the real-world application of vision transformers is challenged by their non-linear self-attention mechanism, requiring huge computational costs. To address this issue, the selective state space model (SSM) Mamba has gained recognition for its adeptness in modeling long-range dependencies in sequential data, particularly noted for its efficient memory costs. In this paper, we propose MambaVesselNet++, a Hybrid CNN-Mamba framework for medical image segmentation. Our MambaVesselNet++ is comprised of a hybrid image encoder (Hi-Encoder) and a bifocal fusion decoder (BF-Decoder). In Hi-Encoder, we first devise the texture-aware layer to capture low-level semantic features by leveraging convolutions. Then, we utilize Mamba to effectively model long-range dependencies with linear complexity. The Bi-Decoder adopts skip connections to combine local and global information of the Hi-Encoder for the accurate generation of segmentation masks. Extensive experiments demonstrate that MambaVesselNet++ outperforms current convolution-based, transformer-based, and Mamba-based state-of-the-arts across diverse medical 2D, 3D, and instance segmentation tasks. The code is available at https://github.com/CC0117/MambaVesselNet .

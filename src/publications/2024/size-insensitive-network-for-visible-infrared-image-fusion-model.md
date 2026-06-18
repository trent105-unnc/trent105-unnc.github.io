---
_hidden: false
title: Size-Insensitive Network for Visible-Infrared Image Fusion Model
authors:
  - Zhang, Yihan
  - Zhang, Qian
  - Towey, Dave
authors_orcid:
  - 0000-0002-6706-0257
  - 0000-0003-3041-643X
  - 0000-0003-0877-4353
year: 2024
doi: https://doi.org/10.1109/compsac61105.2024.00220
openalex_id: W4401879705
venue: 
abstract_screenshot: 
keywords:
  - Infrared
  - Computer science
  - Image fusion
  - Fusion
  - Computer vision
  - Image (mathematics)
  - Artificial intelligence
  - Optics
  - Physics
---

Visible-infrared image fusion is a technique that extracts information from different sensors. It could be used to enhance human visual perception of video surveillance under low-light conditions, and provide rich information for subsequent tasks. Vision Transformer (ViT) based fusion algorithms require standardizing input images to a specific height and width that could be divided into a series of blocks of fixed size. Consequently, a scaling operation must be performed on the original image, which frequently decreases the quality of fusion results. This paper proposes a visible-infrared image fusion neural network that is insensitive to input size, by first utilizing a fixed-size image pre-fusion framework to generate lossless instructive fusion results (IFRs), followed by a size-insensitive enhancing framework that refines these preliminary fused images under the guidance of IFRs. It also has potential applicability to other image fusion algorithms, like multi-focus image fusion.

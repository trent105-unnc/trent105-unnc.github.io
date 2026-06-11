---
_hidden: false
title: "Pixels, Regions, and Objects: Multiple Enhancement for Salient Object Detection"
authors:
  - Wang, Yi
  - Wang, Ruili
  - Fan, Xin
  - Wang, Tianzhu
  - He, Xiangjian
authors_orcid:
  - 0000-0001-8659-4724
  - 0000-0001-7117-2772
  - 0000-0002-8991-4188
  - 0000-0002-9360-7287
  - 0000-0001-8962-540X
year: 2023
doi: https://doi.org/10.1109/cvpr52729.2023.00967
openalex_id: W4386072314
venue: 
pdf_url: 
abstract_page: 
abstract_screenshot: 
keywords:
  - Computer science
  - Robustness (evolution)
  - Artificial intelligence
  - Salient
  - Pixel
  - Benchmark (surveying)
  - Clutter
  - Pattern recognition (psychology)
  - Feature (linguistics)
  - GRASP
  - Object detection
  - Computer vision
---

Salient object detection (SOD) aims to mimic the human visual system (HVS) and cognition mechanisms to identify and segment salient objects. However, due to the complexity of these mechanisms, current methods are not perfect. Accuracy and robustness need to be further improved, particularly in complex scenes with multiple objects and background clutter. To address this issue, we propose a novel approach called Multiple Enhancement Network (MENet) that adopts the boundary sensibility, content integrity, iterative refinement, and frequency decomposition mechanisms of HVS. A multi-level hybrid loss is firstly designed to guide the network to learn pixel-level, region-level, and object-level features. A flexible multiscale feature enhancement module (ME-Module) is then designed to gradually aggregate and refine global or detailed features by changing the size order of the input feature sequence. An iterative training strategy is used to enhance boundary features and adaptive features in the dual-branch decoder of MENet. Comprehensive evaluations on six challenging benchmark datasets show that MENet achieves state-of-the-art results. Both the codes and results are publicly available at https://github.com/yiwangtz/MENet.

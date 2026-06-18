---
_hidden: false
title: "FRFCNet: Feature Refinement and Flexible Concatenation for Object Detection"
authors:
  - Zhang, Tao
  - Wu, Zhiheng
  - He, Xiangjian
  - Wu, Qiang
authors_orcid:
  - 0000-0003-3966-4691
  - 0009-0007-5885-4999
  - 0000-0001-8962-540X
  - 0000-0001-5641-2483
year: 2025
doi: https://doi.org/10.1109/tmm.2025.3607701
openalex_id: W4414165783
venue: IEEE Transactions on Multimedia
abstract_screenshot: 
keywords:
  - Upsampling
  - Feature extraction
  - Redundancy (engineering)
  - Feature (linguistics)
  - Pattern recognition (psychology)
  - Object detection
  - Pyramid (geometry)
  - Feature model
---

The state-of-the-art YOLO detection algorithms still suffer from the issue of redundant extraction of similar features during feature propagation, and the simplistic stacking approach of connecting different features limits the flexibility of feature fusion. We propose a new feature recombination mechanism involving refining feature extraction and flexible concatenation. It includes the HFConv (Hybrid Flexibility Convolution) module, the MFD (Multivariate Flexibility Downsampling) module, and the DFSPP (Deformable and Flexible Spatial Pyramid Pooling) module. Specifically, the HFConv module employs feature refinement and flexible connection strategies to optimize feature representation and reduce redundancy in a dynamic way, acquiring diverse feature information from local and surrounding regions. The MFD module leverages multiple downsampling methods to address the issue of feature redundancy that may arise from a single downsampling method, thereby enhancing feature diversity. The DFSPP module learns an offset corresponding to the pooling kernel size, allowing for the extraction of the most critical information in a dynamic manner. By incorporating these modules into the YOLO architecture, we develop a more robust network called FRFCNet, and the experimental results show a notable 4.1% and 2.8% improvement in AP values on the VOC2012 and COCO2017 datasets, respectively, compared to the baseline (YOLOV7-Tiny-SiLu), outperforming current one-stage detectors.

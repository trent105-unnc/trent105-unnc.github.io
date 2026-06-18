---
_hidden: false
title: Structural Priors Guided Network for the Corneal Endothelial Cell Segmentation
authors:
  - Zhang, Yinglin
  - Xi, Ruiling
  - Zeng, Lingxi
  - Towey, Dave
  - Bai, Ruibin
  - Higashita, Risa
  - Liu, Jiang
authors_orcid:
  - 0000-0002-3126-8785
  - 0000-0002-4421-4022
  - 0009-0004-0234-4373
  - 0000-0003-0877-4353
  - 0000-0003-1722-568X
  - 0000-0002-8160-2841
  - 0000-0001-6281-6505
year: 2023
doi: https://doi.org/10.1109/tmi.2023.3300656
openalex_id: W4385453390
venue: IEEE Transactions on Medical Imaging
abstract_screenshot: 
keywords:
  - Artificial intelligence
  - Ground truth
  - Segmentation
  - Computer science
  - Pixel
  - Image segmentation
  - Pattern recognition (psychology)
  - Corneal endothelium
  - Computer vision
  - Feature extraction
  - Context (archaeology)
  - Feature (linguistics)
  - Scale-space segmentation
  - Entropy (arrow of time)
  - Cornea
---

The segmentation of blurred cell boundaries in cornea endothelium microscope images is challenging, which affects the clinical parameter estimation accuracy. Existing deep learning methods only consider pixel-wise classification accuracy and lack of utilization of cell structure knowledge. Therefore, the segmentation of the blurred cell boundary is discontinuous. This paper proposes a structural prior guided network (SPG-Net) for corneal endothelium cell segmentation. We first employ a hybrid transformer convolution backbone to capture more global context. Then, we use Feature Enhancement (FE) module to improve the representation ability of features and Local Affinity-based Feature Fusion (LAFF) module to propagate structural information among hierarchical features. Finally, we introduce the joint loss based on cross entropy and structure similarity index measure (SSIM) to supervise the training process under pixel and structure levels. We compare the SPG-Net with various state-of-the-art methods on four corneal endothelial datasets. The experiment results suggest that the SPG-Net can alleviate the problem of discontinuous cell boundary segmentation and balance the pixel-wise accuracy and structure preservation. We also evaluate the agreement of parameter estimation between ground truth and the prediction of SPG-Net. The statistical analysis results show a good agreement and correlation.

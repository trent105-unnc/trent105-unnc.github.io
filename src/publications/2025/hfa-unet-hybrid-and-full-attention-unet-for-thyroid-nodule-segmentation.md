---
_hidden: false
title: "HFA-UNet: hybrid and full attention UNet for thyroid nodule segmentation"
authors:
  - Li, Yue
  - Zou, Yurong
  - He, Xiangjian
  - Xu, Qing
  - Liu, Ming
  - Jin, Shengji
  - Zhang, Qian
  - He, Maggie M.
  - Zhang, Jian
authors_orcid:
  - 0000-0002-6908-3591
  - null
  - 0000-0001-8962-540X
  - 0000-0001-6898-0269
  - 0009-0006-2658-5678
  - null
  - null
  - null
  - 0000-0003-0365-9022
year: 2025
doi: https://doi.org/10.1016/j.knosys.2025.114245
openalex_id: W4413444378
venue: Knowledge-Based Systems
pdf_url: https://doi.org/10.1016/j.knosys.2025.114245
abstract_page: 
abstract_screenshot: 
keywords:
  - Nodule (geology)
  - Thyroid
  - Segmentation
  - Medicine
  - Computer science
  - Internal medicine
  - Artificial intelligence
  - Biology
---

Ultrasound imaging is the most commonly used method for screening thyroid nodules due to its low cost and non-invasive nature. Thyroid nodule lesions have variable shapes, rich aspect ratios, unclear boundaries, calcified nodule-induced acoustic shadows, and noise interference, causing challenges in accurate segmentation. Recent methods ignore various scale features and details in different resolutions of images, leading to redundant or missing feature information and then affecting the segmentation performance. In this paper, we introduce a hybrid and full attention UNet model for ultrasound thyroid nodule segmentation. Self, spatial and channel attention are combined in a U-Net-like structure to extract global and local features simultaneously. A novel full attention multi-scale fusion stage is designed to enhance boundary features while suppressing noise features. At the same time, the model dynamically adjusts the number of skip connections corresponding to images of different resolutions to better utilize multi-scale features and detailed information. We evaluate our model on DDTI, TN3K and Stanford Cine-Clip datasets, including internal validation and cross-dataset testing. The results show that our proposed model for internal validation in the DDTI dataset increases the Dice score and mean intersection over union by 2.36 % and 1.04 % compared to the state-of-the-art model. In the TN3K dataset, they increase by 1.66 % and 3.05 %.

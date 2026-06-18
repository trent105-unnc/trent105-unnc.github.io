---
_hidden: false
title: Automatic dual‐modality breast tumor segmentation in PET/CT images using
CT‐guided transformer
authors:
  - Zheng, Huizhong
  - Shao, Dan
  - Huang, Zhenxing
  - Yang, Yongfeng
  - Zheng, Hairong
  - Liang, Dong
  - Yao, Yuan
  - He, Xiangjian
  - Hu, Zhanli
authors_orcid:
  - 0000-0003-1658-6467
  - 0000-0002-9925-0936
  - 0000-0001-5012-1992
  - null
  - null
  - 0000-0003-1358-9777
  - 0000-0002-2705-6245
  - 0000-0001-8962-540X
  - 0000-0003-0618-6240
year: 2025
doi: https://doi.org/10.1002/mp.70136
openalex_id: W4416227602
venue: Medical Physics
abstract_screenshot: 
keywords:
  - Breast tumor
  - Segmentation
  - Medical imaging
  - Image segmentation
  - Pattern recognition (psychology)
  - Breast cancer
  - Image registration
  - Joint (building)
---

BACKGROUND: Breast tumor segmentation is crucial for the diagnosis of breast cancer, as it enables radiologists to rapidly identify areas of interest and facilitate subsequent analysis, diagnosis, and treatment. Present breast tumor segmentation methods are typically applied to high-resolution computed tomography images. However, fewer segmentation methods are utilized for positron emission tomography/computed tomography (PET/CT) imaging systems. PURPOSE: Our goal is to develop a deep learning algorithm which combines functional and structural information for breast tumor segmentation in PET/CT images. This can enhance analytical accuracy and speed up the process of obtaining segmentation outcomes, thereby assisting physicians in subsequent patient diagnosis and treatment. METHODS: In this study, we explore an automatic image segmentation model to segment breast tumors in PET images. The proposed CT-Guided Transformer modules utilize features of various scales from CT images to generate attention maps for PET features. During the fusion process, effective consensus information is extracted from the features of two different modalities using similarity-based contrastive learning, thus enhancing the segmentation performance. Five evaluation metrics (Jaccard coefficient, Dice score, precision, sensitivity, and Hausdorff distance) are utilized to evaluate segmentation performance. The proposed algorithm is compared to the single-modality method and other multimodal fusion strategies. RESULTS: Experiments are conducted using a collected clinical breast dataset alongside the public QIN-Breast benchmark, and the results show that the proposed algorithm accurately segments the outline of breast tumors, achieving superior performance (86.19% Dice, 75.73% Jaccard) on the primary dataset and outperforming standard cross-attention on the public dataset by 3.86% Dice and 3.64% Jaccard. The quantitative and visualization results confirm that our method outperformed single-modality input methods and fusion methods. Additionally, we evaluate the distribution of metrics collected by cases to further demonstrate the superiority of our approach. CONCLUSION: We present a deep-learning-based method for the joint segmentation of anatomical and functional PET/CT images. Compared to single-modality and dual-modality methods with various fusion strategies, our approach significantly improves the accuracy of breast tumor delineation, demonstrating great potential for breast tumor diagnosis.

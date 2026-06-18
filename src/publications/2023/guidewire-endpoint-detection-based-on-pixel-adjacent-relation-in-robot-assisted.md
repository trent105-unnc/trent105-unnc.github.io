---
_hidden: false
title: Guidewire Endpoint Detection Based on Pixel Adjacent Relation in Robot-assisted
Cardiovascular Interventions
authors:
  - Du, Wenjing
  - Yi, Guanlin
  - Omisore, Olatunji Mumini
  - Duan, Wenke
  - Akinyemi, Toluwanimi Oluwadara
  - Chen, Xingyu
  - Wang, Lei
  - Lee, Boon Giin
  - Liu, Jiang
authors_orcid:
  - 0000-0002-0571-3398
  - 0000-0002-5175-9637
  - 0000-0002-9740-5471
  - 0000-0001-7509-7538
  - 0000-0002-5598-8971
  - 0000-0003-1164-9537
  - 0000-0002-7033-9806
  - 0000-0001-5743-1010
  - 0000-0001-6281-6505
year: 2023
doi: https://doi.org/10.1109/embc40787.2023.10340841
openalex_id: W4389542423
venue: 
abstract_screenshot: 
keywords:
  - Pixel
  - Artificial intelligence
  - Computer science
  - Computer vision
  - Segmentation
  - Object detection
  - Visualization
  - Image segmentation
---

Visualization of endovascular tools like guidewire and catheter is essential for procedural success of endovascular interventions. This requires tracking the tool pixels and motion during catheterization; however, detecting the endpoints of the endovascular tools is challenging due to their small size, thin appearance, and flexibility. As this still limit the performances of existing methods used for endovascular tool segmentation, predicting correct object location could provide ways forward. In this paper, we proposed a neighborhood-based method for detecting guidewire endpoints in X-ray angiograms. Typically, it consists of pixel-level segmentation and a post-segmentation step that is based on adjacency relationships of pixels in a given neighborhood. The latter includes skeletonization to predict endpoint pixels of guidewire. The method is evaluated with proprietary guidewire dataset obtained during in-vivo study in six rabbits, and it shows a high segmentation performance characterized with precision of 87.87% and recall of 90.53%, and low detection error with a mean pixel error of 2.26±0.14 pixels. We compared our method with four state-of-the-art detection methods and found it to exhibit the best detection performance. This neighborhood-based detection method can be generalized for other surgical tool detection and in related computer vision tasks.Clinical Relevance- The proposed method can be provided with better tool tracking and visualization systems during robot-assisted intravascular interventional surgery.

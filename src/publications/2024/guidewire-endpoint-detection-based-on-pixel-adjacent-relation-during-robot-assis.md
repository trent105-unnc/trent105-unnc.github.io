---
_hidden: false
title: "Guidewire Endpoint Detection Based on Pixel‐Adjacent Relation during
Robot‐Assisted Intravascular Catheterization: In Vivo Mammalian Models"
authors:
  - Du, Wenjing
  - Yi, Guanlin
  - Omisore, Olatunji Mumini
  - Duan, Wenke
  - Chen, Xingyu
  - Akinyemi, Toluwanimi Oluwadara
  - Liu, Jiang
  - Lee, Boon Giin
  - Wang, Lei
authors_orcid:
  - 0000-0002-0571-3398
  - 0000-0002-5175-9637
  - 0000-0002-9740-5471
  - 0000-0001-7509-7538
  - 0000-0003-1164-9537
  - 0000-0002-5598-8971
  - 0000-0001-6281-6505
  - 0000-0001-5743-1010
  - 0000-0002-7033-9806
year: 2024
doi: https://doi.org/10.1002/aisy.202300687
openalex_id: W4390639624
venue: Advanced Intelligent Systems
pdf_url: https://onlinelibrary.wiley.com/doi/pdfdirect/10.1002/aisy.202300687
abstract_page: 
abstract_screenshot: 
keywords:
  - Pixel
  - Artificial intelligence
  - Fluoroscopy
  - Skeletonization
  - Computer vision
  - Computer science
  - Segmentation
  - Noise (video)
  - Biomedical engineering
  - Medicine
  - Image (mathematics)
  - Radiology
---

Existing surgical guidewire endpoint localization methods in X‐ray images face challenges owing to their small size, simple appearance, nonrigid nature of objects, low signal‐to‐noise ratio of X‐ray images, and imbalance between the number of guidewire and background pixels, which lead to errors in surgical navigation. An eight‐neighborhood‐based method for increasing the localization accuracy of guidewire endpoint to improve the safety of interventional procedures is proposed herein. The proposed method includes two stages: 1) An improved U‐Net network is employed for segmenting the data of the guidewire to extract regions of interest containing guidewire endpoints with higher precision and to reduce interference from other anatomical structures and imaging artifacts. 2) The proposed method detects guidewire endpoints using the adjacent relationship between pixels in the eight‐neighborhood regions. This stage covers skeletonization extraction, removal of bifurcation points, and repair of fracture points. This study achieves mean pixel errors of 2.02 and 2.13 pixels in an in vivo rabbit and porcine X‐ray fluoroscopy images, outperforming ten classic heatmap and regression methods, achieving state‐of‐the‐art detection results. The proposed method can also be applied to detect other tiny surgical instruments such as stents and balloons, while preserving the flexibility of the guidewire bending angle.

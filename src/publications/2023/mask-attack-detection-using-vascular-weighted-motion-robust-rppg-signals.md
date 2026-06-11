---
_hidden: false
title: Mask Attack Detection Using Vascular-Weighted Motion-Robust rPPG Signals
authors:
  - Yao, Chenglin
  - Ren, Jianfeng
  - Bai, Ruibin
  - Du, Heshan
  - Liu, Jiang
  - Jiang, Xudong
authors_orcid:
  - null
  - 0000-0003-4619-6590
  - 0000-0003-1722-568X
  - 0000-0002-6300-3503
  - 0000-0001-6281-6505
  - 0000-0002-9104-2315
year: 2023
doi: https://doi.org/10.1109/tifs.2023.3293949
openalex_id: W4383753518
venue: IEEE Transactions on Information Forensics and Security
pdf_url: 
abstract_page: 
abstract_screenshot: 
keywords:
  - Computer science
  - Artificial intelligence
  - Computer vision
  - Face (sociological concept)
  - Pattern recognition (psychology)
  - Spoofing attack
  - Facial recognition system
---

Detecting 3D mask attacks to a face recognition system is challenging. Although genuine faces and 3D face masks show significantly different remote photoplethysmography (rPPG) signals, rPPG-based face anti-spoofing methods often suffer from performance degradation due to unstable face alignment in the video sequence and weak rPPG signals. To enhance the rPPG signal in a motion-robust way, a landmark-anchored face stitching method is proposed to align the faces robustly and precisely at the pixel-wise level by using both SIFT keypoints and facial landmarks. To better encode the rPPG signal, a weighted spatial-temporal representation is proposed, which emphasizes the face regions with rich blood vessels. In addition, characteristics of rPPG signals in different color spaces are jointly utilized. To improve the generalization capability, a lightweight EfficientNet with a Gated Recurrent Unit (GRU) is designed to extract both spatial and temporal features from the rPPG spatial-temporal representation for classification. The proposed method is compared with the state-of-the-art methods on five benchmark datasets under both intra-dataset and cross-dataset evaluations. The proposed method shows a significant and consistent improvement in performance over other state-of-the-art rPPG-based methods for face spoofing detection.

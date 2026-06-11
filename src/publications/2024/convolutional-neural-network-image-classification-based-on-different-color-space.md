---
_hidden: false
title: Convolutional Neural Network Image Classification Based on Different Color Spaces
authors:
  - Xian, Zixiang
  - Huang, Rubing
  - Towey, Dave
  - Yue, Chuan
authors_orcid:
  - 0000-0002-8892-6187
  - 0000-0002-1769-6126
  - 0000-0003-0877-4353
  - 0000-0001-9847-149X
year: 2024
doi: https://doi.org/10.26599/tst.2024.9010001
openalex_id: W4402435377
venue: Tsinghua Science & Technology
pdf_url: https://doi.org/10.26599/tst.2024.9010001
abstract_page: 
abstract_screenshot: 
keywords:
  - Convolutional neural network
  - Artificial intelligence
  - Computer science
  - Pattern recognition (psychology)
  - Contextual image classification
  - Image (mathematics)
  - Computer vision
---

Although Convolutional Neural Networks (CNNs) have achieved remarkable success in image classification, most CNNs use image datasets in the Red-Green-Blue (RGB) color space (one of the most commonly used color spaces). The existing literature regarding the influence of color space use on the performance of CNNs is limited. This paper explores the impact of different color spaces on image classification using CNNs. We compare the performance of five CNN models with different convolution operations and numbers of layers on four image datasets, each converted to nine color spaces. We find that color space selection can significantly affect classification accuracy, and that some classes are more sensitive to color space changes than others. Different color spaces may have different expression abilities for different image features, such as brightness, saturation, hue, etc. To leverage the complementary information from different color spaces, we propose a pseudo-Siamese network that fuses two color spaces without modifying the network architecture. Our experiments show that our proposed model can outperform the single-color-space models on most datasets. We also find that our method is simple, flexible, and compatible with any CNN and image dataset.

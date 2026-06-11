---
_hidden: false
title: Reliable prediction intervals with directly optimized inductive conformal
regression for deep learning
authors:
  - Lei, Haocheng
  - Bellotti, Anthony
authors_orcid:
  - 0000-0002-2351-0439
  - 0000-0001-6317-5877
year: 2023
doi: https://doi.org/10.1016/j.neunet.2023.09.008
openalex_id: W4386860576
venue: Neural Networks
pdf_url: https://doi.org/10.1016/j.neunet.2023.09.008
abstract_page: 
abstract_screenshot: 
keywords:
  - Benchmark (surveying)
  - Regression
  - Conformal map
  - Artificial neural network
  - Computer science
  - Artificial intelligence
  - Regression analysis
  - Function (biology)
  - Pattern recognition (psychology)
  - Prediction interval
  - Machine learning
  - Algorithm
  - Data mining
  - Mathematics
  - Statistics
---

By generating prediction intervals (PIs) to quantify the uncertainty of each prediction in deep learning regression, the risk of wrong predictions can be effectively controlled. High-quality PIs need to be as narrow as possible, whilst covering a preset proportion of real labels. At present, many approaches to improve the quality of PIs can effectively reduce the width of PIs, but they do not ensure that enough real labels are captured. Inductive Conformal Predictor (ICP) is an algorithm that can generate effective PIs which is theoretically guaranteed to cover a preset proportion of data. However, typically ICP is not directly optimized to yield minimal PI width. In this study, we propose Directly Optimized Inductive Conformal Regression (DOICR) for neural networks that takes only the average width of PIs as the loss function and increases the quality of PIs through an optimized scheme, under the validity condition that sufficient real labels are captured in the PIs. Benchmark experiments show that DOICR outperforms current state-of-the-art algorithms for regression problems using underlying Deep Neural Network structures for both tabular and image data.

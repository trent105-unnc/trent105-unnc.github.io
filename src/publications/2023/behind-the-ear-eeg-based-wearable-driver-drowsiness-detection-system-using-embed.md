---
_hidden: false
title: Behind-the-Ear EEG-Based Wearable Driver Drowsiness Detection System Using
Embedded Tiny Neural Networks
authors:
  - Nguyen, Ha-Trung
  - Mai, Ngoc-Dau
  - Lee, Boon Giin
  - Chung, Wan‐Young
authors_orcid:
  - null
  - 0009-0005-7027-1505
  - 0000-0001-5743-1010
  - 0000-0002-0121-855X
year: 2023
doi: https://doi.org/10.1109/jsen.2023.3307766
openalex_id: W4386320525
venue: IEEE Sensors Journal
pdf_url: 
abstract_page: 
abstract_screenshot: 
keywords:
  - Wearable computer
  - Electroencephalography
  - Computer science
  - Artificial neural network
  - Speech recognition
  - Artificial intelligence
  - Embedded system
  - Neuroscience
  - Psychology
---

Driver drowsiness is a major factor that leads to traffic accidents and loss of life. A popular drowsiness detection (DD) method is based on machine learning (ML) and monitoring electroencephalogram (EEG) signals from the scalp. However, the setup is usually bulky and too obtrusive for use in daily life. In addition, the data processing unit is usually placed in large hardware such as cloud servers and personal computers that receive the EEG signal from wearable sensors wirelessly. This results in a cumbersome system that lacks mobility and suffers high latency and power consumption because of wireless connection. The behind-the-ear (BTE) EEG is a novel approach that promises a more convenient and practical solution than scalp-EEG. Recent advances in tiny ML (TinyML) mean that on-device ML-based driver DD (DDD) could also be realized to avoid the limitations mentioned above. This article presents the design of a novel BTE EEG-based DDD system that uses a wearable headband device and runs built-in neural network (NN) models. The device collects EEG signals from four proposed BTE locations that are then preprocessed. Welch’s method is applied to extract the relative power spectral density (rPSD) ratio of three EEG bands (theta, alpha, and beta). Two NN models [multilayer perceptron (MLP) and convolutional NN (CNN)] were trained and compared to a support vector machine (SVM) before deployment in the embedded device. Then, a benchmark test was performed to evaluate the on-device performances of these models. The test results established the practicality and feasibility of the proposed system for on-device DDD.

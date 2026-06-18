---
_hidden: false
title: "TAIT: One-Shot Full-Integer Lightweight DNN Quantization via Tunable Activation
Imbalance Transfer"
authors:
  - Jiang, Weixiong
  - Yu, Heng
  - Liu, Xinzhe
  - Sun, Hao
  - Li, Rui
  - Ha, Yajun
authors_orcid:
  - 0000-0002-6014-6453
  - 0000-0002-0305-2135
  - 0000-0002-7557-4960
  - 0000-0003-4518-2533
  - 0000-0003-1770-906X
  - 0000-0003-4244-5916
year: 2021
doi: https://doi.org/10.1109/dac18074.2021.9586109
openalex_id: W3214591391
venue: 
abstract_screenshot: 
keywords:
  - Quantization (signal processing)
  - Computer science
  - Integer (computer science)
  - Shot (pellet)
  - Transfer (computing)
  - Artificial intelligence
  - Algorithm
  - Materials science
  - Parallel computing
  - Programming language
---

Both parameter quantization and depthwise convolution are essential measures to provide high-accuracy, lightweight, and resource-friendly solutions when deploying deep neural networks (DNNs) onto edge-AI devices. However, combining the two methodologies may lead to adverse effects: It either suffers from significant accuracy loss or long finetuning time. Besides, contemporary quantization methods are only selectively applied to weight and activation values but not bias and scaling factor values, making them less practical for ASIC/FPGA accelerators. To solve these issues, we propose a novel quantization framework that is effectively optimized for depthwise convolution networks. We discover that the uniformity of the value range within a tensor can serve as a predictor for the tensor’s quantization error. Under the guidance of this predictor, we develop a mechanism called Tunable Activation Imbalance Transfer (TAIT), which tunes the value range uniformity between an activated feature map and its latter weights. Moreover, TAIT fully supports full-integer quantization. We demonstrate TAIT on SkyNet and deploy it on FPGA. Compared to the state-of-the-art, our quantization framework and system design achieve 2.2%+ IoU, $2.4 \times$ speed, and $1.8 \times$ energy efficiency improvements, without any requirement of finetuning.

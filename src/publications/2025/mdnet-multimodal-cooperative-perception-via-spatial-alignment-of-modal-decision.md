---
_hidden: false
title: "MDNet: Multimodal Cooperative Perception via Spatial Alignment of Modal
Decision-Making"
authors:
  - He, Junyang
  - Deng, Xiaoheng
  - Gui, Jinsong
  - Zhang, Tao
  - He, Xiangjian
authors_orcid:
  - 0009-0005-5250-6593
  - 0000-0003-2740-8025
  - 0000-0001-9399-9092
  - 0000-0003-3966-4691
  - 0000-0001-8962-540X
year: 2025
doi: https://doi.org/10.1109/jiot.2025.3531145
openalex_id: W4406521384
venue: IEEE Internet of Things Journal
abstract_screenshot: 
keywords:
  - Modal
  - Computer science
  - Perception
  - Artificial intelligence
---

Through Internet of Things (IoT) communication technology, collaborative perception enhances a vehicle’s capacity to discern its surroundings while driving by integrating and synchronizing sensor data from multiple agents. With the advancement of cooperative perception techniques in single-modality methods, there has been a growing trend toward integrating multimodal data from heterogeneous sensors in recent years. However, due to the data heterogeneity inherent in diverse sensors, Bird’s Eye View (BEV) maps generated from different types of sensors may exhibit local discrepancies in the spatial representation of entity positions. Furthermore, individual agents may produce uncertain and flawed feature representations in real noisy environments. The influence of this indeterminacy exacerbates the issue of local inconsistency, leading to misalignment of the detected target during BEV alignment and fusion, thereby reducing detection accuracy. To address these problems, we propose a modal decision-making spatial alignment cooperative perception network (MDNet). First, the network generates BEV feature maps through dense depth image supervision for voxel feature extraction and model-guided selective feature fusion. Subsequently, we achieve enhanced accuracy in object detection by performing spatial alignment of BEV representations generated from two distinct sensors, both globally and locally within the spatial domain. Besides, we employ a cascaded centralized pyramid strategy during the message fusion stage, facilitating flexible sampling across horizontal and vertical spatial dimensions, promoting deep interaction among multiple agents. We conduct quantitative and qualitative experiments on the public OPV2V and DAIR-V2X-C benchmarks, and our proposed MDNet exhibits superior performance and stronger robustness in the 3-D object detection task, providing more precise target detection results.

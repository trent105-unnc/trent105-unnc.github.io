---
_hidden: false
title: Marker-Free Multi-Modal Motion Capture for 6-DoF Object Position and Orientation
Estimation
authors:
  - Jia, Fuhua
  - Yang, Xiaoying
  - Wang, Jiamin
  - Xue, Ning
  - Li, Jiawei
  - Cui, Tianxiang
authors_orcid:
  - null
  - 0000-0003-4506-4801
  - 0000-0002-3236-9465
  - 0000-0003-1449-9933
  - 0000-0003-4127-4190
  - null
year: 2025
doi: https://doi.org/10.1109/cism64958.2025.11060859
openalex_id: W4412109191
venue: 
pdf_url: 
abstract_page: 
abstract_screenshot: 
keywords:
  - Position (finance)
  - Computer vision
  - Orientation (vector space)
  - Computer science
  - Modal
  - Object (grammar)
  - Artificial intelligence
  - Motion estimation
  - Motion capture
  - Motion (physics)
  - Pose
  - Mathematics
  - Geometry
  - Materials science
---

In this work, we present a novel multi-modal, end-to-end, marker-free motion capture framework designed to estimate the six degrees of freedom (6-DoF) states of objects. Traditional motion capture systems often rely on infrared optical, inertial, or magnetic markers to identify and track objects. However, in many application scenarios, such as outdoor environments and robotics development, the use of markers interferes with system operation, and the markers themselves are prone to environmental interference. Our proposed framework tackles these challenges using a two-stage approach, leveraging multimodal sensor fusion techniques. The framework integrates cameras and Light Detection and Ranging (Lidar) sensors around the workspace, each operating at different frequencies. A data synchronizer controls the triggering of these sensors, ensuring synchronized data collection from multiple sensor streams. In stage I, the framework focuses on multimodal feature extraction, utilizing multiple modules to process the sensor data streams and extract spatial features. In stage II, the position and pose extraction module calculates the spatial state of the object by combining the extracted features with the object’s spatial state context from previous frames. We validate the framework through experiments on the Nvidia ISAAC digital twin platform and in real-world environments, demonstrating its feasibility and robustness across a variety of test objects. This approach provides a reliable and flexible solution for motion capture in complex environments, eliminating the need for invasive markers. High real-time performance is achieved at each stage and within each submodule by using lightweight neural networks and time-aligned data synchronization. By integrating multimodal sensor fusion and context-based spatial state computation, the proposed method ensures high recognition accuracy, even in challenging symmetrical objects cases.

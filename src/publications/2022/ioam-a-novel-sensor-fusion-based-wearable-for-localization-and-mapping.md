---
_hidden: false
title: "IOAM: A Novel Sensor Fusion-Based Wearable for Localization and Mapping"
authors:
  - Wu, Renjie
  - Lee, Boon Giin
  - Pike, Matthew
  - Zhu, Linzhen
  - Chai, Xiaoqing
  - Huang, Liang
  - Wu, Xian
authors_orcid:
  - 0000-0002-7356-8137
  - 0000-0001-5743-1010
  - 0000-0002-1543-0148
  - 0009-0004-5036-3907
  - 0000-0002-3974-8943
  - 0000-0003-3331-8798
  - 0000-0001-5615-6838
year: 2022
doi: https://doi.org/10.3390/rs14236081
openalex_id: W4311050067
venue: Remote Sensing
pdf_url: https://www.mdpi.com/2072-4292/14/23/6081/pdf?version=1669970653
abstract_page: 
abstract_screenshot: 
keywords:
  - Computer science
  - Sensor fusion
  - Odometry
  - Trajectory
  - Inertial measurement unit
  - Computer vision
  - Kalman filter
  - Wearable computer
  - STRIDE
  - Mean squared error
  - Artificial intelligence
  - Extended Kalman filter
  - Centroid
  - Robot
  - Mobile robot
  - Mathematics
---

With the development of indoor location-based services (ILBS), the dual foot-mounted inertial navigation system (DF-INS) has been extensively used in many fields involving monitoring and direction-finding. It is a widespread ILBS implementation with considerable application potential in various areas such as firefighting and home care. However, the existing DF-INS is limited by a high inaccuracy rate due to the highly dynamic and non-stable stride length thresholds. The system also provides less clear and significant information visualization of a person’s position and the surrounding map. This study proposes a novel wearable-foot IOAM-inertial odometry and mapping to address the aforementioned issues. First, the person’s gait analysis is computed using the zero-velocity update (ZUPT) method with data fusion from ultrasound sensors placed on the inner side of the shoes. This study introduces a dynamic minimum centroid distance (MCD) algorithm to improve the existing extended Kalman filter (EKF) by limiting the stride length to a minimum range, significantly reducing the bias in data fusion. Then, a dual trajectory fusion (DTF) method is proposed to combine the left- and right-foot trajectories into a single center body of mass (CBoM) trajectory using ZUPT clustering and fusion weight computation. Next, ultrasound-type mapping is introduced to reconstruct the surrounding occupancy grid map (S-OGM) using the sphere projection method. The CBoM trajectory and S-OGM results were simultaneously visualized to provide comprehensive localization and mapping information. The results indicate a significant improvement with a lower root mean square error (RMSE = 1.2 m) than the existing methods.

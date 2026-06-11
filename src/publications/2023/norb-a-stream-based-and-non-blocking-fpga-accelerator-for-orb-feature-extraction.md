---
_hidden: false
title: "NORB: A Stream-Based and Non-Blocking FPGA Accelerator for ORB Feature
Extraction"
authors:
  - Zhang, Qixing
  - Sun, Hao
  - Deng, Qi
  - Yu, Heng
  - Ha, Yajun
authors_orcid:
  - 0000-0002-8784-8674
  - 0000-0003-4518-2533
  - 0000-0002-5150-487X
  - 0000-0002-0305-2135
  - 0000-0003-4244-5916
year: 2023
doi: https://doi.org/10.1109/icecs58634.2023.10382726
openalex_id: W4390693433
venue: 
pdf_url: 
abstract_page: 
abstract_screenshot: 
keywords:
  - Orb (optics)
  - Computer science
  - Field-programmable gate array
  - Latency (audio)
  - Block (permutation group theory)
  - Feature extraction
  - Blocking (statistics)
  - Parallel computing
  - Computation
  - Throughput
  - Computer hardware
  - Artificial intelligence
  - Algorithm
  - Image (mathematics)
  - Operating system
---

Oriented FAST and Rotating BRIEF (ORB) is a key technique for visual feature extraction and matching, which forms the foundation of the state-of-the-art ORB-SLAM systems. Due to the computational complexity, FPGA accelerators for ORB computing are usually used when running ORB-SLAM on low-power platforms. Previous implementations of ORB accelerators need to block the input stream when computing the rBRIEF descriptors, and cannot achieve high throughput on all pixels. In this paper, we propose a stream-based accelerator of ORB feature extraction which achieves non-blocking computation by caching the columns of the corresponding window buffer. The proposed accelerator is implemented on a Zynq UltraScale SoC, and the experimental result shows it achieves an average latency of 1.4ms, which is 44% faster than the state-of-the-art approach, with similar output accuracy. The system has a low resource utilization with power consumption being only 1.5W.

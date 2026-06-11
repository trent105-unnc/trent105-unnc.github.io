---
_hidden: false
title: An Accurate FPGA Online Delay Monitor Supporting All Timing Paths
authors:
  - Jiang, Weixiong
  - Li, Rui
  - Yu, Heng
  - Ha, Yajun
authors_orcid:
  - 0000-0002-6014-6453
  - 0000-0002-2784-5519
  - 0000-0002-0305-2135
  - 0000-0003-4244-5916
year: 2020
doi: https://doi.org/10.1109/iscas45731.2020.9181070
openalex_id: W3091101187
venue: 
pdf_url: 
abstract_page: 
abstract_screenshot: 
keywords:
  - Computer science
  - Jitter
  - Field-programmable gate array
  - Static timing analysis
  - Delay calculation
  - Synchronization (alternating current)
  - Real-time computing
  - Computer hardware
  - Electronic engineering
  - Propagation delay
  - Embedded system
  - Engineering
  - Telecommunications
---

Accurate circuit delay measurement is essential for various purposes such as aging detection, health monitoring, and dynamic voltage and frequency scaling. State-of-the-art measurement techniques exhibit several limitations. For example, they are insufficiently informative by only returning binary results on the status of the circuit being normal or abnormal. More importantly, current approaches are not applicable for measuring the delay of timing paths that end with DSPs and BRAMs. To address the issues, we propose a novel online delay monitor (ODM) for modern FPGA platforms that (1) accurately returns the numerical delay values, (2) and is compatible with all types of timing paths in FPGAs. Our proposed ODM is achieved by employing a shadow register triggered by the output signal of a combinational circuit to sample a phase shifting clock. Besides, our design is capable of conveniently measuring the clock jitters, so we are able to propose an associated jitter management scheme to ensure correct ODM sampling. Experimental results show that our ODM achieves an error within 2% with respect to the ground truth.

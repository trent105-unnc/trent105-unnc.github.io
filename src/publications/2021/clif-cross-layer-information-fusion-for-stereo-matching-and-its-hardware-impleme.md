---
_hidden: false
title: "CLIF: Cross-Layer Information Fusion for Stereo Matching and its Hardware
Implementation"
authors:
  - Chen, Fupeng
  - Liu, Xinzhe
  - Yu, Heng
  - Ha, Yajun
authors_orcid:
  - 0000-0002-1548-8243
  - 0000-0002-7557-4960
  - 0000-0002-0305-2135
  - 0000-0003-4244-5916
year: 2021
doi: https://doi.org/10.1109/iscas51556.2021.9401077
openalex_id: W3159545584
venue: 
abstract_screenshot: 
keywords:
  - Computer science
  - Artificial intelligence
  - Matching (statistics)
  - Extractor
  - Volume (thermodynamics)
  - Field-programmable gate array
  - Information fusion
  - Regularization (linguistics)
  - Robotics
  - Hardware architecture
  - Pattern recognition (psychology)
  - Computer vision
  - Robot
  - Computer hardware
  - Software
---

The rapid advancement of intelligent systems, especially robotics and autonomous driving, is highly reliant on low-complexity and high-accuracy stereo matching algorithms. However, the performance of state-of-the-art stereo matching algorithms still has great space for improvement by gaining awareness of the implicit information hidden in the cost volume layers. In this paper, we propose a low-complexity local stereo matching algorithm named Cross-Layer Information Fusion (CLIF), to improve the matching accuracy by exploring the hidden information. First, we analyze and extract the hidden information into an auxiliary extractor using a novel fusion method. Second, we propose an information sharing strategy that transforms the extractor into a regularization term on each cost volume layer. Then we improve the design by re-constructing the information extractor between the adjacent cost volume layers and form a pipelined hardware architecture on the FPGA platform. Experimental results show that the proposed CLIF algorithm improves 6.53% average accuracy incurring negligible resources and performance impacts, compared to the state-of-the-art solutions.

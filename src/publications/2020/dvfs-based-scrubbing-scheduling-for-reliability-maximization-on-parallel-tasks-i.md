---
_hidden: false
title: DVFS-Based Scrubbing Scheduling for Reliability Maximization on Parallel Tasks
in SRAM-based FPGAs
authors:
  - Li, Rui
  - Yu, Heng
  - Jiang, Weixiong
  - Ha, Yajun
authors_orcid:
  - 0000-0001-8042-0803
  - 0000-0002-0305-2135
  - 0000-0002-6014-6453
  - 0000-0003-4244-5916
year: 2020
doi: https://doi.org/10.1109/dac18072.2020.9218574
openalex_id: W3091774643
venue: 
pdf_url: 
abstract_page: 
abstract_screenshot: 
keywords:
  - Computer science
  - Data scrubbing
  - Control reconfiguration
  - Static random-access memory
  - Field-programmable gate array
  - Embedded system
  - Scheduling (production processes)
  - Parallel computing
  - Schedule
  - Redundancy (engineering)
  - Reliability (semiconductor)
  - Triple modular redundancy
  - Computer hardware
  - Operating system
  - Engineering
---

To obtain high reliability but avoiding the huge area overhead of traditional triple modular redundancy (TMR) methods in SRAM-based FPGAs, scrubbing based methods reconfigure the configuration memory of each task just before its execution. However, due to the limitation of the FPGA reconfiguration module that can only scrub one task at a time, parallel tasks may leave stringent timing requirements to schedule their scrubbing processes. Thus the scrubbing requests may be either delayed or omitted, leading to a less reliable system. To address this issue, we propose a novel optimal DVFS-based scrubbing algorithm to adjust the execution time of user tasks, thus significantly enhance the chance to schedule scrubbing successfully for parallel tasks. Besides, we develop an approximation algorithm to speed up its optimal version and develop a novel K-Means based method to reduce the memory usage of the algorithm. Compared to the state-of-the-art, experimental results show that our work achieves up to 36.11% improvement on system reliability with comparable algorithm execution time and memory consumption.

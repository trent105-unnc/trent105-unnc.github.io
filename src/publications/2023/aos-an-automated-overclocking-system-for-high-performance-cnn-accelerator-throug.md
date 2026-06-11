---
_hidden: false
title: "AOS: An Automated Overclocking System for High-Performance CNN Accelerator
Through Timing Delay Measurement on FPGA"
authors:
  - Jiang, Weixiong
  - Yu, Heng
  - Chen, Fupeng
  - Ha, Yajun
authors_orcid:
  - 0000-0002-6014-6453
  - 0000-0002-0305-2135
  - 0000-0002-1548-8243
  - 0000-0003-4244-5916
year: 2023
doi: https://doi.org/10.1109/tcad.2023.3235803
openalex_id: W4315489349
venue: IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems
pdf_url: 
abstract_page: 
abstract_screenshot: 
keywords:
  - Jitter
  - Field-programmable gate array
  - Computer science
  - Static timing analysis
  - Delay calculation
  - Computer hardware
  - Real-time computing
  - Embedded system
  - Algorithm
  - Propagation delay
---

With the inherent algorithmic error resilience of conventional neural networks (CNNs) and the worst-case design methodologies of current electronic design automation tools, overclocking-based timing speculation is a promising technique to improve the performance of CNN accelerators on FPGA by removing unnecessary timing margins. To avoid potential timing errors, timing delay measurement should be used during overclocking. However, current approaches are not yet good at measuring paths with more intense variability factors such as jitter and lack an automated process for testing circuit delays. In this article, we first propose 2-dimension multiframe fusion to deal with the sampling jitter, then present a timing delay measurement-based automatic overclocking system (AOS) running on heterogeneous FPGA for high-performance CNN accelerators. On the FPGA side, AOS is composed of timing delay monitors (TDMs) that can measure all types of timing paths, a TDM controller that converts the sampled values of TDMs into timing delay in terms of the ratio of path delay to the clock period. On the CPU side, AOS converts the path delay from clock period ratio to absolute delay value and decides the frequency of the accelerator in the next iteration. We demonstrate AOS with a SkyNet accelerator on the Xilinx ZCU104 board and achieve 657 FPS at 436 MHz without accuracy degradation, which is <inline-formula xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink"> <tex-math notation="LaTeX">$1.41\times $ </tex-math></inline-formula> performance compared to the baseline.

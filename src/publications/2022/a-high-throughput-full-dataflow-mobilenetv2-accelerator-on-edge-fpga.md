---
_hidden: false
title: A High-Throughput Full-Dataflow MobileNetv2 Accelerator on Edge FPGA
authors:
  - Jiang, Weixiong
  - Yu, Heng
  - Ha, Yajun
authors_orcid:
  - 0000-0002-6014-6453
  - 0000-0002-0305-2135
  - 0000-0003-4244-5916
year: 2022
doi: https://doi.org/10.1109/tcad.2022.3198246
openalex_id: W4291910419
venue: IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems
abstract_screenshot: 
keywords:
  - Dataflow
  - Computer science
  - Field-programmable gate array
  - Quantization (signal processing)
  - Speedup
  - Throughput
  - Edge device
  - Parallel computing
  - Latency (audio)
  - Computer hardware
  - Hardware acceleration
  - Algorithm
  - Cloud computing
---

FPGA accelerators for lightweight neural networks, such as MobileNetv2, are of great need in edge computing applications with high throughput requirements. Dataflow architecture has been considered a promising approach to optimize throughput since the intermediate feature map transfers can be significantly saved. However, previous MobileNetv2 accelerators only achieved a partial-dataflow architecture, and just one-third of the feature map transfers can be saved. To solve this issue, we propose a scheme to achieve a full-dataflow MobileNetv2 accelerator on FPGA. The scheme contains four techniques. First, we improve the full-integer quantization for easier deployment on hardware. Second, we propose tunable activation weight imbalance transfer for less quantization accuracy loss. Third, we present several highly optimized accelerator components whose parallelism can be flexibly adjusted and implement residual connection with deeper FIFO so that the requirements of the full-dataflow architecture can be fully met. Finally, we present a computing resource allocation strategy to balance the latency of each layer, and a memory resource allocation strategy to effectively use the on-chip memory. Compared to the state-of-the-art, experimental results show that the accelerator achieves 1910 FPS with <inline-formula xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink"> <tex-math notation="LaTeX">$1.8\times $ </tex-math></inline-formula> speedup when implemented on the Xilinx ZCU102 FPGA. In addition, it reaches 72.98% Top-1 accuracy with 8-bit integer quantization that outperforms all the other MobileNetv2 accelerators.

---
_hidden: false
title: "FODM: A Framework for Accurate Online Delay Measurement Supporting All Timing
Paths in FPGA"
authors:
  - Jiang, Weixiong
  - Yu, Heng
  - Zhang, Hongtu
  - Shu, Yuhao
  - Li, Rui
  - Chen, Jian
  - Ha, Yajun
authors_orcid:
  - 0000-0002-6014-6453
  - 0000-0002-0305-2135
  - 0000-0001-9879-1370
  - 0000-0002-0357-4507
  - 0000-0002-3838-5490
  - 0000-0003-1030-7455
  - 0000-0003-4244-5916
year: 2022
doi: https://doi.org/10.1109/tvlsi.2022.3144321
openalex_id: W4210301590
venue: IEEE Transactions on Very Large Scale Integration (VLSI) Systems
pdf_url: 
abstract_page: 
abstract_screenshot: 
keywords:
  - Field-programmable gate array
  - Computer science
  - Static timing analysis
  - Synchronization (alternating current)
  - Path (computing)
  - Clock synchronization
  - Standard cell
  - Clock rate
  - Shadow (psychology)
  - Algorithm
  - Computer hardware
  - Real-time computing
  - Embedded system
  - Chip
  - Integrated circuit
  - Telecommunications
---

Voltage and frequency scaling (VFS) has been widely used to improve energy efficiency, lifespan, and system reliability by converting conservative timing margins into <inline-formula xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink"> <tex-math notation="LaTeX">$V_{\text {dd}}$ </tex-math></inline-formula> reduction. Along these lines, to investigate the potential implementation of VFS technique in exploring the timing margins under different voltages and frequencies, <italic xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">in situ</i> or online circuit delay measurement is required to monitor all timing paths, which are usually ended with terminal registers. The previously reported online delay measurement approaches require the output of a terminal register to be measurable. However, some FPGA timing paths are ended with embedded hardcores such as DSPs or BRAMs. It is impossible to measure the output of the terminal register inside a hardcore. To address the issue, we propose an online delay monitor (ODM) that can accurately measure the delay of any type of timing path in real-time conditions. The ODM is mainly composed of two shadow registers and a phase-shifted clock. The shadow registers use a phase-shifted clock signal as the input and the output signal of the combinational logic as the clock. In addition, we present an automatic tool and its corresponding design flow (FODM) for inserting an ODM to monitor a path. Compared with the state-of-the-art, our experimental results indicate that the proposed method has the ability to accurately measure the delays online for all the potential timing paths, regardless of their path termination types. Moreover, we demonstrate an average measurement error of only 1.51% using eight floating-point operators at different voltages.

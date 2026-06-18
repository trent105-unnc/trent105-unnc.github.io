---
_hidden: false
title: DVFS-Based Quality Maximization for Adaptive Applications With Diminishing Return
authors:
  - Yu, Heng
  - Ha, Yajun
  - Veeravalli, Bharadwaj
  - Chen, Fupeng
  - El‐Sayed, Hesham
authors_orcid:
  - 0000-0002-0305-2135
  - 0000-0003-4244-5916
  - 0000-0001-9000-1813
  - 0000-0002-1548-8243
  - 0000-0002-7488-0915
year: 2020
doi: https://doi.org/10.1109/tc.2020.2997242
openalex_id: W3028727627
venue: IEEE Transactions on Computers
abstract_screenshot: 
keywords:
  - Computer science
  - Exploit
  - Frequency scaling
  - Maximization
  - Overhead (engineering)
  - Quality (philosophy)
  - Benchmark (surveying)
  - Adaptability
  - Mathematical optimization
  - Parallel computing
  - Distributed computing
  - Voltage
---

Application-level approximate computing exploits inherent resilience of adaptive applications, and trades off application output quality for runtime system resources. Existing methods treat computing quality as the number of clock cycles to execute a task, but they overlook the fact that the quality of many real-life applications exhibit the characteristic of diminishing return as the processor continues executing. The diminishing return of the quality is largely due to the features of iterative processing or successive refinement inherent in those applications. Ignoring it leads to large over-estimation in contemporary quality optimization approaches. In this article, we exploit the application adaptability to achieve quality maximization by taking both system resource constraints and diminishing return of the quality into account. We first reveal that the diminishing return of the quality is inherent in several well-known applications, and suggest an exponential model that accurately captures it. Second, we propose a dynamic frequency scaling (DFS) methodology to optimally decide the processor execution cycles for such applications, in order to maximize the output quality under system energy, timing, and temperature constraints. We transform the DFS problem to an iterative pseudo quadratic programming heuristic that can be efficiently solved. Third, we present a wrapping dynamic voltage scaling (wDVS) methodology to achieve further quality improvement, by judiciously adjusting the supply voltage to provide extra frequency scaling space. Compared to state-of-the-art algorithms, our approach produces at least 19.1 percent quality improvement on all evaluated cases, with negligible execution overhead.

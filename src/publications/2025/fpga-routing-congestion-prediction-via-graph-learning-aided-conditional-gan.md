---
_hidden: false
title: FPGA Routing Congestion Prediction via Graph Learning-Aided Conditional GAN
authors:
  - Yang, Qingyu
  - Li, Jingjin
  - Li, Rui
  - He, Yuting
  - Ha, Yajun
  - Shen, Linlin
  - Bai, Ruibin
  - Yu, Heng
authors_orcid:
  - 0000-0001-9375-0457
  - 0000-0001-7248-5180
  - 0000-0002-2953-9742
  - 0000-0002-1018-1912
  - 0000-0003-4244-5916
  - 0000-0003-1420-0815
  - 0000-0003-1722-568X
  - 0000-0002-0305-2135
year: 2025
doi: https://doi.org/10.1145/3773770
openalex_id: W4415543847
venue: ACM Transactions on Design Automation of Electronic Systems
abstract_screenshot: 
keywords:
  - Netlist
  - Routing (electronic design automation)
  - Convolutional neural network
  - Field-programmable gate array
  - Control flow graph
  - Graph
  - Fuse (electrical)
  - Static routing
  - Multipath routing
  - Key (lock)
---

Routing congestion prediction expedites the closure of FPGA placement and routing (PnR). Current prediction methods employ convolutional models, taking advantage of their capacity of dealing with image-style inputs. However, these methods neglect the direct representation of circuit netlist and its information fusion with placement scheme. Moreover, the limited size of the convolutional kernel struggles to capture circuit connectivity in distant geometric regions. To address these issues, this article presents a graph-based routing congestion prediction framework that fuses the information contained in the circuit’s topological netlist and geometric placement scheme, and leverages a conditional generative adversarial network (cGAN) model to achieve optimized prediction performance compared to contemporary approaches. Our framework encompasses three key components: (1) the HeteroGraph, a heterogeneous graph that integrates a netlist subgraph and a layout subgraph by space mapping edges; (2) the HeteroGNN, a heterogeneous graph neural network that learns the latent features of both the circuit netlist and placement scheme through dual-space message-passing; and (3) the HeteroGNN-embedded cGAN, a model that combines the HeteroGNN with a cGAN for accurate FPGA routing congestion prediction. Compared to state-of-the-art approaches, our method reduces the routing congestion prediction’s root-mean-square error by 18.2% on the VTR7 benchmarks and by 15.0% on the large-scale Titan23 benchmarks. The code associated with this article can be found at https://github.com/AIPnR/FPGA_Hetero_Congestion_Prediction .

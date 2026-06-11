---
_hidden: false
title: Criticality-Aware Negotiation-Driven Scrubbing Scheduling for Reliability
Maximization in SRAM-Based FPGAs
authors:
  - Li, Rui
  - Yu, Heng
  - Li, Lin
  - Ha, Yajun
authors_orcid:
  - 0000-0002-2953-9742
  - 0000-0002-0305-2135
  - 0000-0002-6804-702X
  - 0000-0003-4244-5916
year: 2023
doi: https://doi.org/10.1109/tcad.2023.3257710
openalex_id: W4327522392
venue: IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems
pdf_url: 
abstract_page: 
abstract_screenshot: 
keywords:
  - Data scrubbing
  - Static random-access memory
  - Field-programmable gate array
  - Computer science
  - Maximization
  - Scheduling (production processes)
  - Criticality
  - Reliability (semiconductor)
  - Reliability engineering
  - Embedded system
  - Parallel computing
  - Negotiation
  - Computer hardware
  - Operating system
  - Engineering
  - Mathematical optimization
  - Operations management
  - Mathematics
---

Memory scrubbing is a resource-efficient technique to ensure the high reliability of SRAM-based FPGAs by refreshing the configuration memory just before its execution. To maximize reliability, a scrubbing scheduling algorithm is expected to scrub as many tasks as possible. Unfortunately, contemporary scheduling algorithms either suboptimally handle scrubbing conflicts under bursty requests from multiple user tasks or discriminate against low-criticality tasks by giving them very low scrubbing opportunities. Besides, exploring the architectural support for scrubbing problems may bring considerable potential for reliability improvements. However, this direction of scheduling-architecture co-optimization has not been well studied so far. In this article, we propose a negotiation-based dynamic scrubbing framework, which addresses the above-mentioned issues in three phases: 1) we propose a negotiation-driven scrubbing scheduling algorithm, which temporarily allows and iteratively reduces the conflicts of scrubbing tasks in order to accommodate more scrubbing tasks to be scheduled; 2) we develop a logistic probability model to prevent scheduling starvation of a set of mix-criticality tasks by dynamically legalizing conflicting ones, considering both the criticality and schedulability of each task; and 3) we develop a dynamic voltage/frequency scaling-based multi-ICAPs allocation algorithm to co-optimize with FPGA architectural features for reliability maximization. Compared to the state-of-the-art, experimental results show that our work achieves up to 31.46% improvement in terms of reliability for contemporary SRAM-based FPGAs.

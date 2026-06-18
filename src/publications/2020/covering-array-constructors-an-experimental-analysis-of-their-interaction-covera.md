---
_hidden: false
title: "Covering Array Constructors: An Experimental Analysis of Their Interaction
Coverage and Fault Detection"
authors:
  - Huang, Rubing
  - Chen, Haibo
  - Zhou, Yunan
  - Chen, Tsong Yueh
  - Towey, Dave
  - Lau, Man Fai
  - Ng, Sebastian
  - Merkel, Robert
  - Chen, Jinfu
authors_orcid:
  - 0000-0002-1769-6126
  - 0000-0002-3284-9143
  - null
  - 0000-0003-3578-0994
  - 0000-0003-0877-4353
  - 0000-0002-2271-6259
  - 0000-0002-2074-6673
  - 0000-0002-0658-9800
  - 0000-0002-3124-5452
year: 2020
doi: https://doi.org/10.1093/comjnl/bxaa020
openalex_id: W3020749904
venue: The Computer Journal
abstract_screenshot: 
keywords:
  - Computer science
  - Fault (geology)
  - Preference
  - Fault detection and isolation
  - Algorithm
  - Data mining
  - Artificial intelligence
  - Mathematics
  - Statistics
  - Geology
  - Seismology
---

Abstract Combinatorial interaction testing (CIT) aims at constructing a covering array (CA) of all value combinations at a specific interaction strength, to detect faults that are caused by the interaction of parameters. CIT has been widely used in different applications, with many algorithms and tools having been proposed to support CA construction. To date, however, there appears to have been no studies comparing different CA constructors when only some of the CA test cases are executed. In this paper, we present an investigation of five popular CA constructors: ACTS, Jenny, PICT, CASA and TCA. We conducted empirical studies examining the five programs, focusing on interaction coverage and fault detection. The experimental results show that when there is no preference or special justification for using other CA constructors, then Jenny is recommended—because it achieves better interaction coverage and fault detection than the other four constructors in many cases. Our results also show that when using ACTS or CASA, their CAs must be prioritized before testing. The main reason for this is that these CAs can result in considerable interaction coverage or fault detection capabilities when executing a large number of test cases; however, they may also produce the lowest rates of fault detection and interaction coverage.

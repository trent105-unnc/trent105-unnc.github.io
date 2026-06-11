---
_hidden: false
title: "Metamorphic Testing of an Automated Parking System: An Experience Report"
authors:
  - Towey, Dave
  - Luo, Zepei
  - Zheng, Ziqi
  - Zhou, Peijian
  - Yang, Junbo
  - Ingkasit, Puttipatt
  - Lao, Changyang
  - Pike, Matthew
  - Zhang, Yifan
authors_orcid:
  - 0000-0003-0877-4353
  - null
  - null
  - 0000-0001-9738-356X
  - 0009-0003-5990-6931
  - null
  - null
  - 0000-0002-1543-0148
  - 0000-0003-1289-2192
year: 2023
doi: https://doi.org/10.1109/compsac57700.2023.00274
openalex_id: W4385485107
venue: 
pdf_url: 
abstract_page: 
abstract_screenshot: 
keywords:
  - Metamorphic rock
  - Computer science
  - Geology
  - Petrology
---

Automated Driving Systems (ADSs) have gained popularity recently. However, the unstable and unsafe ADSs have caused many traffic accidents and received widespread attention. One way to alleviate such issues is to enhance the correctness and efficiency of testing ADSs. Due to the difficulty of checking ADSs’ behavior such as parking the car, confirming the correctness of the actual behavior may be non-trivial or impossible. This kind of problem is called the test oracle problem. Unlike traditional software testing, Metamorphic Testing (MT) does not focus on the correctness of the actual strategy but examines whether or not the inputs and outputs of multiple executions of a Software Under Test (SUT) satisfy certain relations of the SUT, called Metamorphic Relations (MRs). The paper also implements Mutation Analysis (MA) on Baidu Apollo ADS to evaluate our MT. MA involves small modifications to a program’s source code to see if test-cases can detect these changes. This work was part of a larger endeavour to create an Open Educational Resource (OER) to support learning about how to apply MT to ADSs. This paper reports on an experience of implementing MT to test the Automated Parking System (APS) of Apollo ADS and applying MA to evaluate the MT.

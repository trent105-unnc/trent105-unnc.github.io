---
_hidden: false
title: Automatic quantitative stroke severity assessment based on Chinese clinical
named entity recognition with domain-adaptive pre-trained large language model
authors:
  - Gu, Zhanzhong
  - He, Xiangjian
  - Yu, Ping
  - Jia, Wenjing
  - Yang, Xiguang
  - Peng, Gang
  - Hu, Penghui
  - Chen, Shiyan
  - Chen, Hongjie
  - Lin, Yiguang
authors_orcid:
  - 0000-0002-0628-5575
  - 0000-0001-8962-540X
  - 0000-0002-7910-9396
  - 0000-0002-0940-3338
  - 0000-0002-6441-6836
  - null
  - 0000-0003-3876-2732
  - 0000-0002-4195-3014
  - 0009-0009-8968-2047
  - 0000-0002-4637-9701
year: 2024
doi: https://doi.org/10.1016/j.artmed.2024.102822
openalex_id: W4392202585
venue: Artificial Intelligence in Medicine
pdf_url: https://doi.org/10.1016/j.artmed.2024.102822
abstract_page: 
abstract_screenshot: 
keywords:
  - Computer science
  - Artificial intelligence
  - Natural language processing
  - Domain (mathematical analysis)
  - Stroke (engine)
  - Machine learning
---

BACKGROUND: Stroke is a prevalent disease with a significant global impact. Effective assessment of stroke severity is vital for an accurate diagnosis, appropriate treatment, and optimal clinical outcomes. The National Institutes of Health Stroke Scale (NIHSS) is a widely used scale for quantitatively assessing stroke severity. However, the current manual scoring of NIHSS is labor-intensive, time-consuming, and sometimes unreliable. Applying artificial intelligence (AI) techniques to automate the quantitative assessment of stroke on vast amounts of electronic health records (EHRs) has attracted much interest. OBJECTIVE: This study aims to develop an automatic, quantitative stroke severity assessment framework through automating the entire NIHSS scoring process on Chinese clinical EHRs. METHODS: Our approach consists of two major parts: Chinese clinical named entity recognition (CNER) with a domain-adaptive pre-trained large language model (LLM) and automated NIHSS scoring. To build a high-performing CNER model, we first construct a stroke-specific, densely annotated dataset "Chinese Stroke Clinical Records" (CSCR) from EHRs provided by our partner hospital, based on a stroke ontology that defines semantically related entities for stroke assessment. We then pre-train a Chinese clinical LLM coined "CliRoberta" through domain-adaptive transfer learning and construct a deep learning-based CNER model that can accurately extract entities directly from Chinese EHRs. Finally, an automated, end-to-end NIHSS scoring pipeline is proposed by mapping the extracted entities to relevant NIHSS items and values, to quantitatively assess the stroke severity. RESULTS: Results obtained on a benchmark dataset CCKS2019 and our newly created CSCR dataset demonstrate the superior performance of our domain-adaptive pre-trained LLM and the CNER model, compared with the existing benchmark LLMs and CNER models. The high F1 score of 0.990 ensures the reliability of our model in accurately extracting the entities for the subsequent automatic NIHSS scoring. Subsequently, our automated, end-to-end NIHSS scoring approach achieved excellent inter-rater agreement (0.823) and intraclass consistency (0.986) with the ground truth and significantly reduced the processing time from minutes to a few seconds. CONCLUSION: Our proposed automatic and quantitative framework for assessing stroke severity demonstrates exceptional performance and reliability through directly scoring the NIHSS from diagnostic notes in Chinese clinical EHRs. Moreover, this study also contributes a new clinical dataset, a pre-trained clinical LLM, and an effective deep learning-based CNER model. The deployment of these advanced algorithms can improve the accuracy and efficiency of clinical assessment, and help improve the quality, affordability and productivity of healthcare services.

---
_hidden: false
title: "LLM4Netlist: LLM-Enabled Step-Based Netlist Generation From Natural Language
Description"
authors:
  - Ye, Kailiang
  - Yang, Qingyu
  - Lu, Zheng
  - Yu, Heng
  - Cui, Tianxiang
  - Bai, Ruibin
  - Shen, Linlin
authors_orcid:
  - null
  - 0000-0001-9375-0457
  - 0000-0001-8719-3690
  - 0000-0002-0305-2135
  - 0000-0002-0102-2581
  - 0000-0003-1722-568X
  - 0000-0003-1420-0815
year: 2025
doi: https://doi.org/10.1109/jetcas.2025.3568548
openalex_id: W4410226776
venue: IEEE Journal on Emerging and Selected Topics in Circuits and Systems
pdf_url: 
abstract_page: 
abstract_screenshot: 
keywords:
  - Netlist
  - Computer science
  - Natural language generation
  - Programming language
  - Natural language
  - Natural language processing
  - Computer hardware
---

Empowered by Large Language Models (LLMs), substantial progress has been made in enhancing the EDA design flow in terms of high-level synthesis, such as direct translation from high-level language into RTL description. On the other hand, little research has been done for logic synthesis on the netlist generation. A direct application of LLMs for netlist generation presents additional challenges due to the scarcity of netlist-specific data, the need for tailored fine-tuning, and effective generation methods. This work first presents a novel training set and two evaluation sets catered for direct netlist generation LLMs, and an effective dataset construction pipeline to construct these datasets. Then this work proposes LLM4Netlist, a novel step-based netlist generation framework via fine-tuned LLM. The framework consists of a step-based prompt construction module, a fine-tuned LLM, a code confidence estimator, and a feedback loop module, and is able to generate netlist codes directly from natural language functional descriptions. We evaluate the efficacy of our approach with our novel evaluation datasets. The experimental results demonstrate that, compared to the average score of the 10 commercial LLMs listed in our experiments, our method shows a functional correctness increase of 183.41% on the NetlistEval dataset and a 91.07% increase on NGen. The training and testing data, along with the processing code, can be found at https://github.com/klyebit/LLM4Netlist.git.

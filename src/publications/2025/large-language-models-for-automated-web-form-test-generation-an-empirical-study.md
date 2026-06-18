---
_hidden: false
title: "Large Language Models for Automated Web-Form-Test Generation: An Empirical
Study"
authors:
  - Li, Tao
  - Cui, Chenhui
  - Huang, Rubing
  - Towey, Dave
  - Ma, Lei
authors_orcid:
  - 0009-0001-7413-9692
  - 0009-0004-8746-316X
  - 0000-0002-1769-6126
  - 0000-0003-0877-4353
  - 0000-0002-8621-2420
year: 2025
doi: https://doi.org/10.1145/3735553
openalex_id: W4410344404
venue: ACM Transactions on Software Engineering and Methodology
abstract_screenshot: 
keywords:
  - Computer science
  - Test (biology)
  - Software engineering
  - Web application
  - Natural language processing
  - Programming language
  - World Wide Web
  - Information retrieval
---

Testing web forms is an essential activity for ensuring the quality of web applications. It typically involves evaluating the interactions between users and forms. Automated test-case generation remains a challenge for web-form testing: Due to the complex, multi-level structure of Web pages, it can be difficult to automatically capture their inherent contextual information for inclusion in the tests. Large Language Models (LLMs) have shown great potential for contextual text generation. This motivated us to explore how they could generate automated tests for web forms, making use of the contextual information within form elements. To the best of our knowledge, no comparative study examining different LLMs has yet been reported for web-form-test generation. To address this gap in the literature, we conducted a comprehensive empirical study investigating the effectiveness of 11 LLMs on 146 web forms from 30 open source Java web applications. In addition, we propose three HTML-structure-pruning methods to extract key contextual information. The experimental results show that different LLMs can achieve different testing effectiveness, with the GPT-4, GLM-4, and Baichuan2 LLMs generating the best web-form tests. Compared with GPT-4, the other LLMs had difficulty generating appropriate tests for the web forms: Their Successfully Submitted Rates (SSRs)—the proportions of the LLMs-generated web-form tests that could be successfully inserted into the web forms and submitted—decreased by 9.10% to 74.15%. Our findings also show that, for all LLMs, when the designed prompts include complete and clear contextual information about the web forms, more effective web-form tests were generated. Specifically, when using Parser-Processed HTML for Task Prompt (PH-P), the SSR averaged 70.63%, higher than the 60.21% for Raw HTML for Task Prompt (RH-P) and 50.27% for LLM-Processed HTML for Task Prompt (LH-P). With RH-P, GPT-4’s SSR was 98.86%, outperforming models like LLaMa2 (7B) with 34.47% and GLM-4V with 0%. Similarly, with PH-P, GPT-4 reached an SSR of 99.54%, the highest among all models and prompt types. Finally, this article also highlights strategies for selecting LLMs based on performance metrics, and for optimizing the prompt design to improve the quality of the web-form tests.

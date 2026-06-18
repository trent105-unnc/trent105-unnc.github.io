---
_hidden: false
title: "Large Language Models for Automated Web-Form-Test Generation: An Empirical
Study — RCR Report"
authors:
  - Li, Tao
  - Cui, Chenhui
  - Huang, Rubing
  - Towey, Dave
  - Ma, Lei
authors_orcid:
  - null
  - 0009-0004-8746-316X
  - null
  - 0000-0003-0877-4353
  - null
year: 2026
doi: https://doi.org/10.1145/3797275
openalex_id: W7128771428
venue: ACM Transactions on Software Engineering and Methodology
abstract_screenshot: 
keywords:
  - Empirical research
  - Task (project management)
  - Replication (statistics)
  - Task analysis
  - Extension (predicate logic)
---

This report presents a framework that enables the reproduction and extension of our empirical evaluations using Large Language Models (LLMs) for automated web-form-test generation. The framework includes HTML pruning , context construction , prompt design , LLM communication , and web-form-test insertion . It involves the construction of three types of prompts (from HTML) to guide the test generation: Raw HTML for Task Prompt (RH-P); LLM-Processed HTML for Task Prompt (LH-P); and Parser-Processed HTML for Task Prompt (PH-P). The framework provides an LLM communication module that standardizes interactions with provider Application Programming Interfaces (APIs). Our study utilized public-API models and demonstrated that PH-P consistently achieved a higher successfully-submitted rate (SSR) than RH-P and LH-P. To support the replication of our work, we have released the source code, a dataset subset, and the relevant scripts.

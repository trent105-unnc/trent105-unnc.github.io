---
_hidden: false
title: "Using Obfuscators to Test Compilers: A Metamorphic Experience"
authors:
  - Cho, Injae
  - Towey, Dave
  - Kar, Pushpendu
authors_orcid:
  - null
  - 0000-0003-0877-4353
  - 0000-0003-4410-1172
year: 2023
doi: https://doi.org/10.1109/compsac57700.2023.00276
openalex_id: W4385489102
venue: 
pdf_url: 
abstract_page: 
abstract_screenshot: 
keywords:
  - Compiler
  - Computer science
  - Correctness
  - Programming language
  - Android (operating system)
  - Software engineering
  - Oracle
  - Operating system
---

Android compilers play a crucial role in Android app development. The correctness of the apps relies on the compilers because the source code of the app is translated into the target language by the compilers. The use of obfuscators is becoming the standard in app development to prevent reverse engineering or code tampering. Despite their importance, both compilers and obfuscators lack an oracle, which is the mechanism to determine the correctness of the execution, and hence they can be called untestable software. Metamorphic Testing (MT) is a state-of-the-art testing method that can test untestable software. MT tests software based on Metamorphic Relations (MRs). Recent studies have shown that program transformation, an MT-based compiler-testing strategy, is highly effective in revealing bugs in compilers. However, this strategy requires sophisticated tools that could take significant time to develop. Therefore, program transformation using obfuscators is proposed. Based on research into testing obfuscators using MT, it is suggested that an MT-based compiler-testing strategy could be achieved by using obfuscators. In addition, this method has the potential to detect bugs in both compilers and obfuscators. This paper reports on our experience using MT techniques to test compilers and obfuscators. We present three related MRs, two of which uncover evidence of faults.

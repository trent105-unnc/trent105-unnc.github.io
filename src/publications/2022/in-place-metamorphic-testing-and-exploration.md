---
_hidden: false
title: In-place metamorphic testing and exploration
authors:
  - Zhou, Zhi Quan
  - Zhu, Junting
  - Chen, Tsong Yueh
  - Towey, Dave
authors_orcid:
  - 0000-0003-1769-9367
  - null
  - 0000-0003-3578-0994
  - 0000-0003-0877-4353
year: 2022
doi: https://doi.org/10.1145/3524846.3527334
openalex_id: W4318325591
venue: 
pdf_url: 
abstract_page: 
abstract_screenshot: 
keywords:
  - Computer science
  - Frame (networking)
  - Oracle
  - Computer vision
  - Artificial intelligence
  - Data stream mining
  - Software
  - Perception
  - Data mining
  - Real-time computing
  - Programming language
---

In this paper, we consider the testing of software whose input involves a data stream, such as in video analysis applications. To address the oracle problem in testing this kind of software, existing metamorphic testing (MT) and metamorphic exploration (ME) techniques typically generate both source and follow-up input streams. In contrast, we propose a different strategy: an in-place method. Instead of examining relations among multiple input streams, our method works on a finer granularity by investigating relations among the data frames within a single input stream --- such as the relations among the image frames within a video stream --- treating a frame, rather than a stream, as a test case. Because our method does not generate any follow-up input stream, or change any frame values, it is also suitable for runtime error detection. We have applied this in-place method to testing video streams in Baidu Apollo, a real-life autonomous driving system. Our study identified previously-unknown obstacle perception failures in the camera perception module, including both undetected and incorrectly-detected objects. The empirical results show that our approach is practical, and readily applicable to industrial-scale systems that include (but are not limited to) the computer vision domain.

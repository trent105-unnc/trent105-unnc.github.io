---
_hidden: false
title: "WSI-LLaVA: A Multimodal Large Language Model for Whole Slide Image"
authors:
  - Liang, Yuci
  - Lyu, Xinheng
  - Chen, Wenting
  - Ding, Meidan
  - Zhang, Jipeng
  - He, Xiangjian
  - Wu, Song
  - Xing, Xiaohan
  - Yang, Sen
  - Wang, Xiyue
  - Shen, Linlin
authors_orcid:
  - null
  - 0009-0009-5342-5495
  - 0000-0001-7912-154X
  - null
  - 0000-0002-3269-6992
  - 0000-0001-8962-540X
  - 0000-0003-3504-1630
  - 0000-0002-9992-3387
  - 0000-0002-0639-4122
  - 0000-0002-3597-9090
  - null
year: 2025
doi: https://doi.org/10.1109/iccv51701.2025.02109
openalex_id: W4405037468
venue: 
pdf_url: https://arxiv.org/pdf/2412.02141
abstract_page: 2
abstract_screenshot: wsi-llava-a-multimodal-large-language-model-for-whole-slide-image.png
keywords:
  - Computer science
  - Image (mathematics)
  - Language model
  - Natural language processing
  - Artificial intelligence
  - Linguistics
  - Philosophy
---

Recent advancements in computational pathology have produced patch-level Multi-modal Large Language Models (MLLMs), but these models are limited by their inability to analyze whole slide images (WSIs) comprehensively and their tendency to bypass crucial morphological features that pathologists rely on for diagnosis. To address these challenges, we first introduce WSI-Bench, a large-scale morphology-aware benchmark containing 180k VQA pairs from 9,850 WSIs across 30 cancer types, designed to evaluate MLLMs' understanding of morphological characteristics crucial for accurate diagnosis. Building upon this benchmark, we present WSI-LLaVA, a novel framework for gigapixel WSI understanding that employs a three-stage training approach: WSI-text alignment, feature space alignment, and task-specific instruction tuning. To better assess model performance in pathological contexts, we develop two specialized WSI metrics: WSI-Precision and WSI-Relevance. Experimental results demonstrate that WSI-LLaVA outperforms existing models across all capability dimensions, with a significant improvement in morphological analysis, establishing a clear correlation between morphological understanding and diagnostic accuracy.

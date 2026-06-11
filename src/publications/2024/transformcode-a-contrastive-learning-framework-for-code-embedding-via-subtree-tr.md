---
_hidden: false
title: "TransformCode: A Contrastive Learning Framework for Code Embedding via Subtree
Transformation"
authors:
  - Xian, Zixiang
  - Huang, Rubing
  - Towey, Dave
  - Fang, Chunrong
  - Chen, Zhenyu
authors_orcid:
  - 0000-0002-8892-6187
  - 0000-0002-1769-6126
  - 0000-0003-0877-4353
  - 0000-0002-9930-7111
  - 0000-0002-9592-7022
year: 2024
doi: https://doi.org/10.1109/tse.2024.3393419
openalex_id: W4395470967
venue: IEEE Transactions on Software Engineering
pdf_url: 
abstract_page: 
abstract_screenshot: 
keywords:
  - Computer science
  - Programming language
  - Transformation (genetics)
  - Embedding
  - Code (set theory)
  - Model transformation
  - Theoretical computer science
  - Program transformation
  - Artificial intelligence
  - Natural language processing
  - Software engineering
---

Artificial intelligence (AI) has revolutionized software engineering (SE) by enhancing software development efficiency. The advent of pre-trained models (PTMs) leveraging transfer learning has significantly advanced AI for SE. However, existing PTMs that operate on individual code tokens suffer from several limitations: They are costly to train and fine-tune; and they rely heavily on labeled data for fine-tuning on task-specific datasets.In this paper, we present TransformCode, a novel framework that learns code embeddings in a contrastive learning manner. Our framework is encoder-agnostic and language-agnostic, which means that it can leverage any encoder model and handle any programming language.We also propose a novel data-augmentation technique called abstract syntax tree (AST) transformation, which applies syntactic and semantic transformations to the original code snippets, to generate more diverse and robust samples for contrastive learning. Our framework has several advantages over existing methods: (1) It is flexible and adaptable, because it can easily be extended to other downstream tasks that require code representation (such as code-clone detection and classification); (2) it is efficient and scalable, because it does not require a large model or a large amount of training data, and it can support any programming language; (3) it is not limited to unsupervised learning, but can also be applied to some supervised learning tasks by incorporating task-specific labels or objectives; and (4) it can also adjust the number of encoder parameters based on computing resources. We evaluate our framework on several code-related tasks, and demonstrate its effectiveness and superiority over the state-of-the-art methods such as SourcererCC, Code2vec, and InferCode.

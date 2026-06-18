---
_hidden: false
title: Knowledge enhancement and disentanglement learning for video captioning
authors:
  - Wang, Mingyue
  - Ma, Yong
  - Cai, Biao
  - Li, Dongfen
  - He, Xiangjian
  - Wang, Ruili
authors_orcid:
  - 0009-0006-3627-0354
  - 0000-0003-0418-9210
  - 0000-0002-2706-4982
  - 0000-0002-3892-4546
  - 0000-0001-8962-540X
  - 0000-0001-7117-2772
year: 2025
doi: https://doi.org/10.1016/j.knosys.2025.114003
openalex_id: W4412430533
venue: Knowledge-Based Systems
abstract_screenshot: 
keywords:
  - Closed captioning
  - Computer science
  - Multimedia
  - Artificial intelligence
---

Video captioning, bridging computer vision and natural language, is crucial for various knowledge-based systems in the age of video streaming. Recent video captioning approaches have shown promise by integrating additional text-related knowledge to enhance understanding of video content and generate more informative captions. However, methods relying heavily on knowledge graphs face several limitations, including (i) a restricted capacity to reason complex relations among object words due to static logic rules, (ii) a lack of context awareness for spatio-temporal relation analysis in videos, and (iii) the complexity of manually constructing a knowledge graph. These limitations lead to insufficient semantic information and obstruct effective alignment between visual and textual modalities. To tackle these issues, we propose a novel knowledge enhancement and disentanglement learning method for video captioning. Our approach introduces a comprehensive and adaptable knowledge source to enhance text-related knowledge, thus directly improving caption generation. Specifically, we leverage a large language model to infer enriched semantic relations between object words and speech transcripts within video frames. By integrating visual, auditory, and textual information into universal tokens with task-specific prompts, our approach enhances semantic understanding and captures more diverse relations. Furthermore, we propose a novel modality-shared disentanglement learning strategy to better align modalities, enabling a more precise link of visual cues to their corresponding textual descriptions. Specifically, we disentangle two modalities into shared and specific features, leveraging shared features to ensure alignment while mitigating uncorrelated information. Extensive experiments demonstrate that our proposed method outperforms existing methods in both quantitative and qualitative results. • LLM-endowed additional text knowledge is proposed to generate captions. • A disentanglement learning method is proposed for better alignment of semantics. • Pre-trained text and video encoders are used to distill video-related textual features.

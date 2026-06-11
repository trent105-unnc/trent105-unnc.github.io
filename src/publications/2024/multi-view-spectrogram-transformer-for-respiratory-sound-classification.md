---
_hidden: false
title: Multi-View Spectrogram Transformer for Respiratory Sound Classification
authors:
  - He, Wentao
  - Yan, Yuchen
  - Ren, Jianfeng
  - Bai, Ruibin
  - Jiang, Xudong
authors_orcid:
  - 0000-0002-6319-1639
  - 0000-0003-3359-4012
  - null
  - 0000-0003-1722-568X
  - 0000-0002-9104-2315
year: 2024
doi: https://doi.org/10.1109/icassp48485.2024.10445825
openalex_id: W4392903171
venue: 
pdf_url: 
abstract_page: 
abstract_screenshot: 
keywords:
  - Spectrogram
  - Computer science
  - Transformer
  - Encoder
  - Speech recognition
  - Artificial intelligence
  - Pattern recognition (psychology)
  - Engineering
---

Deep neural networks have been applied to audio spectrograms for respiratory sound classification. Existing models often treat the spectrogram as a synthetic image while overlooking its physical characteristics. In this paper, a Multi-View Spectrogram Transformer (MVST) is proposed to embed different views of time-frequency characteristics into the vision transformer. Specifically, the proposed MVST splits the mel-spectrogram into different-sized patches, representing the multi-view acoustic elements of a respiratory sound. The patches and positional embeddings are fed into transformer encoders to extract the attentional information among patches through a self-attention mechanism. Finally, a gated fusion scheme is designed to automatically weigh the multi-view features to highlight the best one in a specific scenario. Experimental results on the ICBHI dataset demonstrate that the MVST significantly outperforms state-of-the-art methods for classifying respiratory sounds. The code is available at: https://github.com/wentaoheunnc/MVST.

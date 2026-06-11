---
_hidden: false
title: GAN-in-GAN for Monaural Speech Enhancement
authors:
  - Duan, Yicun
  - Ren, Jianfeng
  - Yu, Heng
  - Jiang, Xudong
authors_orcid:
  - null
  - 0000-0003-4619-6590
  - 0000-0002-0305-2135
  - 0000-0002-9104-2315
year: 2023
doi: https://doi.org/10.1109/lsp.2023.3293758
openalex_id: W4383750092
venue: IEEE Signal Processing Letters
pdf_url: 
abstract_page: 
abstract_screenshot: 
keywords:
  - Spectrogram
  - Computer science
  - Noise (video)
  - Monaural
  - Speech recognition
  - Noise reduction
  - Noise measurement
  - Sound quality
  - Artificial intelligence
  - Image (mathematics)
---

Some generative adversarial networks (GANs) have been developed to remove background noise in real-world audio recordings. MetricGAN and its variants focus on generating a clean spectrogram from a noisy one, but the final audio quality can't be guaranteed. SEGAN and its variants directly generate an enhanced audio from a noisy one, but their over-long input representations make it less effective in identifying and removing audio noise. In this paper, a novel GAN-in-GAN framework is proposed, where the inner GAN conducts spectrogram-to-spectrogram recovery under the supervision of metric discriminators to effectively clean the audio noise, and the outer GAN conducts an audio-to-audio recovery under the supervision of multi-resolution discriminators to optimize the final audio quality. To tackle the challenges of utilizing multiple adversarial losses for training the proposed GAN-in-GAN simultaneously, a novel gradient balancing scheme is proposed to facilitate a coherent training. The proposed method is compared with state-of-the-art methods on the VoiceBank+DEMAND dataset for audio denoising. It outperforms all the compared methods.

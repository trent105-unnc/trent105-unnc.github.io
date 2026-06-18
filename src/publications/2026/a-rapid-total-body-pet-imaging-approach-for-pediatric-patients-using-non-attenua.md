---
_hidden: false
title: A rapid total-body PET imaging approach for pediatric patients using
non-attenuation-corrected PET scans
authors:
  - Hu, Jingxi
  - Huang, Y
  - Zhang, Qiyang
  - Hu, Yingying
  - Zhao, Yumo
  - Zhang, Xu
  - Fan, Wei
  - Zheng, Hairong
  - Liang, Dong
  - Hu, Zhanli
  - Jiang, Changhui
  - He, Xiangjian
  - Zhang, N
authors_orcid:
  - 0000-0003-4564-710X
  - null
  - null
  - null
  - null
  - null
  - null
  - null
  - null
  - 0000-0003-0618-6240
  - null
  - 0000-0001-8962-540X
  - null
year: 2026
doi: https://doi.org/10.1186/s40658-026-00889-x
openalex_id: W7162102087
venue: EJNMMI Physics
abstract_screenshot: 
keywords:
  - Image quality
  - PET-CT
  - Coronal plane
  - Pet imaging
  - Positron emission tomography
  - Medical imaging
  - Scanner
---

BACKGROUND: F-FDG PET/CT examinations for staging and response assessment, raising concerns about cumulative radiation dose, particularly from the CT component. We propose SnapPET, a CT-sparing deep learning-based framework that uses 2D ultra-short non-attenuation-corrected (NAC) PET (Maximum intensity projection) MIP images to generate 2D high-quality PET MIP images for rapid screening and triage. METHODS: Two hundred pediatric patients with FDG-avid lymphoma imaged on a total-body PET/CT scanner were retrospectively analyzed. From 10-min list-mode data, non-attenuation-corrected (NAC) PET images at 3-300 s were retrospectively reconstructed, and 600-s attenuation-corrected (AC) PET served as the reference. Whole-body coronal maximum-intensity projections (MIPs) were converted into 2D images and divided into 64 × 64 patches. For each acquisition duration, an independent latent diffusion-based autoencoder was trained to map the corresponding short-duration NAC PET MIPs to AC-like coronal PET MIPs. The intended clinical application was rapid pre-CT triage, with primary emphasis on the ultra-short 3-s setting, while longer durations were analyzed comparatively across count levels. Image quality was evaluated using PSNR, SSIM, and NMSE, as well as lesion ROI-based SUVmax and SUVmean. Three benchmark models (U-Net, GAN, and DDPM) were trained under identical settings for comparison. In addition, two nuclear medicine physicians assessed image quality using 5-point Likert scales, and lesion-level ROC and ALROC analyses were performed. RESULTS: SnapPET substantially improved image quality over NAC input for all acquisition times. For 3-s scans, PSNR increased from 28.6 ± 4.3 to 35.3 ± 6.0 and SSIM from 0.85 ± 0.09 to 0.98 ± 0.02, while NMSE decreased from 0.23 ± 0.18 to 0.03 ± 0.01 (all p < 0.001). SUV metrics in lesion ROIs showed high correlation with reference AC PET, with minimal bias. Compared with UNet, GAN, and DDPM, SnapPET achieved the best quantitative metrics and the highest lesion-level ROC and ALROC curves, indicating superior detectability and localization. Reader scores for noise suppression, artifact reduction, contrast retention, and lesion discrimination were consistently higher for SnapPET images, particularly for 3- and 15-s acquisitions. CONCLUSION: SnapPET enables rapid pediatric PET imaging by generating high-quality, AC-like 2D images directly from ultra-short NAC acquisitions. The method improves image quality, preserves quantitative accuracy, and enhances lesion detectability compared with both NAC input and competing deep-learning baselines. This CT-sparing screening and triage approach has the potential to reduce reliance on attenuation-correction CT and support personalized, lower-dose CT strategies in pediatric lymphoma care.

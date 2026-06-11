---
_hidden: false
title: Learning Discriminatory Information for Object Detection on Urine Sediment Image
authors:
  - Chan, Sixian
  - Wu, Binghui
  - Zhang, Guodao
  - Yao, Yuan
  - Wang, Hongqiang
authors_orcid:
  - 0000-0001-8916-1174
  - null
  - 0000-0002-6264-5854
  - 0000-0002-2705-6245
  - 0000-0002-7286-7514
year: 2023
doi: https://doi.org/10.32604/cmes.2023.029485
openalex_id: W4386850098
venue: Computer Modeling in Engineering & Sciences
pdf_url: https://file.techscience.com/files/CMES/2024/TSP_CMES-138-1/TSP_CMES_29485/TSP_CMES_29485.pdf
abstract_page: 1
abstract_screenshot: src/publications/2023/learning-discriminatory-information-for-object-detection-on-urine-sediment-image.png
keywords:
  - Computer science
  - Artificial intelligence
  - Urinary sediment
  - Object (grammar)
  - Sediment
  - Machine learning
  - Object detection
  - Urine
  - Pattern recognition (psychology)
  - Data mining
  - Medicine
  - Geology
---

In clinical practice, the microscopic examination of urine sediment is considered an important <i>in vitro</i> examination with many broad applications. Measuring the amount of each type of urine sediment allows for screening, diagnosis and evaluation of kidney and urinary tract disease, providing insight into the specific type and severity. However, manual urine sediment examination is labor-intensive, time-consuming, and subjective. Traditional machine learning based object detection methods require hand-crafted features for localization and classification, which have poor generalization capabilities and are difficult to quickly and accurately detect the number of urine sediments. Deep learning based object detection methods have the potential to address the challenges mentioned above, but these methods require access to large urine sediment image datasets. Unfortunately, only a limited number of publicly available urine sediment datasets are currently available. To alleviate the lack of urine sediment datasets in medical image analysis, we propose a new dataset named UriSed2K, which contains 2465 high-quality images annotated with expert guidance. Two main challenges are associated with our dataset: a large number of small objects and the occlusion between these small objects. Our manuscript focuses on applying deep learning object detection methods to the urine sediment dataset and addressing the challenges presented by this dataset. Specifically, our goal is to improve the accuracy and efficiency of the detection algorithm and, in doing so, provide medical professionals with an automatic detector that saves time and effort. We propose an improved lightweight one-stage object detection algorithm called Discriminatory-YOLO. The proposed algorithm comprises a local context attention module and a global background suppression module, which aid the detector in distinguishing urine sediment features in the image. The local context attention module captures context information beyond the object region, while the global background suppression module emphasizes objects in uninformative backgrounds. We comprehensively evaluate our method on the UriSed2K dataset, which includes seven categories of urine sediments, such as erythrocytes (red blood cells), leukocytes (white blood cells), epithelial cells, crystals, mycetes, broken erythrocytes, and broken leukocytes, achieving the best average precision (AP) of 95.3% while taking only 10 ms per image. The source code and dataset are available at .

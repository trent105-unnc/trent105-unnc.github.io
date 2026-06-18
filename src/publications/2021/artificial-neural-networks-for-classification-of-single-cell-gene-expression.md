---
_hidden: false
title: Artificial Neural Networks for classification of single cell gene expression
authors:
  - Zhong, Jiahui
  - Lyu, Minjie
  - Jin, Huan
  - Cao, Zhiwei
  - Chitkushev, Lou
  - Zhang, Guanglan
  - Keskin, Derin B.
  - Brusić, Vladimir
authors_orcid:
  - 0000-0001-5878-976X
  - 0000-0002-0084-847X
  - 0000-0003-0721-8283
  - 0000-0003-1165-1928
  - 0000-0002-9365-8818
  - 0000-0001-6010-490X
  - 0000-0002-8496-6181
  - 0000-0003-0523-5266
year: 2021
doi: https://doi.org/10.1101/2021.07.29.454293
openalex_id: W3189741360
venue: bioRxiv (Cold Spring Harbor Laboratory)
abstract_screenshot: 
keywords:
  - Artificial intelligence
  - Computer science
  - Artificial neural network
  - Cluster analysis
  - Data set
  - Test set
  - Machine learning
  - Workflow
  - Peripheral blood mononuclear cell
  - Set (abstract data type)
  - Pattern recognition (psychology)
  - Data mining
  - Computational biology
  - Biology
  - Database
  - Genetics
---

Abstract Background Single-cell transcriptome (SCT) sequencing technology has reached the level of high-throughput technology where gene expression can be measured concurrently from large numbers of cells. The results of gene expression studies are highly reproducible when strict protocols and standard operating procedures (SOP) are followed. However, differences in sample processing conditions result in significant changes in gene expression profiles making direct comparison of different studies difficult. Unsupervised machine learning (ML) uses clustering algorithms combined with semi-automated cell labeling and manual annotation of individual cells. They do not scale up well and a workflow used on a specific dataset will not perform well with other studies. Supervised ML classification shows superior classification accuracy and generalization properties as compared to unsupervised ML methods. We describe a supervised ML method that deploys artificial neural networks (ANN), for 5-class classification of healthy peripheral blood mononuclear cells (PBMC) from multiple diverse studies. Results We used 58 data sets to train ANN incrementally – over ten cycles of training and testing. The sample processing involved four protocols: separation of PBMC, separation of PBMC + enrichment (by negative selection), separation of PBMC + FACS, and separation of PBMC + MACS. The training data set included between 85 and 110 thousand cells, and the test set had approximately 13 thousand cells. Training and testing were done with various combinations of data sets from four principal data sources. The overall accuracy of classification on independent data sets reached 5-class classification accuracy of 94%. Classification accuracy for B cells, monocytes, and T cells exceeded 95%. Classification accuracy of natural killer (NK) cells was 75% because of the similarity between NK cells and T cell subsets. The accuracy of dendritic cells (DC) was low due to very low numbers of DC in the training sets. Conclusions The incremental learning ANN model can accurately classify the main types of PBMC. With the inclusion of more DC and resolving ambiguities between T cell and NK cell gene expression profiles, we will enable high accuracy supervised ML classification of PBMC. We assembled a reference data set for healthy PBMC and demonstrated a proof-of-concept for supervised ANN method in classification of previously unseen SCT data. The classification shows high accuracy, that is consistent across different studies and sample processing methods.

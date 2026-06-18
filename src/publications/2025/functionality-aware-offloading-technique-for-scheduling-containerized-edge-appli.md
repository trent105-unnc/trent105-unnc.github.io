---
_hidden: false
title: Functionality-aware offloading technique for scheduling containerized edge
applications in IoT edge computing
authors:
  - Nkenyereye, Lionel
  - Lee, Boon Giin
  - Chung, Wan‐Young
authors_orcid:
  - 0000-0001-6714-4402
  - 0000-0001-5743-1010
  - 0000-0002-0121-855X
year: 2025
doi: https://doi.org/10.1186/s13677-025-00737-w
openalex_id: W4407895463
venue: Journal of Cloud Computing Advances Systems and Applications
abstract_screenshot: functionality-aware-offloading-technique-for-scheduling-containerized-edge-appli.png
keywords:
  - Computer science
  - Edge computing
  - Internet of Things
  - Enhanced Data Rates for GSM Evolution
  - Edge device
  - Scheduling (production processes)
  - Distributed computing
  - Computer architecture
  - Embedded system
  - Cloud computing
  - Operating system
  - Telecommunications
  - Engineering
---

Edge computing (EC) represents a basic functionality to support the efficiency of the future Internet of intelligent things. The EC has promoted container adoption for deploying and managing applications. Current container scheduling techniques on edge infrastructures show multiple limitations. The design scheduler of container applications execute workflow as specified by the container cloud workflow engine assisted by the Kubernetes platform. We model dependency workflow of containerized applications built using microservices as directed acyclic graph (DAG). The structure of DAG allows the system to prepare the scheduling order list of microservices. The Argo workflow is used to prepare the sequence to deploy containerized applications. In addition, edge worker nodes’ resource utilization data enabled assists to select on which edge worker nodes the scheduling will take place. By combining the two mechanism, we termed the scheduling as functionality-aware offloading on scheduling containerized edge applications. We implemented the orchestration prototype and evaluate the performance of the proposed technique under extensive simulations using the ContainerCloudSim simulator with a module that models a lightweight Kubernetes platform in the context of the edge computing infrastructure. To validate our containerized edge inference service and collect data for the simulation setup, we used Raspberry Pis 4, and the cloud core was set up on Amazon Web Services. The workload in the pre-defined workflow using Argo K8s native was performed by calling the pre-trained model (downloaded and stored locally) and then executing the prediction microservice running on Raspberry Pis. The results demonstrate that our proposal outperforms the baseline scheduling offloading technique in edge computing by decreasing the average scheduling time of containerized edge applications by 15%.

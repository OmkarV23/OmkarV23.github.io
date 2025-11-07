---
title: "Unsupervised Region-Growing Network"
period: "2023-2024"
type: "Research"
image: "/images/portfolio/Unsupervised-Region-Growing-Network.jpg"
technologies: ["Deep Learning", "Computer Vision", "Python", "PyTorch", "Optical Flow", "CNN", "U-Net"]
---

## Overview
We designed and implemented a multi-stage pipeline that combines geometric consistency checks with region growing and mask refinement. Our approach starts with calculating bidirectional optical flow, which is then stabilized using temporal averaging to reduce turbulence-induced errors. We use epipolar geometry and Sampson distance calculations to disentangle actual object motions from turbulence perturbations. The motion feature maps generated through this process serve as input to our region growing module, which gradually expands initial seed regions into full object masks.

## Implementation
We developed our solution using PyTorch and tested on an NVIDIA A100 GPU. For implementation, we resize input frames to 640×480 resolution for efficient processing. We utilize the RAFT algorithm for optical flow estimation with a 4-frame temporal window. The region growing algorithm employs adaptive thresholds based on turbulence strength, while mask refinement uses a U-Net architecture trained with our custom bidirectional consistency losses and grouping function. We implemented K-means based mask ID unification to handle multiple objects consistently across frames.
**Key Achievements:**
- Successfully segmented moving objects under various turbulence conditions
- Achieved 70.3% IoU accuracy on real turbulent videos
- Outperformed state-of-the-art methods by over 60% in normal conditions
- Demonstrated robust performance even with severe turbulence
- Created first real-world turbulent video dataset (DOST) with ground truth masks collected near ASU.
- Developed fully unsupervised approach requiring no labeled training data

## Impact
Our research advances computer vision capabilities for long-range surveillance and monitoring applications where atmospheric turbulence poses significant challenges. The method enables reliable motion segmentation in scenarios where traditional approaches fail, such as security monitoring, remote sensing, and environmental observation. Our DOST dataset contribution provides a valuable benchmark for future research in this domain.

## Future Directions
We plan to extend this research by optimizing computational efficiency for real-time processing, integrating additional visual cues for better object separation, expanding the dataset with more diverse scenarios, and exploring applications in extreme weather conditions. We also aim to improve the method's ability to handle overlapping objects and reduce processing latency through integration with foundation models.


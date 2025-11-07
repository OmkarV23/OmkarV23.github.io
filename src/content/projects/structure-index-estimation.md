---
title: "Path Averaged Structure Index Estimation"
period: "2021-2023"
type: "Research"
image: "/images/portfolio/Path Averaged Structure Index Estimation.png"
technologies: ["Deep Learning", "Computer Vision", "Python", "PyTorch", "Physics-based ML", "CNN", "Image Processing", "Atmospheric Science"]
---

## Overview
We developed a novel physics-based deep learning approach for estimating atmospheric turbulence strength from video data. Our method combines classical image gradient techniques with modern deep learning to accurately measure the refractive index structure constant (Cn2) that characterizes atmospheric turbulence. The system achieves superior accuracy compared to traditional methods while maintaining generalizability across different environmental conditions and optical setups.

## Technical Details
Our approach implements a hybrid architecture that integrates physics-based principles with deep learning. The core system consists of a differentiable gradient method coupled with convolutional neural networks. We process video sequences through parallel pathways - one computing physical image gradients and another learning spatial-temporal features. The network architecture incorporates camera parameters explicitly, enabling robustness across different optical configurations.
For data collection, we utilized a comprehensive experimental setup including a Kipp & Zonen LAS MkII Large Aperture Scintillometer, Nikon P1000 camera with 3000mm focal length, and custom target boards. We conducted experiments at two locations in Arizona - Usery Mountain Regional Park (724m range) and Apache Junction (1.45km range), collecting over 30,000 images with synchronized ground truth measurements.

## Implementation
We developed the system using PyTorch, implementing both classical gradient-based methods and our novel physics-based neural network. The preprocessing pipeline includes sophisticated motion stabilization using a two-stage approach: coarse alignment through manual registration followed by fine-scale correction using feature matching. We captured video at 120fps with careful exposure control (8.33ms-16.66ms) to ensure optimal turbulence measurement.
The neural network processes image sequences through multiple pathways: a CNN branch for spatial feature extraction, a temporal processing branch for motion analysis, and a physics-based branch implementing differentiable gradient operations. This hybrid architecture enables the system to learn from both data patterns and physical principles simultaneously.

## Key Achievements
Our physics-based deep learning approach demonstrated significant advantages over both classical and pure deep learning methods. We achieved consistent performance across different environmental conditions and optical configurations, with mean absolute errors as low as 2.95E-15 for within-dataset predictions and 6.42E-15 for cross-dataset generalization. The system successfully handled variations in turbulence strength spanning multiple orders of magnitude.

## Impact
This research advances the field of atmospheric sensing by providing a robust, camera-based method for turbulence estimation. Traditional approaches require expensive scintillometer hardware or complex meteorological measurements, while our system enables turbulence estimation using only passive video data. This has significant implications for applications in long-range imaging, optical communication, and atmospheric monitoring.

## Future Directions
We are expanding this research in several directions. First, we are developing real-time processing capabilities for immediate turbulence estimation. Second, we are investigating transfer learning approaches to further improve generalization across different environments and optical setups. Additionally, we are exploring applications in extreme weather conditions and working to expand our dataset with more diverse scenarios and conditions.
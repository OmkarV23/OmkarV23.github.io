---
title: "Image Reconstruction in Turbulence"
period: "2021-Present"
type: "Research"
image: "/images/portfolio/Image Reconstruction in Turbulence.png"
technologies: ["Deep Learning", "PyTorch", "Computer Vision", "Physics-based Modeling", "CUDA Programming"]
---

## Overview
I developed a novel segment-then-restore pipeline called Turb-Seg-Res for restoring videos degraded by atmospheric turbulence, particularly focusing on dynamic scenes. The system first segments moving objects from static backgrounds and then applies targeted restoration techniques to each component. This approach significantly improves upon existing methods that primarily handle static scenes or scenes with minimal motion.

## Technical Details
The pipeline architecture consists of multiple integrated components working in sequence. The first stage implements video stabilization using normalized cross-correlation to compensate for camera motion. The second stage performs unsupervised motion segmentation using average optical flow analysis to separate dynamic foreground from static background. For background enhancement, I developed an adaptive Gaussian-weighted image stacking technique that leverages turbulence strength statistics. The final stage employs a transformer model trained on a custom-developed turbulence simulator for image restoration1

## Implementation
I developed the complete system using PyTorch and deployed it on NVIDIA A100 GPUs. The training process utilized AdamW optimizer with a 0.0003 initial learning rate for 60,000 iterations. The system processes videos at various resolutions, with total per-frame processing times of 5.71s, 2.404s, and 1.472s for 1080p, 540p, and 270p resolutions respectively1

## Key Achievements
The system demonstrated exceptional performance across multiple metrics. It achieved superior PSNR of 26.48dB and SSIM of 0.853 for low turbulence conditions, significantly outperforming existing methods. The segmentation accuracy reached 67.63% IoU, surpassing human annotator performance of 64.03%. For geometric accuracy, the system achieved a line deviation score of 1.89(±0.39), substantially better than competing approaches1

## Impact
This work represents the first comprehensive solution for restoring videos affected by atmospheric turbulence in dynamic environments. The system enables high-quality restoration of both static and moving objects, maintaining temporal consistency while preserving fine details. The developed turbulence simulator also provides a novel approach for generating training data, contributing to the broader field of atmospheric turbulence mitigation1

## Future Directions
The research opens several avenues for future development, including improving segmentation accuracy through additional annotated data, bridging the gap between noise-based and physics-based simulation training, and developing real-time restoration capabilities for robotics and embedded systems applications. The code, simulator, and dataset have been made publicly available to facilitate further research in this domain.
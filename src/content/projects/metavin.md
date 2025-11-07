---
title: "MetaVIn: Meteorological-Visual Integration"
period: "2024"
type: "Research"
image: "/images/portfolio/MetaVIn-Meteorological-Visual-Integration.jpg"
technologies: ["Deep Learning", "Computer Vision", "Meteorological Data Analysis", "Python", "PyTorch"]
---

## Overview

MetaVIn is a groundbreaking deep learning framework designed to mitigate atmospheric turbulence in long-range imaging by integrating meteorological data with visual information. This project, published in WACV 2025, represents a significant advancement in the field of atmospheric turbulence mitigation, offering improved image quality and real-time processing capabilities for various applications.

## Challenges

Atmospheric turbulence poses significant challenges in long-range imaging, causing distortions that severely degrade image quality. Traditional methods often struggle to effectively mitigate these effects, especially in real-time scenarios. The primary challenges addressed by MetaVIn include integrating multi-modal data from visual and meteorological sources, designing a network architecture capable of handling complex atmospheric turbulence effects, developing a realistic synthetic dataset for training and evaluation, and achieving real-time processing for practical applications.

## Methodology

### Dataset Creation

To overcome the limitations of existing datasets, we developed a novel synthetic dataset that accurately simulates atmospheric turbulence effects. This dataset incorporates a diverse range of scenes, including urban, natural, and controlled environments, with varying atmospheric conditions simulated using advanced turbulence models. Corresponding meteorological data for each image, including temperature, pressure, and wind speed, is also included.

The synthetic dataset creation process involved selecting high-quality, distortion-free base images, applying atmospheric turbulence simulations using physics-based models, generating corresponding meteorological data based on realistic atmospheric conditions, and creating pairs of turbulent and clear images with associated meteorological parameters. This comprehensive dataset enabled effective training and evaluation of the MetaVIn framework.

### Network Architecture

MetaVIn employs a two-stream network architecture designed to process visual and meteorological data separately before fusion. The VisualNet, a convolutional neural network (CNN), extracts features from the turbulence-degraded input image, utilizing a multi-scale approach to capture both local and global distortions. The MeteoNet, a fully connected network, processes meteorological data, encoding atmospheric conditions into a compact feature representation.

A key innovation is the fusion mechanism, which adaptively combines features from VisualNet and MeteoNet, allowing the network to dynamically adjust its restoration strategy based on both visual and meteorological inputs. The multi-scale reconstruction module, consisting of a series of upsampling and refinement layers, progressively restores the image at multiple scales, ensuring high-quality output.

## Results and Evaluation

MetaVIn significantly outperformed existing methods in estimating atmospheric turbulence strength, achieving a Spearman correlation of 0.936, MAE of 0.164, and relative error of 0.006. By combining meteorological data, sharpness features, and depth information through a Kolmogorov Arnold Network (KAN) architecture, it surpassed traditional image quality assessment methods and gradient-based estimations. This high accuracy in Cn^2 prediction is crucial for real-world applications such as long-range imaging, remote sensing, and adaptive optics systems. Precise turbulence estimation enables better compensation for atmospheric distortions, leading to improved image quality in surveillance, astronomical observations, and free-space optical communications. It also aids in optimizing the performance of adaptive optics systems, enhancing the resolution and clarity of images captured through turbulent atmospheres in various scientific and industrial applications.
## Impact and Future Work

The development of MetaVIn has significant implications for various fields, including surveillance and security, remote sensing, and autonomous systems. It enables clearer long-range imaging in challenging atmospheric conditions, benefiting environmental monitoring, disaster response efforts, and improving the safety and reliability of autonomous vehicles and drones.

Future work will focus on extending the framework to handle video sequences, incorporating additional environmental factors beyond meteorological data, and exploring transfer learning techniques to adapt the model to new environments with minimal retraining.

In conclusion, MetaVIn represents a significant step forward in atmospheric turbulence mitigation, offering a powerful tool for improving long-range imaging in various applications. Its innovative approach to integrating meteorological data with visual information opens new avenues for research in multi-modal image restoration techniques.
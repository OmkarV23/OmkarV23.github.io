---
title: "Tear Film Diagnosis with Deep Learning"
period: "2019-2020"
type: "Research"
image: "/images/portfolio/Tear Film Diagnosis with Deep Learning.png"
technologies: ["Deep Learning", "Computer Vision", "Image Segmentation", "Medical Imaging", "PyTorch"]
---

## Overview
I developed a deep learning-based automated system for analyzing meibomian gland (MG) dysfunction from infrared meibography images. The system performs MG segmentation, eyelid segmentation, quantitative analysis of MG morphology, and meiboscore prediction. Additionally, it removes specular reflections from images to improve visualization.

## Technical Details
The system architecture consists of an encoder-decoder network with ResNet34 backbone and skip connections for the segmentation models. The complete system integrates three primary components working in tandem. First, two separate segmentation models handle MG and eyelid detection with high precision. Second, a classification model processes the segmentation outputs to predict meiboscores. Third, a GAN-based model removes specular reflections to enhance image quality. All models were trained on the MGD-1K dataset containing 1,000 infrared meibography images with precise annotations and expert gradings.

## Implementation
The entire pipeline was developed using PyTorch framework and trained on an NVIDIA RTX 2080 Ti GPU. The segmentation models required approximately 24 hours of training time over 200 epochs to achieve optimal performance. The training dataset comprised 800 images, while 200 images were reserved for validation purposes. To ensure robust performance, an additional external validation set of 600 images from an independent center was used to verify the system's generalizability.

## Key Achievements
The system demonstrated exceptional performance across multiple metrics. The MG segmentation accuracy reached 67.63% IoU, surpassing human annotator performance of 64.03%. Measurements of MG ratio showed remarkable consistency with manual annotations, achieving 26.23% versus 25.12% for upper eyelids and 32.34% versus 32.29% for lower eyelids. The meiboscore prediction component achieved 73.01% accuracy on the validation set. Furthermore, the reflection removal system successfully enhanced image quality without compromising diagnostic accuracy.

## Impact
This automated system represents a significant advancement in the quantitative evaluation of MG morphology for dry eye disease diagnosis. The system delivers precise MG and eyelid segmentation while providing accurate measurements of MG area and ratio. Its reliable meiboscore prediction capabilities, combined with enhanced image quality through reflection removal, make it a valuable tool for clinical applications. The speed and consistency of the automated analysis offer substantial improvements over manual assessment methods.

## Future Directions
The next phase of development will focus on expanding the training dataset to include more diverse cases and pathologies. Integration of additional clinical parameters will enhance the system's diagnostic capabilities. Development efforts will also target multi-modal analysis capabilities to incorporate different types of clinical data. Further improvements in the model's generalization abilities will ensure consistent performance across different imaging systems. Finally, implementation of real-time processing capabilities will enable immediate analysis during patient examinations.
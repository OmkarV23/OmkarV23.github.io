---
title: "Motor Imagery Movements Classification with LSTM"
period: "2018"
type: "Paper"
image: "/images/portfolio/Motor Imagery Movements Classification with LSTM.png"
technologies: ["Deep Learning", "LSTM", "Python", "TensorFlow", "Signal Processing"]
---

## Overview
We developed a novel neural network architecture combining CNN and LSTM in parallel for motor imagery brain-computer interface (MI-BCI) classification. Our approach achieved 87.68% accuracy and significantly outperformed existing methods by integrating spatial, temporal, and middle-layer features in a unified framework.

## Technical Details
We designed and implemented a Feature Fusion CNN-LSTM (FFCL) architecture that processes EEG signals through parallel CNN and LSTM networks. The CNN component consists of an input layer, 1-D convolutional layer, separable convolutional layer, and two flatten layers, while the LSTM component includes an input layer, LSTM layer with 50 hidden units, and flatten layer.

For optimization, we incorporated:
- ReLU activation and batch normalization in CNN
- Tanh activation in LSTM
- Dropout layers (p=0.5) for regularization
- ADAM optimizer with learning rate 0.001
- Cross-entropy loss function

## Implementation
We utilized the BCI Competition IV dataset 2a containing four-class motor imagery data (left hand, right hand, feet, and tongue) from nine subjects. The dataset included EEG signals from 22 channels sampled at 250 Hz. Key implementation aspects:

- Preprocessed EEG signals using 8-32 Hz bandpass filtering
- Implemented sliding window technique (3s width, 0.25s interval)
- Expanded dataset 6x through overlapping windows
- Trained on 5:2:3 split for training, validation and testing
- Developed on Python/TensorFlow with NVIDIA GPU acceleration

## Key Achievements
- Achieved 87.68% average classification accuracy across subjects
- Improved performance by 19.35% compared to EEGNet baseline
- Obtained Kappa value of 0.8245, showing excellent reliability
- Demonstrated superior performance in noisy conditions
- Successfully integrated spatial, temporal and middle-layer features
- Validated results through confusion matrices and statistical tests

## Impact
Our research advances brain-computer interface technology by introducing a novel parallel architecture that effectively combines different types of neural features. The improved classification accuracy and robustness to noise make this approach particularly promising for real-world BCI applications. Our work provides new directions for EEG signal processing and neural engineering research.

## Future Directions
We plan to expand this research by:
- Designing custom data collection experiments
- Applying the algorithm to other experimental paradigms
- Conducting online real-time experiments
- Exploring applications in assistive technologies
- Investigating transfer learning approaches


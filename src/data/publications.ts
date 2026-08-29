export type PublicationLink = {
  label: string;
  href: string;
  icon: string;
};

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  summary: string;
  tags: string[];
  links: PublicationLink[];
  featured?: boolean;
  note?: string;
};

export const publications: Publication[] = [
  {
    title: 'SDR-ToF: Million Optical Depth Samples per Second Using Software-Defined Radio',
    authors: 'Ramchander Bhaskara*, Dhawal Sirikonda*, Omkar Vengurlekar*, Juhyeon Kim, Joseph Lazarro, Suren Jayasuriya, Adithya Pediredla',
    venue: 'ACM Transactions on Graphics · SIGGRAPH Asia',
    year: '2026',
    summary: 'RF-coherent optical depth sensing with commodity software-defined radios at megahertz rates, enabling sub-millimeter precision, vibration analysis, audio recovery, and high-speed depth scanning.',
    tags: ['Time-of-Flight', 'Optical sensing', 'RF systems'],
    note: '* Equal contribution',
    featured: true,
    links: [
      { label: 'Website', href: 'https://risclab-dartmouth.org/sdr-tof/', icon: 'fa-globe' },
      { label: 'Paper', href: 'https://risclab-dartmouth.org/sdr-tof/static/pdfs/paper.pdf', icon: 'fa-file-lines' },
    ],
  },
  {
    title: 'SH-SAS: An Implicit Neural Representation for Complex Spherical-Harmonic Scattering Fields for 3D Synthetic Aperture Sonar',
    authors: 'Omkar Vengurlekar, Adithya Pediredla, Suren Jayasuriya',
    venue: '13th International Conference on 3D Vision · Oral',
    year: '2026',
    summary: 'An implicit neural representation of complex acoustic scattering with spherical harmonics, trained directly from raw 1D time-of-flight measurements without intermediate beamforming.',
    tags: ['Neural fields', 'Synthetic aperture sonar', '3D reconstruction'],
    featured: true,
    links: [
      { label: 'Website', href: 'https://omkarv23.github.io/SH-SAS-website/', icon: 'fa-globe' },
      { label: 'Paper', href: 'https://www.arxiv.org/pdf/2509.11087', icon: 'fa-file-lines' },
      { label: 'Code', href: 'https://github.com/OmkarV23/SH-SAS', icon: 'fa-code-branch' },
      { label: 'Video', href: 'https://drive.google.com/file/d/1IMgEknGVkRSvuteTG90Xd_XO35C034wi/view', icon: 'fa-circle-play' },
    ],
  },
  {
    title: 'Z-Splat: Z-Axis Gaussian Splatting for Camera-Sonar Fusion',
    authors: 'Ziyuan Qu, Omkar Vengurlekar, Mohamad Qadri, Kevin Zhang, Michael Kaess, Christopher Metzler, Suren Jayasuriya, Adithya Pediredla',
    venue: 'IEEE Transactions on Pattern Analysis and Machine Intelligence',
    year: '2025',
    summary: 'Differentiable Gaussian splatting for camera-sonar fusion that uses acoustic depth constraints to address missing-cone ambiguity and improve geometric reconstruction.',
    tags: ['Gaussian splatting', 'Sensor fusion', 'Differentiable rendering'],
    featured: true,
    links: [
      { label: 'Website', href: 'https://quintonqu.github.io/z-splat-website/', icon: 'fa-globe' },
      { label: 'Paper', href: 'https://arxiv.org/pdf/2404.04687', icon: 'fa-file-lines' },
      { label: 'Code', href: 'https://github.com/QuintonQu/gaussian-splatting-with-depth/tree/gs-depth-main', icon: 'fa-code-branch' },
      { label: 'Data', href: 'https://drive.google.com/drive/folders/1R1uYa-h4ksr5HuNJ80vgUIKz1qGqF3JV?usp=drive_link', icon: 'fa-database' },
    ],
  },
  {
    title: 'Reconstructing Microwave Synthetic Aperture Images Using Neural Fields',
    authors: 'Cecilio Obeso, Kavian Zirak, Omkar Vengurlekar, Suren Jayasuriya, Mohammadreza F. Imani',
    venue: 'Antenna Measurement Techniques Association Symposium',
    year: '2025',
    summary: 'Neural-field reconstruction for microwave synthetic-aperture measurements, connecting physics-based sensing with continuous scene representations.',
    tags: ['Microwave imaging', 'Neural fields', 'Inverse problems'],
    links: [
      { label: 'Paper', href: 'https://ieeexplore.ieee.org/abstract/document/11317823', icon: 'fa-file-lines' },
    ],
  },
  {
    title: 'ToFGS: Temporally-Resolved Inverse Rendering with Gaussian Splatting for Time-of-Flight',
    authors: 'Omkar Vengurlekar, Aaron Saju Augustine, Suren Jayasuriya',
    venue: 'CVPR · Neural Fields Beyond Conventional Cameras Workshop',
    year: '2025',
    summary: 'A temporally resolved inverse-rendering framework that reconstructs scenes from transient time-of-flight measurements using Gaussian splatting.',
    tags: ['Transient imaging', 'Gaussian splatting', 'Inverse rendering'],
    links: [
      { label: 'Paper', href: 'https://drive.google.com/file/d/1hjN90hH1vaXINQ8U5NgRwn2PIY7cbuQ-/view', icon: 'fa-file-lines' },
    ],
  },
  {
    title: 'A Hybrid ViT-CNN Architecture for Volumetric Target Classification with Sub-Bottom SAS Data',
    authors: 'Gregory D. Vetaw, Omkar S. Vengurlekar, Daniel C. Brown, Suren Jayasuriya',
    venue: 'IEEE OCEANS · Halifax',
    year: '2024',
    summary: 'A hybrid vision-transformer and convolutional architecture for volumetric target classification in challenging sub-bottom synthetic-aperture sonar data.',
    tags: ['Vision transformers', 'Volumetric classification', 'Sonar'],
    links: [
      { label: 'Paper', href: 'https://ieeexplore.ieee.org/abstract/document/10754426', icon: 'fa-file-lines' },
    ],
  },
];

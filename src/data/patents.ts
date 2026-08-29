export type PatentLink = {
  label: string;
  href: string;
  icon: string;
};

export type Patent = {
  title: string;
  inventors: string;
  applicationNumber: string;
  filedDate: string;
  status: string;
  type: string;
  country: string;
  summary: string;
  tags: string[];
  links: PatentLink[];
};

export const patents: Patent[] = [
  {
    title: 'MHz-Rate Optical Depth Imaging using Software-Defined Radios',
    inventors: 'Adithya Pediredla, Ramchander Bhaskara, Dhawal Sirikonda, Omkar Vengurlekar, Juhyeon Kim, Joseph Lazzaro, Suren Jayasuriya',
    applicationNumber: '64/113,861',
    filedDate: 'July 17, 2026',
    status: 'Patent pending',
    type: 'U.S. provisional',
    country: 'United States',
    summary: 'A software-defined-radio approach to optical depth imaging designed for MHz-rate acquisition and high-throughput time-of-flight sensing.',
    tags: ['Optical depth imaging', 'Software-defined radio', 'Time-of-flight'],
    links: [
      { label: 'Related website', href: 'https://risclab-dartmouth.org/sdr-tof/', icon: 'fa-globe' },
      { label: 'Related paper', href: 'https://risclab-dartmouth.org/sdr-tof/static/pdfs/paper.pdf', icon: 'fa-file-lines' },
    ],
  },
  {
    title: 'Method for 3D Synthetic Aperture Sonar Reconstruction using Complex Spherical-Harmonic Scattering Fields',
    inventors: 'Omkar Vengurlekar, Adithya Pediredla, Suren Jayasuriya',
    applicationNumber: '64/012,111',
    filedDate: 'March 20, 2026',
    status: 'Patent pending',
    type: 'U.S. provisional',
    country: 'United States',
    summary: 'A physics-guided reconstruction method that models complex scattering fields with spherical harmonics for continuous 3D scene recovery.',
    tags: ['3D reconstruction', 'Spherical harmonics', 'Neural fields'],
    links: [
      { label: 'Related website', href: 'https://omkarv23.github.io/SH-SAS-website/', icon: 'fa-globe' },
      { label: 'Related paper', href: 'https://www.arxiv.org/pdf/2509.11087', icon: 'fa-file-lines' },
      { label: 'Related code', href: 'https://github.com/OmkarV23/SH-SAS', icon: 'fa-code-branch' },
    ],
  },
];

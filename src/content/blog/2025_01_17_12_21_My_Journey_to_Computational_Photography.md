---
title: "My Journey to Computational Photography"
description: "Exploring the intersection of optics and AI-based image processing, from DIY pinhole cameras to astrophotography and cutting-edge research"
pubDate: 2025-01-17T00:00:00Z
author: "Ripon Kumar Saha"
image: "images/blog/NightSky.jpeg"
tags: ["Photography", "AI", "Image Processing", "Astrophotography", "DIY Projects", "Optics", "Deep Learning"]
---

I have 6 years of photography experience, and I’ve taken over 60,000 RAW photos throughout this time. Many of these photos are still available, and they’ve been instrumental in building my automated photo editing pipelines, which include custom denoising, advanced Lightroom AI-based filters, and AI-driven segmentation/masking. I’ve experimented with a wide range of denoising algorithms (both commercial and research-based) and found ways to automate photo aesthetics without requiring extensive manual retouching. I love taking photos with DSLR cameras, camcorders, custom-built cameras, and telescopes. Below is a detailed look at how I got started, what I’ve learned, and why I’m so passionate about blending optics with computational methods.

## Early Experiments: Pinhole Cameras and a DIY “Camera Room”

My first exposure to photography happened back in 6th grade when I took an ordinary cardboard box, poked a tiny hole with a pin, and placed scratched X-ray paper inside as a makeshift screen. I sealed the box with tape to ensure no stray light entered and would watch the inverted image by covering the box (and myself) with a blanket. I built three different varieties of these pinhole cameras. Later on, I made a small opening in the cardboard covering my window, effectively turning my entire room into a giant pinhole camera. While the images projected on the wall were mostly shadows and lacked vibrant color, the sight of outstretched trees dancing across my room was captivating—especially after I sealed all the tiny leaks in the tin-shaded roof in Bangladesh.

## From Tutorials to an Optics Lab

During my bachelor’s studies, I watched countless tutorials on camera tips and best practices, but I never owned a real camera at the time due to budget constraints. My situation changed when I enrolled in an MS program in a neurophotonics lab that specialized in computer vision and deep learning for eyelid assessment. I had the opportunity to work with expensive setups costing over $200k, including an Abbe diffraction microscope built with lasers, multiple sensors, and lens systems mounted on boards. I was also involved in building confocal and light-sheet optical microscopes. This environment ignited my fascination with how optics and computational photography could intertwine.

Eventually, I bought my very first DSLR, a Canon 450D with a kit lens and a 50mm f/1.8. I soon added a 75-300mm lens to my collection. While exploring research papers in low-light imaging, I came across *“Learning to See in the Dark.”* The paper showed how much data is hidden in a RAW image and how deep learning could significantly enhance details, especially in low light. It also highlighted the superiority of the Sony A7 series, convincing me to acquire a Sony A7 (Mark I). To keep costs reasonable, I adapted manual-focus lenses to the Sony body using different mounts. The camera’s focus-peaking feature proved invaluable for quick and accurate manual focus. 

I spent countless hours experimenting with Adobe Lightroom, Luminar AI, Topaz tools, Gigapixel AI, and various denoising algorithms—stunned by how some methods could make a high-ISO photo look as if it had been shot at a much lower ISO (essentially eight times lower light sensitivity).

## Capturing Events and Embracing Manual Focus

I took group photos regularly at GIST (where I pursued my MS) and experimented extensively with manual-focus lenses. By the end of my MS program, I could focus manually with surprising speed and often ended up shooting 300–1,000 images during community gatherings or trips.

I’ve been particularly fascinated by three photography areas:

1. **Low Light Photography**  
   Phone sensors are generally too small to capture sufficient detail in dimly lit environments, whereas DSLRs and mirrorless cameras excel, especially when combined with advanced denoising algorithms and deep learning techniques.

2. **Portrait Photography**  
   Large-aperture lenses create a shallow depth of field that phones try to imitate with computational blur. While phone-based portrait modes have made progress, the accuracy of depth blur and object segmentation still can’t match the real optical bokeh of, say, an f/1.4 lens. I believe future phone models with advanced depth prediction (e.g., Depth Anything V2) could eventually close this gap, but we’re not fully there yet.

3. **Ultra Zoom Photography**  
   A reliable $30 older digital camera with a 40x optical zoom can out-perform phones that boast 100x hybrid zoom, since hybrid zoom relies heavily on software interpolation rather than pure optical magnification. This same principle explains why hooking up a proper telescope or telephoto lens remains far more effective for photographing distant subjects.

## DIY Projects: Pushing Zoom and Solar Imagery

I love to push the boundaries of what my equipment can do. Over the years, I embarked on two noteworthy DIY ventures:

- **Microscopic Camera + Telephoto Lens**  
  I paired a Canon 75-300mm lens with a microscopic camera whose pixels were roughly seven times smaller than a standard DSLR sensor. By making a DIY adapter, I effectively transformed the lens into a 525–2,100mm focal length system, achieving an impressive 87.5x zoom. This allowed me to photograph distant objects with striking clarity.

- **1,000mm Edmund Optics Lens**  
  I connected a 1,000mm Edmund Optics lens to a long tube for solar projections. During solar eclipses, I could project the Sun’s image onto a surface and use my phone camera to capture the back-projection. The sharpness and contrast of these images amazed both my peers and professors at GIST—especially those who participated in the eclipse observation sessions.

## Atmospheric Turbulence Research at ASU

Afterward, I joined the Imaging Lyceum Lab at Arizona State University (ASU), working under Professor Suren Jayasuriya. He’s a deeply knowledgeable computer vision and optics researcher who genuinely cares about his students, making it a nurturing place to explore new ideas. My project here focused on long-range imaging distortion, particularly atmospheric turbulence. When you zoom in 50× or more, heat, humidity, and temperature fluctuations can bend or refract light unpredictably, resulting in warping and blurring.

We used expensive $100k instruments, telescopes, and telephoto setups to capture data over hot roads and mountainous terrains. The goal was to develop physics-driven deep learning algorithms that could replicate or even surpass the performance of these high-priced systems with a more affordable camera-based solution (ideally under $1k). We later expanded that work to segment moving objects in these heavily distorted, long-range videos and to restore the footage by removing the turbulence effects—something ordinary phone cameras definitely aren’t designed for.

## My Current Setup and Astrophotography

Today, I use a Sony A7III paired with Sigma 85mm f/1.4, Sigma 105mm f/1.4, and a Sigma/Tamron 28-70mm f/2.8 series of lenses. I still frequently experiment with manual-focus lenses, especially in low-light settings. Additionally, I own a PowerSeeker 127EQ telescope that lets me photograph the Moon, Saturn’s rings, Venus, and other celestial objects. For astrophotography, I use a 14mm f/2.8 or a Samyang 24mm f/1.8 for wide-field shots of the night sky. Meanwhile, an 85mm f/1.4 sometimes comes in handy for mosaicing multiple shots into a single high-resolution image. To compensate for Earth’s rotation, I rely on an iOptron Star Tracker, making longer exposures possible and capturing clearer star fields.

## Final Thoughts

My journey in computational photography has been a continuous merge of hands-on optical experimentation and AI-driven post-processing. From building rudimentary pinhole cameras in my bedroom to handling $200k lab equipment and creating hyper-zoom DIY rigs, I’ve always enjoyed innovating new ways to see the world through a lens. With more than 60,000 RAW photos now in my library, I’ve refined an automated workflow that seamlessly blends advanced denoising techniques, AI-based masking, and filter tools to dramatically enhance images.

The rapid forward march of AI suggests that even phones will soon incorporate more sophisticated depth sensing and denoising. That said, the feel of capturing images with large-aperture lenses or telescopes is a unique experience that transcends purely computational methods. I’m convinced that as technology evolves, there will remain a special allure to dedicated cameras, high-quality optics, and the creative processes that push these tools to their limits.

## My Cameras (Owned & Tested)

1. **Canon 450D**
2. **Sony A7 (Mark I)**
3. **Sony A7III**
4. **Panasonic Camcorder**
5. **Samsung Pocket Camera**
6. **Canon Powershot RX512 HS**
7. **Nikon Coolpix S9700**
8. **Nikon P1000**
9. **SVBONY SV205** (Astronomical Camera, 1.25” 7.05MP CMOS Color eyepiece USB3.0)
10. **Canon EOS 300D** (for comparing modern mirrorless with an older sensor)
11. **Polarized Imaging Camera** (Lyceum Lab research)
12. **Microscopic Camera** (used with telephoto lens for long-distance imaging at GIST)

## My Lenses (Owned & Used)

- Canon Kit Lens (came with 450D)
- Canon 50mm f/1.8
- Canon 70-300mm
- Canon 50mm f/1.4 Manual
- Nikon 70-200mm f/2.8 (manually adapted for experiments)
- 135mm f/2.8 Lens (used for breaking and various experiments)
- Another 135mm f/2.8 Lens
- 18-300mm f/3.5 to f/6.3
- Canon 100-400mm
- Sony 28-72mm
- Samyang 85mm f/1.4 (manual)
- Samyang 85mm f/1.4 (autofocus)
- Sony 50mm f/1.8 (auto)
- Samyang 35mm f/1.4
- Tamron 28-75mm f/2.8
- Samyang 24mm f/1.8
- Manual 14mm f/2.8
- Sigma 24-70mm f/2.8
- Sigma 85mm f/1.4
- Sigma 105mm f/1.4
<script setup>


import img_LLE_png from '../assets/LLE.png'

import img_kayo_png from '../assets/kayo.png'

import img_abbros2_png from '../assets/abbros2.png'


const projects = [
  {
    index: 4,
    title: 'KAYO – Marker-based Tracking',
    subtitle: 'Augmented Reality · Tracking',
    summary:
      'Marker-based tracking prototype for AR-style positioning. Built with classical vision techniques to detect and track a fiducial marker and recover pose-like signals.',
    tags: ['OpenCV', 'Tracking', 'Pose Estimation', 'Image Processing'],
    focus: 'Stable tracking and jitter reduction in real-time camera feeds.',
    link: 'https://youtu.be/Fqq4itgHDtM',
    category: 'Augmented Reality',
    featured: false,
    year: 2025,
    image: img_kayo_png,
  },
  {
    index: 17,
    title: 'Abb IRB120 ROS2 Humble',
    subtitle: 'Embedded · Interactive Systems',
    summary:
      'Interactive experience build-out (hardware + software) for a live activation setup. (Details available on request.)',
    tags: ['Embedded', 'Computer Vision', 'Interactive'],
    focus: 'End-to-end delivery across hardware + software.',
    link: 'https://github.com/El7agAdel/Abb-IRB120-ROS-Humble',
    category: 'Robotics',
    featured: false,
    year: 2026,
    image: img_abbros2_png,
  },
  {
    index: 1,
    title: 'Low-Light Enhancement (GAN vs U-Net)',
    subtitle: 'Computer Vision · Deep Learning',
    summary:
      'Deep-learning low-light image enhancement comparing GAN and U-Net architectures. Focused on visibility recovery, contrast improvement, and noise suppression under extreme lighting.',
    tags: ['TensorFlow', 'Keras', 'GAN', 'U-Net', 'Image Processing'],
    focus: 'Enhancement quality vs structural preservation in low-light scenes.',
    link: 'https://github.com/El7agAdel/Low-Light-Enhancement-GAN-vs-UNet',
    category: 'Computer Vision',
    featured: true,
    year: 2025,
    image: img_LLE_png,
  },
]
</script>

<template>
  <section id="projects" class="projects">
    <div class="container">
      <div class="section-label">Featured Projects</div>
      <div class="grid cards">
        <article v-for="project in projects" :key="project.title" class="card project-card">
          <div class="meta">
            <p class="eyebrow">Case Study</p>
            <a class="view" :href="project.link" target="_blank" rel="noreferrer noopener">
              View Project →
            </a>
          </div>
          <h3 class="heading-md">{{ project.title }}</h3>
          <p class="muted">{{ project.subtitle }}</p>
          <div class="tag-row">
            <span v-for="tag in project.tags" :key="tag" class="pill">{{ tag }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cards {
  margin-top: 20px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.project-card {
  padding: 20px 18px 22px;
  border-radius: var(--radius);
  display: grid;
  gap: 12px;
  transition: transform 200ms ease, border-color 200ms ease, background 200ms ease;
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: rgba(124, 246, 210, 0.6);
  background: linear-gradient(180deg, rgba(124, 246, 210, 0.06), rgba(255, 255, 255, 0.02));
}

.meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--muted);
  font-size: 13px;
}

.view {
  color: var(--accent);
  font-weight: 600;
}

.heading-md {
  font-size: 22px;
  letter-spacing: -0.01em;
}

.muted {
  color: var(--muted);
  line-height: 1.55;
}

.tag-row {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
</style>

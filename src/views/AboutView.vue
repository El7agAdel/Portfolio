<script setup>
import { profile } from '../content/profile'
import { skillGroups } from '../content/skills'

const highlights = [
  {
    title: 'Computer Vision & ML',
    text: 'From classical pipelines to deep learning — focused on evaluation, robustness, and deployable performance.',
  },
  {
    title: 'SLAM & Robotics',
    text: 'Building blocks for mapping and localization, plus integration into robot software stacks (ROS2, motion planning).',
  },
  {
    title: 'Broadcast Engineering',
    text: '4 years delivering live pipelines across audio/video/comms and real-time graphics/overlays — where reliability is a feature.',
  },
  {
    title: 'Biomedical + Signal Processing',
    text: 'Side projects exploring physiological signals and time-series processing (as needed for medical/biomed contexts).',
  },
]
</script>

<template>
  <main class="page">
    <section class="container intro">
      <div class="section-label">About</div>
      <h1 class="heading-xl">{{ profile.headline }}</h1>
      <p class="lead">
        {{ profile.education.degree }} — {{ profile.education.university }} · {{ profile.education.masters }}
      </p>
      <p class="muted">{{ profile.intro }}</p>
    </section>

    <section class="container grid two">
      <article class="card block">
        <p class="eyebrow">How I work</p>
        <ul class="list">
          <li>Start from constraints: latency, compute, reliability, and how it will be used.</li>
          <li>Build an evaluation loop early (metrics, test scenes, failure cases).</li>
          <li>Ship iteratively: prototype → harden → document → automate.</li>
        </ul>
      </article>

      <article class="card block">
        <p class="eyebrow">Core skill groups</p>
        <div class="skill-grid">
          <div v-for="group in skillGroups" :key="group.title" class="skill">
            <p class="skill-title">{{ group.title }}</p>
            <div class="chips">
              <span v-for="item in group.items" :key="item" class="pill">{{ item }}</span>
            </div>
          </div>
        </div>
      </article>
    </section>

    <section class="container">
      <article class="card block">
        <p class="eyebrow">Highlights</p>
        <div class="highlights">
          <div v-for="item in highlights" :key="item.title" class="item">
            <h3 class="heading-md">{{ item.title }}</h3>
            <p class="muted">{{ item.text }}</p>
          </div>
        </div>
      </article>
    </section>
  </main>
</template>

<style scoped>
.page {
  padding-top: 88px;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.intro {
  display: grid;
  gap: 12px;
}

.grid.two {
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.block {
  padding: 18px 18px 20px;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01));
  box-shadow: var(--shadow);
}

.eyebrow {
  text-transform: uppercase;
  color: var(--muted);
  letter-spacing: 0.08em;
  font-size: 12px;
  margin-bottom: 10px;
}

.list {
  display: grid;
  gap: 8px;
  color: var(--muted);
  line-height: 1.55;
}

.skill-grid {
  display: grid;
  gap: 14px;
}

.skill-title {
  font-weight: 650;
  margin-bottom: 8px;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.highlights {
  display: grid;
  gap: 14px;
}

.item h3 {
  margin-bottom: 6px;
}

.heading-md {
  font-size: 22px;
  line-height: 1.35;
  letter-spacing: -0.01em;
}
</style>

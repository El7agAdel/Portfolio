<template>
  <main class="page">
    <section class="container intro">
      <div class="section-label">Contact</div>
      <h1 class="heading-xl">Let’s build something real.</h1>
      <p class="lead">Open to roles and collaborations in computer vision, SLAM, robotics, and real-time systems.</p>
    </section>

    <section class="container grid two">
      <article class="card block">
        <p class="eyebrow">Email</p>
        <a class="highlight" :href="`mailto:${profile.email}`">{{ profile.email }}</a>
        <p class="muted">Best for detailed proposals, research, or production system discussions.</p>
      </article>

      <article class="card block">
        <p class="eyebrow">Links</p>
        <div class="links">
          <a :href="profile.links.linkedin" target="_blank" rel="noreferrer">LinkedIn</a>
          <a :href="profile.links.github" target="_blank" rel="noreferrer">GitHub</a>
          <a :href="profile.links.resume" target="_blank" rel="noreferrer">Resume</a>
        </div>
      </article>
    </section>
  </main>
</template>

<script setup>
import { profile } from '../content/profile'
</script>

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
  display: grid;
  gap: 10px;
}

.eyebrow {
  text-transform: uppercase;
  color: var(--muted);
  letter-spacing: 0.08em;
  font-size: 12px;
  margin-bottom: 6px;
}

.highlight {
  color: var(--accent);
  font-weight: 600;
}

.links {
  display: grid;
  gap: 8px;
}
</style>

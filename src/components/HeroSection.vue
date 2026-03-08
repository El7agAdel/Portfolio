<template>
  <section id="top" class="hero">
    <div class="container hero-grid">
      <div class="hero-copy">
        <div class="section-label">Adel - Building Intelligent Systems</div>
        <h1 class="heading-xl">
          I Design Systems That
          <span class="caret" aria-hidden="true">|</span>
        </h1>
        <p class="lead">
          A systems-first engineer building interpretable solutions for finance, law, and automation - from data and models to APIs and production interfaces.
        </p>
        <div class="actions">
          <RouterLink class="btn" to="/projects">View work →</RouterLink>
          <RouterLink class="btn secondary" to="/about">About Me</RouterLink>
        </div>
      </div>

      <div class="hero-visual card" aria-hidden="true">
        <img
          :src="heroImage"
          alt="Systems engineering visual"
          class="hero-image"
          loading="eager"
          decoding="async"
        />
        <div class="glow"></div>
      </div>
    </div>
    <div class="accent-blur green"></div>
    <div class="accent-blur blue"></div>
  </section>
</template>


<script setup>
import heroImage from '../assets/hero.png'
</script>

<style scoped>
.hero {
  position: relative;
  padding-top: 110px;
  overflow: hidden;
}

.hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr);
  gap: 38px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-copy {
  display: grid;
  gap: 16px;
}

.heading-xl {
  position: relative;
  z-index: 1;
}

.caret {
  color: var(--accent);
  animation: blink 1.2s infinite;
  margin-left: 6px;
}

.lead {
  max-width: 720px;
}

.actions {
  display: flex;
  gap: 12px;
  margin-top: 28px;
}

.hero-visual {
  position: relative;
  overflow: hidden;
  border-radius: 22px;
  min-height: 320px;
  isolation: isolate;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: saturate(1.06);
}

.glow {
  position: absolute;
  inset: -30% -20% auto -20%;
  height: 70%;
  background: radial-gradient(circle, rgba(124, 246, 210, 0.18), transparent 55%);
  filter: blur(40px);
  opacity: 0.9;
  z-index: 0;
}

.green {
  width: 420px;
  height: 420px;
  background: radial-gradient(circle, rgba(124, 246, 210, 0.32), transparent 50%);
  top: -80px;
  left: -120px;
}

.blue {
  width: 380px;
  height: 380px;
  background: radial-gradient(circle, rgba(122, 169, 255, 0.28), transparent 55%);
  bottom: -60px;
  right: -140px;
}

@media (max-width: 640px) {
  .actions {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 900px) {
  .hero-grid {
    grid-template-columns: 1fr;
  }

  .hero-visual {
    order: -1;
  }
}
</style>

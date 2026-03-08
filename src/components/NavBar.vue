<template>
  <header class="nav-shell">
    <div class="container nav">
      <RouterLink class="brand" to="/">Adel H. Mohamed</RouterLink>
      <nav class="links" aria-label="Primary">
        <RouterLink to="/projects">Projects</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <a href="https://www.linkedin.com/in/adel10youssef/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/El7agAdel" target="_blank" rel="noreferrer">GitHub</a>
      </nav>
      <a class="btn resume" href="https://drive.google.com/file/d/1hckqiNzvFFKni3tnJEXStqILiV63j8ta/view" target="_blank" rel="noreferrer">Resume</a>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.nav-shell {
  position: sticky;
  top: 0;
  z-index: 40;
  backdrop-filter: blur(14px);
  background: linear-gradient(180deg, rgba(5, 7, 12, 0.86), rgba(5, 7, 12, 0.60));
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 18px 0;
}

.brand {
  font-weight: 700;
  letter-spacing: -0.01em;
}

.links {
  display: flex;
  align-items: center;
  gap: 18px;
  color: var(--muted);
  font-size: 14px;
}

.links a {
  padding: 8px 10px;
  border-radius: 10px;
  transition: color 150ms ease, background 150ms ease;
}

.links :global(.router-link-active) {
  color: var(--text);
  background: rgba(255, 255, 255, 0.05);
}

.links a:hover {
  color: var(--text);
  background: rgba(255, 255, 255, 0.05);
}

.resume {
  font-size: 14px;
  padding: 10px 16px;
}

@media (max-width: 900px) {
  .links {
    display: none;
  }
}
</style>

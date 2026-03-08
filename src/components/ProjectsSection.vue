<script setup>
const projects = [
  {
    title: 'Dazai',
    subtitle: 'Market-regime aware trading research system with backtesting, analytics, and risk-aware experimentation.',
    tags: ['Python', 'ML', 'Backtesting'],
    link: '#',
  },
  {
    title: 'Lexx',
    subtitle: 'Legal AI using RAG to generate citation-grounded answers over Indian law documents.',
    tags: ['Next.js', 'FastAPI', 'RAG', 'LLMs'],
    link: '#',
  },
  {
    title: 'Zenin',
    subtitle: 'Personal finance product focused on understanding spending behavior and savings patterns.',
    tags: ['React Native', 'Firebase'],
    link: '#',
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
            <a class="view" :href="project.link">View Project →</a>
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

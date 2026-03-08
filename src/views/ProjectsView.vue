<script setup>
import { ref, computed } from 'vue'
import { projects as allProjects } from '../content/projects'

const sortedProjects = [...allProjects].sort(
  (a, b) => (a.index ?? Number.MAX_SAFE_INTEGER) - (b.index ?? Number.MAX_SAFE_INTEGER)
)

const categories = computed(() => {
  const set = new Set(sortedProjects.map((p) => (p.category ?? 'Other').trim()))
  return ['All', ...Array.from(set).sort((a, b) => a.localeCompare(b))]
})

const activeCategory = ref('All')

const filteredProjects = computed(() =>
  activeCategory.value === 'All'
    ? sortedProjects
    : sortedProjects.filter((p) => (p.category ?? 'Other').trim() === activeCategory.value)
)

const formatYear = (y) => (y ? String(y) : '')
</script>

<template>
  <main class="page">
    <section class="page-hero">
      <div class="container hero-inner">
        <h1 class="heading-xl">Projects</h1>
        <p class="lead center">
          Selected projects and case studies across computer vision, robotics, and real-time broadcast systems.
        </p>
        <div class="categories" role="tablist" aria-label="Project categories">
          <button
            v-for="cat in categories"
            :key="cat"
            :class="['pill', 'cat', { active: cat === activeCategory }]"
            role="tab"
            :aria-selected="cat === activeCategory"
            @click="activeCategory = cat"
          >
            {{ cat }}
          </button>
        </div>
      </div>
    </section>

    <section class="container list">
      <article v-for="project in filteredProjects" :key="project.title" class="project-row">
        <div class="copy">
          <div class="topline">
            <h2 class="heading-lg">{{ project.title }}</h2>
            <span v-if="project.year" class="pill year">{{ formatYear(project.year) }}</span>
            <span v-if="project.draft" class="pill draft">Draft</span>
          </div>
          <p class="subhead">{{ project.subtitle }}</p>
          <p class="muted">{{ project.summary }}</p>

          <div class="tags">
            <span v-for="tag in project.tags" :key="tag" class="pill">{{ tag }}</span>
          </div>

          <p class="focus"><strong>System focus:</strong> <em>{{ project.focus }}</em></p>

          <a
            v-if="project.link && project.link !== '#'"
            class="view"
            :href="project.link"
            target="_blank"
            rel="noreferrer"
          >
            View →
          </a>
          <span v-else class="muted">Link coming soon.</span>
        </div>

        <div class="thumb-wrap card" aria-hidden="true">
          <div class="thumb">
            <!-- <div class="thumb-label">{{ (project.category ?? 'Project').slice(0, 18) }}</div> -->
            <img :src="project.image" :alt="project.title + ' preview'" loading="lazy" />
          </div>
        </div>
      </article>
    </section>

    <section class="container outro">
      <p class="muted">
        Want deeper details (datasets, results, latency numbers, or architecture diagrams)?
        <br />I’m happy to share.
      </p>
      <RouterLink class="view" to="/contact">Get in touch →</RouterLink>
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

.page-hero {
  padding: 20px 0 0;
}

.hero-inner {
  display: grid;
  gap: 12px;
  justify-items: center;
  text-align: center;
}

.center {
  text-align: center;
  max-width: 760px;
}

.categories {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 6px;
}

.cat {
  cursor: pointer;
  border: 1px solid var(--border);
  transition: all 160ms ease;
}

.cat.active {
  border-color: rgba(124, 246, 210, 0.7);
  background: linear-gradient(135deg, rgba(124, 246, 210, 0.16), rgba(122, 169, 255, 0.12));
  color: var(--text);
}

.list {
  display: grid;
  gap: 32px;
}

.project-row {
  display: grid;
  gap: 16px;
  grid-template-columns: minmax(260px, 46%) 1fr;
  padding: 6px 0 26px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.topline {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.year {
  font-size: 12px;
}

.draft {
  border-color: rgba(255, 255, 255, 0.18);
  color: rgba(255, 255, 255, 0.75);
}

.thumb-wrap {
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  min-height: 200px;
  display: grid;
  place-items: center;
}

.thumb-wrap img {
  width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
}

.thumb {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background:
    radial-gradient(circle at 20% 20%, rgba(124, 246, 210, 0.18), transparent 42%),
    radial-gradient(circle at 80% 10%, rgba(122, 169, 255, 0.16), transparent 44%),
    rgba(255, 255, 255, 0.02);
}

.thumb-label {
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  padding: 10px 14px;
  background: rgba(0, 0, 0, 0.20);
}

.copy {
  display: grid;
  gap: 10px;
  align-content: start;
}

.subhead {
  color: rgba(255, 255, 255, 0.86);
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.focus {
  color: var(--muted);
  line-height: 1.6;
  margin-top: 6px;
}

.view {
  color: var(--accent);
  font-weight: 650;
  margin-top: 8px;
}

.outro {
  text-align: center;
  padding-bottom: 72px;
}

@media (max-width: 900px) {
  .project-row {
    grid-template-columns: 1fr;
  }

  .thumb-wrap {
    order: -1;
  }
}
</style>

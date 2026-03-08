<script setup>
const row1 = [
  'Python',
  'Javascript',
  'Typescript',
  'C++',
  'React',
  'React Native',
  'NodeJs',
  'Next.js',
  'Firebase',
]

const row2 = [
  'AWS',
  'FastAPI',
  'Tailwind CSS',
  'Git',
  'MongoDB',
  'PyTorch',
  'Pandas',
  'Scikit-learn',
  'Streamlit',
]

const doubled1 = [...row1, ...row1]
const doubled2 = [...row2, ...row2]
</script>

<template>
  <section class="tech">
    <div class="container">
      <div class="section-label">Tech</div>
      <div class="marquee">
        <div class="track" :style="{'--duration': '26s'}">
          <span v-for="(item, idx) in doubled1" :key="idx + item" class="pill">{{ item }}</span>
        </div>
      </div>
      <div class="marquee reverse">
        <div class="track" :style="{'--duration': '24s'}">
          <span v-for="(item, idx) in doubled2" :key="'r' + idx + item" class="pill">{{ item }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tech {
  position: relative;
  padding: 64px 0 40px;
}

.marquee {
  overflow: hidden;
  width: 100%;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: rgba(255, 255, 255, 0.02);
  margin-top: 16px;
}

.track {
  display: flex;
  gap: 12px;
  padding: 16px;
  width: max-content;
  animation: marquee var(--duration) linear infinite;
}

.marquee.reverse .track {
  animation-direction: reverse;
}
</style>

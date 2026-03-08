<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer id="contact" class="footer">
    <div class="container">
      <div class="top">
        <div>
          <p class="eyebrow">Adel H. Mohamed</p>
          <h3 class="heading-md">Designing systems for real-world decisions.</h3>
          <a class="mailto" href="mailto:akash.kumar.devs@gmail.com">akash.kumar.devs@gmail.com</a>
        </div>
        <div class="links">
          <a href="https://www.linkedin.com/in/akashkumarsnd" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/akswnd" target="_blank" rel="noreferrer">GitHub</a>
          <a href="/Akash_Kumar_Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
        </div>
      </div>
      <div class="bottom">
        <span>© {{ year }} Adel H. Mohamed</span>
        <span class="muted">Systems · Automation · Interfaces</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding: 44px 0 36px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0));
}

.top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;
  padding-bottom: 18px;
}

.heading-md {
  font-size: 22px;
  line-height: 1.35;
  letter-spacing: -0.01em;
}

.mailto {
  color: var(--accent);
  display: inline-block;
  margin-top: 10px;
}

.links {
  display: grid;
  gap: 10px;
  color: var(--muted);
}

.bottom {
  display: flex;
  justify-content: space-between;
  color: var(--muted);
  font-size: 14px;
  margin-top: 16px;
}

@media (max-width: 720px) {
  .top, .bottom {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>

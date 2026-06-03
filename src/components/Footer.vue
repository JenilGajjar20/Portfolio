<template>
  <footer class="container py-10 md:py-24" v-reveal>
    <div class="footer-section">
      <div class="footer-section__line"></div>
      <div class="footer-section__socials">
        <a href="https://github.com/JenilGajjar20" target="_blank">
          <IconsMdiGitHub />
        </a>
        <a href="https://jenilgajjar.medium.com/" target="_blank">
          <IconsMdiMedium />
        </a>
        <a href="https://jenilgajjar.hashnode.dev/" target="_blank">
          <IconsMdiHashnode />
        </a>
      </div>
    </div>
    <div class="fonts text-center pt-5 text-xl font-bold md:pt-10 md:text-2xl">
      <p>"Thanks for Scrolling!"</p>
    </div>
  </footer>
</template>

<script setup>
import IconsMdiGitHub from "@/components/icons/MdiGitHub.vue";
import IconsMdiMedium from "@/components/icons/MdiMedium.vue";
import IconsMdiHashnode from "@/components/icons/MdiHashnode.vue";
</script>

<style lang="scss">
.footer-section {
  @apply py-5 relative;

  &__line {
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--cyan), var(--rose), transparent);
    box-shadow: 0 0 22px rgba(96, 247, 255, 0.2);
  }

  &__socials {
    position: absolute;
    inset: 50% 0 auto;
    display: flex;
    justify-content: center;
    gap: 0.75rem;
    transform: translateY(-50%);

    a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 2.8rem;
      height: 2.8rem;
      color: var(--text-soft);
      border: 1px solid var(--line);
      border-radius: 999px;
      background: rgba(7, 12, 25, 0.86);
      backdrop-filter: blur(14px);

      &:hover {
        color: var(--cyan);
        border-color: var(--line-strong);
        transform: translateY(-4px) rotate(5deg);
        box-shadow: var(--shadow-glow);
      }
    }
  }
}

.fonts {
  font-family: "Courier New", Courier, monospace;
  color: var(--text-soft);
  text-shadow: 0 0 24px rgba(255, 101, 179, 0.18);
}
</style>

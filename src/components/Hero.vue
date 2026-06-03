<template>
  <section class="hero-section" id="hero" v-reveal>
    <ThreeHeroScene />
    <div class="hero-orbit" aria-hidden="true">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="hero-section--content">
      <div class="hero-text">
        <p class="hero-eyebrow">IoT Engineer / Full-stack Developer</p>
        <h1>
          <span>Hi, I'm</span>
          <strong>Jenil Gajjar</strong>
        </h1>
        <p class="hero-copy">
          As a passionate tech enthusiast, I thrive on continuous learning and
          enthusiastically embrace new technologies. My adaptable mindset and
          self-driven approach enable me to excel in dynamic work environments.
          I actively contribute to open-source projects, embodying a commitment
          to collaborative learning and innovation. Eager to delve into new
          security technologies and methodologies, I bring a blend of curiosity,
          dedication, and a strong desire to make meaningful contributions to
          the ever-evolving tech landscape, with a specific focus on enhancing
          security and protecting digital assets.
        </p>
        <div class="hero-tags" aria-label="Focus areas">
          <span>IoT APIs</span>
          <span>Cybersecurity</span>
          <span>Open Source</span>
          <span>Vue / Nest</span>
        </div>
        <div class="cta-buttons">
          <a href="#contact" class="get-in-touch-btn"> Get in Touch </a>
          <RouterLink to="/blogs" class="blogs"> Blogs </RouterLink>
        </div>
      </div>
      <div class="profile-card">
        <div class="profile-card__scanline" aria-hidden="true"></div>
        <div class="profile-card__image">
          <img src="/images/jenil.jpg" alt="profile-image" />
        </div>
        <div class="profile-card__body">
          <p class="profile-card--text">
            Developer &sdot; Open-Source Contributor &sdot; Cybersecurity
            Enthusiast
          </p>
          <div class="profile-card__stats">
            <span><strong>10+</strong> skills</span>
            <span><strong>8</strong> projects</span>
            <span><strong>1</strong> publication</span>
          </div>
          <ButtonDefault
            text="Resume"
            icon
            class="button--outline mt-2 flex items-center justify-center w-full mx-auto"
            @click="openResume"
          />
        </div>
      </div>
    </div>
    <div class="hero-metrics" aria-label="Portfolio highlights">
      <span><strong>API</strong> IoT backend systems</span>
      <span><strong>UI</strong> Vue and Angular dashboards</span>
      <span><strong>SEC</strong> Cybersecurity research</span>
    </div>
  </section>
</template>

<script setup>
import ButtonDefault from "@/components/button/Default.vue";
import { defineAsyncComponent, ref } from "vue";
import { RouterLink } from "vue-router";

const ThreeHeroScene = defineAsyncComponent(() =>
  import("@/components/ThreeHeroScene.vue")
);

const url = ref("");

const openResume = () => {
  url.value = `${import.meta.env.BASE_URL}jenilgajjar_resume.pdf`;
  window.open(url.value, "_blank");
};
</script>

<style lang="scss">
.hero-section {
  @apply relative;
  min-height: auto;
  display: grid;
  align-items: center;
  overflow: hidden;
  border-radius: 1.5rem;
  padding: clamp(1.25rem, 4vw, 3rem);
  background:
    radial-gradient(circle at 88% 16%, rgba(96, 247, 255, 0.18), transparent 28rem),
    radial-gradient(circle at 10% 86%, rgba(255, 101, 179, 0.13), transparent 22rem),
    linear-gradient(145deg, rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.025)),
    rgba(6, 10, 22, 0.78);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      linear-gradient(90deg, transparent 49%, rgba(96, 247, 255, 0.035) 50%, transparent 51%),
      linear-gradient(0deg, transparent 49%, rgba(96, 247, 255, 0.03) 50%, transparent 51%);
    background-size: 5rem 5rem;
    mask-image: linear-gradient(90deg, black, transparent 88%);
    pointer-events: none;
  }

  &--content {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    align-items: stretch;
    gap: clamp(2rem, 6vw, 5rem);
    width: 100%;
    max-width: 100%;
    position: relative;
    z-index: 1;
  }

  .hero-text {
    grid-column: span 8;
    position: relative;
    padding: clamp(0.25rem, 2vw, 1rem);
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &::after {
      content: "";
      position: absolute;
      inset: 1rem -1rem auto auto;
      width: 8rem;
      height: 8rem;
      border: 1px solid rgba(96, 247, 255, 0.16);
      border-radius: 50%;
      background: radial-gradient(circle, rgba(96, 247, 255, 0.12), transparent 62%);
      animation: profileFloat 7s ease-in-out infinite;
      pointer-events: none;
    }
  }

  .hero-eyebrow {
    width: fit-content;
    margin-bottom: 1rem;
    padding: 0.45rem 0.8rem;
    color: var(--cyan);
    border: 1px solid var(--line);
    border-radius: 999px;
    background: rgba(96, 247, 255, 0.06);
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  h1 {
    display: grid;
    gap: 0.35rem;
    color: var(--text-main);
    font-size: clamp(2.65rem, 9vw, 6.8rem);
    font-weight: 900;
    line-height: 0.92;
    letter-spacing: 0;

    span {
      color: var(--text-soft);
      font-size: clamp(1.4rem, 3.5vw, 2.6rem);
      animation: slideGlow 800ms 120ms ease both;
    }

    strong {
      display: inline-block;
      width: fit-content;
      color: transparent;
      background: linear-gradient(90deg, var(--cyan), var(--text-main), var(--rose), var(--lime));
      background-size: 240% 100%;
      -webkit-background-clip: text;
      background-clip: text;
      text-shadow: 0 0 42px rgba(96, 247, 255, 0.18);
      animation: headlineFlow 5s ease-in-out infinite, slideGlow 800ms 260ms ease both;
    }
  }

  .hero-copy {
    max-width: 46rem;
    margin-top: 1.4rem;
    color: var(--text-soft);
    font-size: clamp(0.98rem, 1.6vw, 1.13rem);
    line-height: 1.85;
  }

  .hero-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
    margin-top: 1.5rem;

    span {
      border: 1px solid var(--line);
      border-radius: 999px;
      padding: 0.55rem 0.85rem;
      color: var(--text-soft);
      background: rgba(255, 255, 255, 0.04);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
      transition:
        transform 200ms ease,
        border-color 200ms ease,
        color 200ms ease;

      &:hover {
        color: var(--text-main);
        border-color: var(--line-strong);
        transform: translateY(-3px);
      }
    }
  }

  .profile-card {
    @apply relative;
    grid-column: span 4;
    align-self: center;
    width: min(100%, 28rem);
    padding: 1rem;
    overflow: hidden;
    border: 1px solid var(--line);
    border-radius: 1.25rem;
    background:
      linear-gradient(145deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.035)),
      rgba(8, 13, 27, 0.78);
    box-shadow:
      0 30px 90px rgba(0, 0, 0, 0.42),
      0 0 60px rgba(96, 247, 255, 0.12);
    backdrop-filter: blur(22px);
    transform-style: preserve-3d;
    animation: profileFloat 6s ease-in-out infinite;
    rotate: 0deg;
    justify-self: center;

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: inherit;
      padding: 1px;
      background: linear-gradient(135deg, var(--cyan), transparent 30%, var(--rose), transparent 70%, var(--lime));
      mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
      mask-composite: exclude;
      opacity: 0.68;
      pointer-events: none;
    }

    &__scanline {
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, transparent, rgba(96, 247, 255, 0.13), transparent);
      transform: translateY(-100%);
      animation: scanline 5s linear infinite;
      pointer-events: none;
    }

    &__image {
      position: relative;
      overflow: hidden;
      border-radius: 0.9rem;
      border: 1px solid var(--line);

      &::after {
        content: "";
        position: absolute;
        inset: 0;
        background:
          linear-gradient(180deg, transparent 45%, rgba(3, 4, 10, 0.7)),
          linear-gradient(90deg, rgba(96, 247, 255, 0.15), transparent, rgba(255, 101, 179, 0.13));
      }
    }

    img {
      display: block;
      width: 100%;
      aspect-ratio: 1 / 1;
      object-fit: cover;
      filter: saturate(1.08) contrast(1.05);
      transform: scale(1.01);
    }

    &__body {
      position: relative;
      padding: 1rem 0.35rem 0.2rem;
    }

    &--text {
      color: var(--text-main);
      font-weight: 800;
      line-height: 1.45;
      text-shadow: 0 0 22px rgba(255, 101, 179, 0.16);
    }

    &__stats {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 0.5rem;
      margin: 1rem 0;

      span {
        min-width: 0;
        border: 1px solid var(--line);
        border-radius: 0.75rem;
        padding: 0.65rem 0.5rem;
        color: var(--text-muted);
        background: rgba(255, 255, 255, 0.035);
        font-size: 0.72rem;
        text-align: center;
      }

      strong {
        display: block;
        color: var(--cyan);
        font-size: 1.15rem;
      }
    }
  }
}

.hero-metrics {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.85rem;
  width: 100%;
  margin: clamp(1.5rem, 4vw, 2.5rem) auto 0;

  span {
    border: 1px solid var(--line);
    border-radius: 0.9rem;
    padding: 0.9rem 1rem;
    color: var(--text-soft);
    background: rgba(255, 255, 255, 0.035);
    backdrop-filter: blur(16px);
  }

  strong {
    margin-right: 0.55rem;
    color: var(--lime);
    font-family: "Courier New", Courier, monospace;
  }
}

.cta-buttons {
  @apply flex flex-wrap gap-4 mt-8;
  .get-in-touch-btn {
    @apply font-semibold px-5 py-3 md:px-6;
    color: #031018;
    border-radius: 999px;
    background: linear-gradient(135deg, var(--cyan), var(--lime));
    box-shadow: 0 0 34px rgba(96, 247, 255, 0.28);

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 0 46px rgba(183, 255, 90, 0.32);
    }
  }
  .blogs {
    @apply font-semibold px-5 py-3 md:px-6;
    color: var(--text-main);
    border: 1px solid var(--line-strong);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(14px);

    &:hover {
      color: var(--cyan);
      transform: translateY(-3px);
      box-shadow: var(--shadow-glow);
    }
  }
}

.hero-orbit {
  position: absolute;
  inset: 9% 0 auto auto;
  width: min(40vw, 30rem);
  aspect-ratio: 1;
  pointer-events: none;
  opacity: 0.5;

  span {
    position: absolute;
    inset: 18%;
    border: 1px solid rgba(96, 247, 255, 0.18);
    border-radius: 34% 66% 52% 48%;
    animation: orbitSpin 18s linear infinite;

    &:nth-child(2) {
      inset: 28%;
      border-color: rgba(255, 101, 179, 0.2);
      animation-duration: 23s;
      animation-direction: reverse;
    }

    &:nth-child(3) {
      inset: 39%;
      border-color: rgba(183, 255, 90, 0.18);
      animation-duration: 14s;
    }
  }
}

@keyframes headlineFlow {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes slideGlow {
  from {
    opacity: 0;
    transform: translateY(16px);
    filter: blur(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

@keyframes profileFloat {
  0%,
  100% {
    transform: translateY(0) rotateX(0deg) rotateY(0deg);
  }
  50% {
    transform: translateY(-14px) rotateX(2deg) rotateY(-2deg);
  }
}

@keyframes scanline {
  0% {
    transform: translateY(-100%);
  }
  45%,
  100% {
    transform: translateY(120%);
  }
}

@keyframes orbitSpin {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 640px) {
  .hero-section {
    min-height: auto;
    border-radius: 1rem;

    .profile-card__stats {
      grid-template-columns: 1fr;
    }
  }

  .hero-orbit {
    width: 80vw;
    opacity: 0.28;
  }

  .hero-metrics {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 1024px) {
  .hero-section {
    &--content {
      grid-template-columns: 1fr;
    }

    .hero-text,
    .profile-card {
      grid-column: auto;
    }

    .profile-card {
      rotate: 0deg;
      width: min(100%, 24rem);
    }
  }
}
</style>

<template>
  <section class="hero-section" id="hero">
    <ThreeHeroScene />
    <div class="hero-section--content">
      <div class="hero-text">
        <p class="hero-eyebrow">IoT Engineer / Full-stack Developer</p>
        <h1>
          <span>Hi, I'm</span>
          <strong>Jenil Gajjar</strong>
        </h1>
        <p class="hero-summary">Developer &sdot; Open-Source Contributor &sdot; Cybersecurity Enthusiast</p>
        <div class="cta-buttons">
          <a href="#projects" class="get-in-touch-btn">Explore my work <span aria-hidden="true">&#8595;</span></a>
          <RouterLink to="/blogs" class="blogs">Read the journal <span aria-hidden="true">&#8599;</span></RouterLink>
        </div>
        <a class="hero-scroll" href="#about">Meet the developer <span aria-hidden="true">&#8595;</span></a>
      </div>
    </div>
  </section>
  <section class="about-section" id="about">
    <div class="about-portrait">
      <img src="/images/jenil.jpg" alt="Jenil Gajjar" />
      <p>Ahmedabad, India</p>
    </div>
    <div class="about-content">
      <p class="section-kicker">Behind the code</p>
      <h2>Curiosity drives<br />everything I build.</h2>
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
        <div class="about-actions">
          <a href="#contact">Get in Touch <span aria-hidden="true">&#8599;</span></a>
          <ButtonDefault
            text="Resume"
            icon
            class="button--outline mt-2 flex items-center justify-center w-full mx-auto"
            @click="openResume"
          />
        </div>
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

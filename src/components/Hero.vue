<template>
  <div class="container">
    <div class="hero-section">
      <div class="hero-section--content">
        <div class="hero-section--content-right">
          <div class="right-section--content">
            <h1>Hi, I am <span>Jenil Gajjar</span></h1>
            <p>
              As a passionate tech enthusiast, I thrive on continuous learning
              and enthusiastically embrace new technologies. My adaptable
              mindset and self-driven approach enable me to excel in dynamic
              work environments. I actively contribute to open-source projects,
              embodying a commitment to collaborative learning and innovation.
              Eager to delve into new security technologies and methodologies, I
              bring a blend of curiosity, dedication, and a strong desire to
              make meaningful contributions to the ever-evolving tech landscape,
              with a specific focus on enhancing security and protecting digital
              assets.
            </p>
          </div>

          <!-- Social Links -->
          <!-- <SocialLinks class-name="hero" /> -->

          <!-- Primary Resume Button -->
          <!-- icon="IconsRocket" -->
          <ButtonDefault text="Resume" class="button--outline" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SocialLinks from "@/components/SocialLinks.vue";
import ButtonDefault from "@/components/button/Default.vue";
</script>

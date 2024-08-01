<template>
  <div class="hero-section">
    <div class="hero-section--content">
      <div class="hero-section--content-right">
        <div class="right-section--content">
          <h1>Hi, I am <span>Jenil Gajjar</span></h1>
          <p>
            As a passionate tech enthusiast, I thrive on continuous learning and
            enthusiastically embrace new technologies. My adaptable mindset and
            self-driven approach enable me to excel in dynamic work
            environments. I actively contribute to open-source projects,
            embodying a commitment to collaborative learning and innovation.
            Eager to delve into new security technologies and methodologies, I
            bring a blend of curiosity, dedication, and a strong desire to make
            meaningful contributions to the ever-evolving tech landscape, with a
            specific focus on enhancing security and protecting digital assets.
          </p>
        </div>

        <!-- Primary Resume Button -->
        <ButtonDefault
          text="Resume"
          class="button--outline"
          @click="openResume"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonDefault from "@/components/button/Default.vue";
import { ref } from "vue";

const url = ref("");

const openResume = () => {
  url.value = `${import.meta.env.BASE_URL}jenilgajjar_resume.pdf`;
  window.open(url.value, "_blank");
};
</script>

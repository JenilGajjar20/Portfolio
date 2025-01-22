<template>
  <div class="hero-section">
    <div class="hero-section--content">
      <div class="profile-card">
        <img src="/images/jenil.jpg" alt="profile-image" />
        <p class="profile-card--text">
          Developer &sdot; Open-Source Contributor &sdot; Cybersecurity
          Enthusiast
        </p>
        <ButtonDefault
          text="Resume"
          icon
          class="button--outline mt-2 flex items-center justify-center w-full mx-auto"
          @click="openResume"
        />
      </div>

      <div class="hero-text">
        <h1
          class="text-4xl xl:text-5xl 2xl:text-7xl font-extrabold leading-tight text-white"
        >
          Hi, I’m <span class="text-yellow-500">Jenil Gajjar</span>
        </h1>
        <p class="text-gray-400 mt-4 lg:text-lg xl:text-xl">
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
        <div class="cta-buttons">
          <a href="#contact" class="get-in-touch-btn"> Get in Touch </a>
          <RouterLink to="/blogs" class="blogs"> Blogs </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonDefault from "@/components/button/Default.vue";
import { ref } from "vue";
import { RouterLink } from "vue-router";

const url = ref("");

const openResume = () => {
  url.value = `${import.meta.env.BASE_URL}jenilgajjar_resume.pdf`;
  window.open(url.value, "_blank");
};
</script>

<style lang="scss">
.hero-section {
  @apply pt-10 md:pt-24;
  &--content {
    @apply flex flex-col-reverse lg:flex-row items-center gap-8 max-w-7xl mx-auto;
  }
  .profile-card {
    @apply shadow-lg bg-gray-800 p-6 rounded-lg w-auto;
    img {
      @apply rounded-md mx-auto;
    }
    &--text {
      @apply text-yellow-500 lg:text-lg pt-4 font-bold;
    }
  }
}

.cta-buttons {
  @apply flex gap-4 mt-6;
  .get-in-touch-btn {
    @apply font-semibold px-5 py-2 bg-yellow-500 text-gray-800 rounded-md hover:bg-yellow-400 md:px-6;
  }
  .blogs {
    @apply font-semibold px-5 py-2 border-2 border-yellow-500 text-yellow-500 rounded-md hover:border-bright_yellow hover:text-bright_yellow md:px-6;
  }
}
</style>

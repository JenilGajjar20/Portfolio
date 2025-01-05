<template>
  <div class="hero-section">
    <div class="hero-section--content">
      <div class="profile-card w-full">
        <img src="/images/jenil.jpg" alt="profile-image" />
        <p class="profile-card--text">
          Developer &sdot; Open-Source Contributor &sdot; Cybersecurity
          Enthusiast
        </p>
        <!-- <div class="flex items-center justify-center gap-4 text-2xl">
          <a href="https://twitter.com/gajjar_jenil" target="_blank">
            <IconsMdiTwitter class="text-gray-400 hover:text-yellow-500" />
          </a>
          <a href="https://www.linkedin.com/in/jenilgajjar/" target="_blank">
            <IconsMdiLinkedIn class="text-gray-400 hover:text-yellow-500" />
          </a>
        </div> -->
      </div>

      <div class="hero-text">
        <h1
          class="text-4xl lg:text-5xl xl:text-7xl font-extrabold leading-tight text-white"
        >
          Hi, I’m <span class="text-yellow-500">Jenil Gajjar</span>
        </h1>
        <p class="text-gray-400 mt-4 lg:text-xl">
          As a tech enthusiast, I thrive on continuous learning and adapting to
          new technologies. With a self-driven approach, I excel in dynamic
          environments and actively contribute to open-source projects.
          Passionate about security, I aim to explore new technologies and make
          impactful contributions to safeguarding digital assets.
        </p>
        <div class="cta-buttons">
          <a href="#contact" class="get-in-touch-btn"> Get in Touch </a>
          <!-- <ButtonDefault
            text="Resume"
            icon
            class="button--outline"
            @click="openResume"
          /> -->
          <RouterLink to="/blogs" class="blogs"> Blogs </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconsMdiTwitter from "@/components/icons/MdiTwitter.vue";
import IconsMdiLinkedIn from "@/components/icons/MdiLinkedIn.vue";
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
    @apply flex flex-col-reverse md:flex-row items-center gap-8 max-w-7xl mx-auto;
  }
  .profile-card {
    @apply shadow-lg bg-gray-800 p-6 rounded-lg;
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

<template>
  <main class="module">
    <div class="hero-section">
      <div class="hero-section--content">
        <div class="hero-section--content-left">
          <img src="@/assets/images/jenil.jpg" alt="jenil-gajjar" />
        </div>
        <div class="hero-section--content-right">
          <div class="right-section--content">
            <h1>Hi, I am <span>Jenil Gajjar</span></h1>
            <p>Passionate Developer</p>
          </div>

          <!-- Social Links -->
          <SocialLinks class-name="hero" />

          <!-- Primary Resume Button -->
          <!-- icon="IconsRocket" -->
          <ButtonDefault text="Resume" class="button--outline" />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import SocialLinks from "@/components/SocialLinks.vue";
import ButtonDefault from "@/components/button/Default.vue";
</script>

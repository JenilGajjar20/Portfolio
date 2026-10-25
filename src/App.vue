<script setup>
import Navbar from "@/components/navbar/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="portfolio-shell">
    <div class="site-backdrop" aria-hidden="true">
      <div class="backdrop-grid"></div>
      <div class="backdrop-particles"></div>
      <div class="backdrop-beam backdrop-beam--one"></div>
      <div class="backdrop-beam backdrop-beam--two"></div>
    </div>

    <header class="navbar">
      <Navbar />
    </header>

    <router-view />

    <Footer />
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/redesign.scss";
</style>

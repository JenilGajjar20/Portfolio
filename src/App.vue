<script setup>
import Navbar from "@/components/navbar/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <header class="navbar">
    <Navbar />
  </header>

  <router-view />

  <Footer />
</template>

<style scoped></style>

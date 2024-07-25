<template>
  <main class="module">
    <!-- Hero Section -->
    <Hero />

    <HLine />

    <!-- About Section -->
    <!-- <AboutMe /> -->

    <Education />

    <HLine />

    <Experience />

    <HLine />

    <Skills />

    <!-- <HLine /> -->
    <!-- Projects Section -->
    <Projects />

    <HLine />

    <Certifications />

    <HLine />

    <!-- Articles Section -->
    <!-- <Articles /> -->
  </main>
</template>

<script setup>
import Hero from "@/components/Hero.vue";
// import AboutMe from "@/components/AboutMe.vue";
import Education from "@/components/Education.vue";
import Skills from "@/components/Skills.vue";
import Projects from "@/components/Projects.vue";
// import Articles from "@/components/Articles.vue";
import Experience from "@/components/Experience.vue";
import HLine from "@/components/HLine.vue";
import Certifications from "@/components/Certifications.vue";
</script>

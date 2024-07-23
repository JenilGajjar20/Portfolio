<template>
  <main class="module">
    <Hero />

    <HLine />

    <!-- <AboutMe /> -->

    <Education />

    <HLine />

    <Experience />

    <HLine />

    <Skills />

    <HLine />

    <Projects />

    <!-- <HLine /> -->

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
</script>

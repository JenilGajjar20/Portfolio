<template>
  <main class="container home-interface">
    <Hero />

    <!-- <Education /> -->

    <div class="interface-panel-grid">
      <Projects />
      <Skills />
    </div>

    <Experience />

    <div class="interface-panel-grid interface-panel-grid--secondary">
      <Publication />
      <Certifications />
    </div>

    <Contact />
  </main>
</template>

<script setup>
import Hero from "@/components/Hero.vue";
// import Education from "@/components/Education.vue";
import Skills from "@/components/Skills.vue";
import Projects from "@/components/Projects.vue";
import Experience from "@/components/Experience.vue";
import Certifications from "@/components/Certifications.vue";
import Contact from "@/components/Contact.vue";
import Publication from "../components/Publication.vue";
</script>

<template>
  <div class="projects">
    <div class="projects-content">
      <div class="content-header">
        <h2>Projects</h2>
        <a href="https://github.com/JenilGajjar20/" target="_blank">
          Open GitHub
        </a>
      </div>
      <div class="projects--lists">
        <!-- Cards -->
        <Card v-for="project in projects" :key="project.id" :item="project" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Card from "@/components/Card.vue";
import projectData from "@/data/projects/data.json";

import { onMounted, ref } from "vue";

let projects = ref([]);

onMounted(() => {
  projects.value = projectData;
});
</script>

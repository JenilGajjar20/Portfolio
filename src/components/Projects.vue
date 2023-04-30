<template>
  <div class="container">
    <div class="projects">
      <div class="projects-content">
        <div class="content-header">
          <h2>Projects</h2>
          <a :href="github_link" target="_blank">View Profile</a>
        </div>
        <div class="projects--lists">
          <!-- Cards -->
          <Card v-for="project in projects" :key="project.id" :item="project" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Card from "@/components/Card.vue";

import axios from "axios";
import { onMounted, ref } from "vue";

let projects = ref([]);
let github_link = ref("");

onMounted(() => {
  axios
    .get("https://api.github.com/users/JenilGajjar20/repos?page=2")
    .then((res) => res.data)
    .then((data) => {
      console.log("data: ", data);
      projects.value = data;
      github_link.value = data[0].owner?.html_url;
    });
});
</script>

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
        <Card
          v-for="project in projects"
          :key="project.id"
          :item="project"
          @open-modal="handleOpenModal"
        />
      </div>
    </div>

    <Modal
      v-if="isModalOpen"
      :project="selectedProject"
      @close="handleCloseModal"
    />
  </div>
</template>

<script setup>
import Card from "@/components/Card.vue";
import projectData from "@/data/projects/data.json";

import { onMounted, ref } from "vue";
import Modal from "@/components/Modal.vue";

let projects = ref([]);
const isModalOpen = ref(false);
const selectedProject = ref(null);

onMounted(() => {
  projects.value = projectData;
});

const handleOpenModal = (project) => {
  selectedProject.value = project;
  isModalOpen.value = true;
  document.body.style.overflow = "hidden";
};

const handleCloseModal = () => {
  isModalOpen.value = false;
  document.body.style.overflow = "auto";
};
</script>

<style lang="scss">
.projects {
  @apply relative;
}
</style>

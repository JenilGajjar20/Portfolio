<template>
  <div class="container">
    <div class="certificates">
      <div class="certificates-content">
        <div class="content-header">
          <h2>Certifications</h2>
        </div>
        <div class="certificates-data">
          <div
            class=""
            v-for="certificate in certificates"
            :key="certificate.id"
          >
            {{ certificate }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import certificatesData from "@/data/certificates/data.json";
import { onMounted, ref } from "vue";

const certificates = ref([]);

onMounted(() => {
  certificates.value = certificatesData;
});
</script>

<style lang="scss"></style>

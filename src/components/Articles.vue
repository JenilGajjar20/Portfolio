<template>
  <div class="container">
    <div class="articles">
      <div class="articles-content">
        <div class="content-header">
          <h2>Articles</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

let articles = ref([]);
</script>

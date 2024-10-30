<template>
  <h4 class="mb-4 text-xl font-bold md:mb-8 md:text-5xl">All Articles</h4>
  <div class="blogs-articles">
    <div
      v-for="article in articles"
      :key="article.id"
      class="bg-gray-900 rounded overflow-hidden lg:flex lg:items-center lg:gap-6"
    >
      <div class="blogs-articles__img">
        <img :src="`/images/${article.image}`" :alt="article.title" />
      </div>
      <div class="blogs-articles__data">
        <div
          class="flex items-center gap-4 text-gray-600 text-sm md:text-base pb-4"
        >
          <p>{{ article.platform }}</p>
          <span>|</span>
          <p>{{ article.date_published }}</p>
        </div>
        <div>
          <a
            :href="article.link"
            target="_blank"
            class="text-2xl font-oswald md:text-4xl hover:text-bright_yellow"
          >
            {{ article.title }}
          </a>
          <p class="mt-4 text-gray-500 xl:mt-6 xl:text-lg">
            {{ article.desc.substring(0, 250) + "..." }}
          </p>
        </div>
        <div class="mt-4 flex items-center gap-2 text-gray-600">
          <IconsMdiRead />
          <p>{{ article.read_time }} min read</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import articlesData from "@/data/articles/data.json";
import IconsMdiRead from "@/components/icons/MdiRead.vue";

import { onMounted, ref } from "vue";

const articles = ref([]);

onMounted(() => {
  articles.value = articlesData;
});
</script>

<style lang="scss"></style>

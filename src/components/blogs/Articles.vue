<template>
  <section v-reveal>
    <h4 class="blogs-section-title mb-4 md:mb-8">All Articles</h4>
  </section>
  <section class="blogs-articles">
    <div
      v-for="article in articles"
      :key="article.id"
      class="article-card"
      v-reveal
    >
      <div class="blogs-articles__img">
        <img :src="`/images/${article.image}`" :alt="article.title" />
      </div>
      <div class="blogs-articles__data">
        <div class="blog-meta flex items-center gap-4 text-sm md:text-base pb-4">
          <p>{{ article.platform }}</p>
          <span>|</span>
          <p>{{ article.date_published }}</p>
        </div>
        <div>
          <a
            :href="article.link"
            target="_blank"
          >
            {{ article.title }}
          </a>
          <p class="mt-4 xl:mt-6 xl:text-lg">
            {{ article.desc.substring(0, 250) + "..." }}
          </p>
        </div>
        <div class="read-time mt-4 flex items-center gap-2">
          <IconsMdiRead />
          <p>{{ article.read_time }} min read</p>
        </div>
      </div>
    </div>
  </section>
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

<template>
  <div class="container">
    <div class="articles">
      <div class="articles-content">
        <div class="content-header">
          <h2>
            Articles <span>({{ articles.length }})</span>
          </h2>
          <a :href="article_link" target="_blank">Go To Medium</a>
        </div>
        <div class="articles--lists">
          <!-- Articles Cards -->
          <Card
            v-for="(article, index) in articles"
            :key="index"
            :item="article"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Card from "@/components/Card.vue";
import axios from "axios";
import { onMounted, ref } from "vue";

let articles = ref([]);
let article_link = ref("");

onMounted(() => {
  axios
    .get(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jenilgajjar"
    )
    .then((res) => {
      articles.value = res.data.items;
      article_link.value = res.data.feed.link;
    });
});
</script>

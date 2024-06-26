<template>
  <div class="cards">
    <div class="cards-content">
      <!-- Article Thumbnail -->
      <!-- <div v-if="item?.thumbnail" class="card--image">
        <img :src="item.thumbnail" :alt="item.title" />
      </div> -->
      <div class="card--data">
        <!-- Github Project Details -->
        <div class="card--top">
          <p>{{ item.title }}</p>
          <a :href="item.link" target="_blank">
            <IconsMdiArrowTopRight
              class="mt-1.5 text-xl text-gray-500 hover:text-black"
            />
          </a>
        </div>

        <!-- Article Details -->
        <!-- <div v-else class="card--top">
          <p class="pb-4">{{ item.title }}</p>
          <a :href="item.link" target="_blank">
            <IconsMdiArrowTopRight
              class="mt-1.5 text-xl text-gray-500 hover:text-black"
            />
          </a>
        </div> -->

        <div v-if="item.description" class="card--middle">
          <p v-html="item.description" />
        </div>

        <!-- Project Topics -->
        <div class="card--bottom">
          <div v-if="item.topics?.length" class="topics">
            Topics:
            <p v-for="(topic, index) in item.topics" :key="index" class="">
              {{ topic }}
            </p>
          </div>
          <!-- <div v-if="item.created_at" class="created-at">
            Created At:
            <p>{{ item?.created_at }}</p>
          </div> -->
        </div>

        <!-- Article Categories -->
        <!-- <div v-if="item?.categories" class="card--bottom">
          <div class="categories">
            Categories:
            <p v-for="(category, index) in item.categories" :key="index">
              {{ category }}
            </p>
          </div> -->
        <!-- Article Published Date -->
        <!-- <div v-if="item.pubDate" class="pub-date">
            Published:
            <p>{{ item?.pubDate }}</p>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import IconsMdiArrowTopRight from "@/components/icons/MdiArrowTopRight.vue";
// import { computed } from "vue";

defineProps(["item"]);

// const publishedDate = computed(() => {
//   return item?.pubDate;
// });
</script>

<style lang="scss">
.cards {
  @apply mb-8;
  &-content {
    @apply relative;
  }
}

.card {
  &--image {
    @apply p-5;
    img {
      box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
      @apply h-64 mx-auto aspect-square object-cover rounded w-full;
    }
  }
  &--data {
    @apply bg-white rounded p-4;
  }
  &--top {
    @apply flex items-start justify-between gap-3;
    p {
      @apply text-lg md:text-xl text-black font-bold;
    }
  }
  &--middle {
    @apply py-4;
    p {
      @apply text-gray-500;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
  &--bottom {
    @apply text-gray-700 text-xs flex items-center gap-2 flex-wrap;
    p {
      @apply border border-gray-500 rounded px-2 py-1;
    }
    .topics,
    .categories {
      @apply flex items-center gap-2 flex-wrap;
    }
    .created-at,
    .pub-date {
      @apply flex items-center gap-2 pt-3;
    }
  }
}
</style>

<template>
  <div class="cards">
    <div class="cards-content">
      <div class="card--data">
        <div class="card--top">
          <p>{{ item.title }}</p>
          <a :href="item.link" target="_blank">
            <IconsMdiArrowTopRight
              class="mt-1.5 text-xl text-gray-500 hover:text-black"
            />
          </a>
        </div>

        <div v-if="item.description" class="card--middle">
          <p v-html="item.description" />
        </div>

        <div class="card--bottom">
          <div v-if="item.topics?.length" class="topics">
            <p>Topics:</p>
            <span v-for="(topic, index) in item.topics" :key="index" class="">
              {{ topic }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconsMdiArrowTopRight from "@/components/icons/MdiArrowTopRight.vue";

defineProps(["item"]);
</script>

<style lang="scss">
.projects--lists {
  @apply pt-10 md:gap-8 md:columns-3;
  .cards {
    @apply mb-8 md:break-inside-avoid;
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
      @apply text-gray-700 flex items-center gap-2 flex-wrap;
      span {
        @apply border border-gray-500 rounded px-2 py-1 text-xs;
      }
      .topics,
      .categories {
        @apply flex items-center gap-2 flex-wrap;
        p {
          @apply font-bold text-sm;
        }
      }
      .created-at,
      .pub-date {
        @apply flex items-center gap-2 pt-3;
      }
    }
  }
}
</style>

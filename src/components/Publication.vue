<template>
  <div class="publications">
    <div class="publication-content">
      <div class="content-header">
        <h2>Publications</h2>
      </div>
      <div class="publication-content__data">
        <div
          v-for="pubData in pubDetails"
          :key="pubData.id"
          class="publication-card"
        >
          <div class="publication-card__header">
            <div class="journal-info">
              <IconsMdiRead class="icon-journal" />
              <span class="journal-name">{{ pubData.journal }}</span>
            </div>
            <span class="publish-date">{{ pubData.publish_date }}</span>
          </div>

          <h3 class="publication-card__title">
            {{ pubData.title }}
          </h3>

          <div class="publication-card__tags">
            <span class="section-tag"> {{ pubData.Section }} </span>
          </div>

          <div class="publication-card__footer">
            <a :href="pubData.link" target="_blank" class="read-more-btn">
              <span>Read Full Publication</span>
              <IconsMdiArrowTopRight class="icon-arrow" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import pubDataJson from "@/data/publication/data.json";
import IconsMdiRead from "@/components/icons/MdiRead.vue";
import IconsMdiArrowTopRight from "@/components/icons/MdiArrowTopRight.vue";

import { onMounted, ref } from "vue";

const pubDetails = ref([]);

onMounted(() => {
  pubDetails.value = pubDataJson;
});
</script>

<style lang="scss">
.publication-content {
  &__data {
    @apply pt-8 grid grid-cols-1 gap-6;

    .publication-card {
      @apply bg-gray-900 border border-gray-800 p-6 rounded-xl transition-all duration-300 hover:border-gray-400 hover:shadow-2xl flex flex-col gap-4;

      &__header {
        @apply flex flex-wrap justify-between items-center gap-2;

        .journal-info {
          @apply flex items-center gap-2 text-gray-400 text-sm font-medium;
          .icon-journal {
            @apply w-5 h-5 text-gray-500;
          }
        }

        .publish-date {
          @apply text-gray-500 text-sm;
        }
      }

      &__title {
        @apply font-bold text-lg md:text-xl leading-relaxed text-white;
      }

      &__tags {
        @apply flex flex-wrap gap-2;

        .section-tag {
          @apply text-[10px] uppercase tracking-wider font-bold bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700;
        }
      }

      &__footer {
        @apply mt-auto pt-4 border-t border-gray-800 flex justify-end;

        .read-more-btn {
          @apply flex items-center gap-2 text-sm font-bold text-white hover:text-gray-300 transition-colors duration-200;

          .icon-arrow {
            @apply w-4 h-4 transition-transform duration-200;
          }

          &:hover .icon-arrow {
            @apply transform -translate-y-0.5 translate-x-0.5;
          }
        }
      }
    }
  }
}
</style>
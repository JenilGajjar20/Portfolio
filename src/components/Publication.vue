<template>
  <section class="publications" id="publications">
    <div class="publication-content" v-reveal>
      <div class="content-header">
        <h2>Publications</h2>
      </div>
      <div class="publication-content__data">
        <div
          v-for="pubData in pubDetails"
          :key="pubData.id"
          class="publication-card"
          v-reveal
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
  </section>
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
    @apply grid grid-cols-1 gap-6;

    .publication-card {
      @apply p-6 transition-all duration-300 flex flex-col gap-4;
      position: relative;
      overflow: hidden;
      border: 1px solid var(--line);
      border-radius: 1.15rem;
      background:
        linear-gradient(135deg, rgba(96, 247, 255, 0.085), rgba(255, 255, 255, 0.03)),
        var(--bg-panel);
      box-shadow: 0 18px 70px rgba(0, 0, 0, 0.28);
      backdrop-filter: blur(18px);

      &::before {
        content: "";
        position: absolute;
        inset: 0 auto 0 0;
        width: 4px;
        background: linear-gradient(180deg, var(--cyan), var(--rose), var(--lime));
      }

      &:hover {
        border-color: var(--line-strong);
        transform: translateY(-6px);
        box-shadow:
          0 24px 80px rgba(0, 0, 0, 0.34),
          0 0 34px rgba(96, 247, 255, 0.14);
      }

      &__header {
        @apply flex flex-wrap justify-between items-center gap-2;

        .journal-info {
          @apply flex items-center gap-2 text-sm font-medium;
          color: var(--text-soft);
          .icon-journal {
            @apply w-5 h-5;
            color: var(--cyan);
          }
        }

        .publish-date {
          @apply text-sm;
          color: var(--text-muted);
        }
      }

      &__title {
        @apply font-bold text-lg md:text-xl leading-relaxed;
        color: var(--text-main);
      }

      &__tags {
        @apply flex flex-wrap gap-2;

        .section-tag {
          @apply text-[10px] uppercase font-bold px-3 py-1 rounded-full;
          color: var(--lime);
          border: 1px solid rgba(183, 255, 90, 0.22);
          background: rgba(183, 255, 90, 0.06);
        }
      }

      &__footer {
        @apply mt-auto pt-4 flex justify-end;
        border-top: 1px solid var(--line);

        .read-more-btn {
          @apply flex items-center gap-2 text-sm font-bold transition-colors duration-200;
          color: var(--text-main);

          .icon-arrow {
            @apply w-4 h-4 transition-transform duration-200;
          }

          &:hover {
            color: var(--cyan);

            .icon-arrow {
              @apply transform -translate-y-0.5 translate-x-0.5;
            }
          }
        }
      }
    }
  }
}
</style>

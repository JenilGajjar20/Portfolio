<template>
  <div v-if="!item?.show" class="cards">
    <div class="cards-content">
      <div v-if="item?.image" class="card--image">
        <img :src="`/images/projects/${item?.image}.png`" :alt="item.title" />
      </div>
      <div class="card--data">
        <div class="card--top">
          <p class="card--top_badge" :class="item?.color_class">
            <span>{{ item?.category ? item.category : item.tech }}</span>
          </p>
          <div class="card--top_icon">
            <button v-if="item.projects" @click="emit('openModal', item)">
              <IconsMdiModal
                class="mt-1.5 text-xl text-white hover:text-gray-500"
              />
            </button>
            <a :href="item.link" target="_blank">
              <IconsMdiArrowTopRight
                class="mt-1.5 text-xl text-white hover:text-gray-500"
              />
            </a>
          </div>
        </div>

        <div class="card--bottom">
          <h6>{{ item.title }}</h6>
          <div v-if="item.description" class="card--desc">
            <p v-html="item.description" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconsMdiModal from "@/components/icons/Modal.vue";
import IconsMdiArrowTopRight from "@/components/icons/MdiArrowTopRight.vue";

defineProps(["item"]);
const emit = defineEmits(["openModal"]);
</script>

<style lang="scss">
.projects--lists {
  @apply pt-10 md:gap-8 md:columns-2 lg:columns-3;
  .cards {
    @apply mb-8 md:break-inside-avoid;
    &-content {
      @apply relative;
    }
  }
  .card {
    &--image {
      @apply border-4 border-gray-900 rounded-tr rounded-tl p-5;
      img {
        box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
        @apply h-40 mx-auto aspect-square object-cover rounded w-full;
      }
    }
    &--data {
      @apply bg-gray-900 rounded-br rounded-bl p-4;
    }
    &--top {
      @apply flex items-center justify-between gap-3;
      &_badge {
        @apply bg-gray-800 px-2 rounded;
        span {
          @apply font-bold text-xs uppercase;
        }
      }
      &_icon {
        @apply flex items-center gap-3;
      }
    }

    &--bottom {
      @apply py-4;
      h6 {
        @apply text-lg md:text-xl text-white font-bold pb-4;
      }
    }
    &--desc {
      p {
        @apply text-gray-300;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  }
}
</style>

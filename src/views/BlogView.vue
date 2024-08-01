<template>
  <main class="container">
    <Blogs />

    <BlogsLatest />
  </main>
</template>

<script setup>
import Blogs from "@/components/blogs/Index.vue";
import BlogsLatest from "@/components/blogs/Latest.vue";
</script>

<style lang="scss">
.blogs {
  @apply py-8 md:py-12;
  &-content {
    @apply bg-charcoal rounded p-4 text-center md:p-8 lg:p-12;
    &__title {
      @apply text-bright_yellow text-2xl font-oswald md:text-6xl;
    }
  }
  &-latest {
    @apply lg:flex lg:items-start lg:gap-6;
    &__img {
      @apply mb-4 lg:mb-0;
      img {
        @apply w-full h-72 md:h-96 lg:h-full rounded-lg;
      }
    }
    &__data {
    }
  }
}
</style>

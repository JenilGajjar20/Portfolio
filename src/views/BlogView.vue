<template>
  <main class="container">
    <Blogs />

    <BlogsLatest />

    <HLine />

    <BlogsArticles />
  </main>
</template>

<script setup>
import Blogs from "@/components/blogs/Index.vue";
import BlogsLatest from "@/components/blogs/Latest.vue";
import BlogsArticles from "@/components/blogs/Articles.vue";
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
      @apply mb-4 lg:mb-0 md:w-full;
      img {
        @apply w-full md:h-80 rounded-lg;
      }
    }
  }
  &-articles {
    @apply grid grid-cols-1 gap-5;
    &__img {
      img {
        @apply h-72 w-96 p-3 mx-auto md:w-full lg:pr-0 lg:w-96;
      }
    }
    &__data {
      @apply w-full px-6 py-3 md:py-6 lg:pl-0;
    }
  }
}
</style>

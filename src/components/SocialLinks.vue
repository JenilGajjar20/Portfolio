<template>
  <div :class="`${className}-social-links`">
    <div class="links">
      <a href="https://twitter.com/gajjar_jenil" target="_blank">
        <IconsMdiTwitter />
      </a>
      <a
        href="https://www.linkedin.com/in/jenil-gajjar-27934920a/"
        target="_blank"
      >
        <IconsMdiLinkedIn />
      </a>
      <a href="https://github.com/JenilGajjar20" target="_blank">
        <IconsMdiGitHub />
      </a>
      <a href="https://jenilgajjar.medium.com/" target="_blank">
        <IconsMdiMedium />
      </a>
    </div>
  </div>
</template>

<script setup>
import IconsMdiTwitter from "@/components/icons/MdiTwitter.vue";
import IconsMdiLinkedIn from "@/components/icons/MdiLinkedIn.vue";
import IconsMdiMedium from "@/components/icons/MdiMedium.vue";
import IconsMdiGitHub from "@/components/icons/MdiGitHub.vue";

defineProps({
  className: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss">
.navbar-social-links {
  @apply absolute bottom-0 w-full py-3 flex justify-center items-center border-t border-grey;
  .links {
    @apply flex items-center gap-3 text-grey;
    a {
      @apply text-xl;
    }
  }
}

.hero-social-links {
  @apply py-4 md:py-6;
  .links {
    @apply flex items-center gap-3;
    a {
      @apply text-xl md:text-2xl;
      &:hover {
        @apply text-gray-300;
      }
    }
  }
}
</style>

<template>
  <div class="navbar-items">
    <!-- <p class="hidden md:block">Connect with me on:</p> -->
    <div class="flex items-center gap-4 text-2xl">
      <a href="https://twitter.com/gajjar_jenil" target="_blank">
        <IconsMdiTwitter class="text-gray-400 hover:text-yellow-500" />
      </a>
      <a href="https://www.linkedin.com/in/jenilgajjar/" target="_blank">
        <IconsMdiLinkedIn class="text-gray-400 hover:text-yellow-500" />
      </a>
    </div>
  </div>
</template>

<script setup>
import IconsMdiTwitter from "@/components/icons/MdiTwitter.vue";
import IconsMdiLinkedIn from "@/components/icons/MdiLinkedIn.vue";
</script>

<style lang="scss" scoped></style>

<template>
  <div class="container py-10 md:py-24">
    <div class="footer-section">
      <div class="border border-gray-500">
        <div
          class="content-[''] absolute bg-black px-2 top-3 left-0 right-0 w-fit mx-auto"
        >
          <div class="flex items-center gap-3 text-xl md:text-2xl md:gap-4">
            <a href="https://github.com/JenilGajjar20" target="_blank">
              <IconsMdiGitHub class="text-gray-400 hover:text-white" />
            </a>
            <a href="https://jenilgajjar.medium.com/" target="_blank">
              <IconsMdiMedium class="text-gray-400 hover:text-white" />
            </a>
            <a href="https://jenilgajjar.hashnode.dev/" target="_blank">
              <IconsMdiHashnode class="text-gray-400 hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="fonts text-center pt-5 text-xl font-bold md:pt-10 md:text-2xl">
      <p>"Thanks for Scrolling!"</p>
    </div>
  </div>
</template>

<script setup>
import IconsMdiGitHub from "@/components/icons/MdiGitHub.vue";
import IconsMdiMedium from "@/components/icons/MdiMedium.vue";
import IconsMdiHashnode from "@/components/icons/MdiHashnode.vue";
</script>

<style lang="scss">
.footer-section {
  @apply p-5 relative;
}

.fonts {
  font-family: "Courier New", Courier, monospace;
}
</style>

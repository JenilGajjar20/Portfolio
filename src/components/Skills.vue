<template>
  <div class="container">
    <div class="skills">
      <div class="skills-content">
        <div class="content-header">
          <h2>Skills</h2>
        </div>
        <div class="skills-content__data">
          <div class="skill-data">
            <div
              class="grid grid-cols-3 gap-7 md:grid-cols-4 md:gap-10 lg:gap-14"
            >
              <div class="text-center">
                <IconsHtml class="mx-auto h-10 w-10 mb-2 md:h-20 md:w-20" />
                <p class="font-bold">HTML</p>
              </div>
              <div class="text-center">
                <IconsCSS class="mx-auto h-10 w-10 mb-2 md:h-20 md:w-20" />
                <p class="font-bold">CSS</p>
              </div>
              <div class="text-center">
                <IconsTailwind class="mx-auto h-10 w-10 mb-2 md:h-20 md:w-20" />
                <p class="font-bold">Tailwind CSS</p>
              </div>
              <div class="text-center">
                <IconsJS class="mx-auto h-10 w-10 mb-2 md:h-20 md:w-20" />
                <p class="font-bold">JavaScript</p>
              </div>
              <div class="text-center">
                <IconsVue class="mx-auto h-10 w-10 mb-2 md:h-20 md:w-20" />
                <p class="font-bold">Vue.js</p>
              </div>
              <div class="text-center">
                <IconsNuxt class="mx-auto h-10 w-10 mb-2 md:h-20 md:w-20" />
                <p class="font-bold">Nuxt.js</p>
              </div>
              <div class="text-center">
                <IconsPython class="mx-auto h-10 w-10 mb-2 md:h-20 md:w-20" />
                <p class="font-bold">Python</p>
              </div>
              <div class="text-center">
                <IconsKaliLinux
                  class="mx-auto h-10 w-10 mb-2 md:h-20 md:w-20"
                />
                <p class="font-bold">Kali Linux</p>
              </div>
              <div class="text-center">
                <IconsBurpSuite
                  class="mx-auto h-10 w-10 mb-2 md:h-20 md:w-20"
                />
                <p class="font-bold">BurpSuite</p>
              </div>
              <div class="text-center">
                <IconsWireShark
                  class="mx-auto h-10 w-10 mb-2 md:h-20 md:w-20"
                />
                <p class="font-bold">Wireshark</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconsHtml from "@/components/icons/Html.vue";
import IconsCSS from "@/components/icons/CSS.vue";
import IconsTailwind from "@/components/icons/Tailwind.vue";
import IconsJS from "@/components/icons/JS.vue";
import IconsVue from "@/components/icons/Vue.vue";
import IconsNuxt from "@/components/icons/Nuxt.vue";
import IconsPython from "@/components/icons/Python.vue";
import IconsKaliLinux from "@/components/icons/KaliLinux.vue";
import IconsBurpSuite from "@/components/icons/BurpSuite.vue";
import IconsWireShark from "@/components/icons/Wireshark.vue";
</script>

<style lang="scss">
.skills-content {
  &__data {
    @apply pt-5 md:pt-10;
    .skill-data {
      @apply space-y-5 md:space-y-8;
    }
  }
}
</style>

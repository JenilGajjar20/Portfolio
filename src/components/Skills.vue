<template>
  <div class="skills">
    <div class="skills-content">
      <div class="content-header">
        <h2>Skills</h2>
      </div>
      <div class="skills-content__data">
        <div class="skill-data">
          <div
            class="grid grid-cols-2 gap-7 md:grid-cols-3 md:gap-10 lg:gap-14 lg:grid-cols-4"
          >
            <div class="common-class">
              <IconsHtml class="icon" />
              <p>HTML</p>
            </div>
            <div class="common-class">
              <IconsCSS class="icon" />
              <p>CSS</p>
            </div>
            <div class="common-class">
              <IconsTailwind class="icon" />
              <p>Tailwind CSS</p>
            </div>
            <div class="common-class">
              <IconsJS class="icon" />
              <p>JavaScript</p>
            </div>
            <div class="common-class">
              <IconsPHP class="icon" />
              <p>PHP</p>
            </div>
            <div class="common-class">
              <IconsVue class="icon" />
              <p>Vue.js</p>
            </div>
            <div class="common-class">
              <IconsNuxt class="icon" />
              <p>Nuxt.js</p>
            </div>
            <div class="common-class">
              <IconsAngular class="icon" />
              <p>Angular</p>
            </div>
            <div class="common-class">
              <IconsNest class="icon" />
              <p>Nest</p>
            </div>
            <div class="common-class">
              <IconsPython class="icon" />
              <p>Python</p>
            </div>
            <!-- <div class="common-class">
              <IconsKaliLinux class="icon" />
              <p>Kali Linux</p>
            </div>
            <div class="common-class">
              <IconsBurpSuite class="icon" />
              <p>BurpSuite</p>
            </div>
            <div class="common-class">
              <IconsWireShark class="icon" />
              <p>Wireshark</p>
            </div> -->
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
import IconsAngular from "@/components/icons/Angular.vue";
import IconsNest from "@/components/icons/Nest.vue";
// import IconsKaliLinux from "@/components/icons/KaliLinux.vue";
// import IconsBurpSuite from "@/components/icons/BurpSuite.vue";
// import IconsWireShark from "@/components/icons/Wireshark.vue";
import IconsPHP from "@/components/icons/Php.vue";
</script>

<style lang="scss">
.skills-content {
  &__data {
    @apply pt-5 md:pt-10;
    .skill-data {
      @apply space-y-5 md:space-y-8;
      .common-class {
        @apply text-center bg-gray-900 flex flex-col items-center justify-center py-4 lg:py-10 rounded-lg hover:border hover:border-white;
        .icon {
          @apply mx-auto h-10 w-10 mb-2 md:h-20 md:w-20;
        }
        p {
          @apply font-bold lg:text-lg;
        }
      }
    }
  }
}
</style>

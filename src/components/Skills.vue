<template>
  <div class="container">
    <div class="skills">
      <div class="skills-content">
        <div class="content-header">
          <h2>Skills</h2>
        </div>
        <div class="skills-content__data">
          <div class="skill-data">
            <div class="flex flex-col items-start justify-between md:flex-row">
              <h4 class="font-bold text-xl pb-4 md:text-2xl">Technical</h4>
              <div class="grid grid-cols-4 gap-3 md:grid-cols-3">
                <div class="text-center">
                  <p class="pt-2 md:text-lg">HTML</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import skillsData from "@/data/skills/data.json";
// import { onMounted, ref } from "vue";

// let skills = ref([]);

// onMounted(() => {
//   skills.value = skillsData;
// });
</script>

<style lang="scss">
.skills-content {
  &__data {
    @apply pt-5 md:pt-10;
    .skill-data {
      @apply space-y-5 md:space-y-8;
      svg {
        @apply mx-auto;
      }
    }
  }
}
</style>

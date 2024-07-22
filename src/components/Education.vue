<template>
  <div class="container">
    <div class="education">
      <div class="education-content">
        <div class="content-header">
          <h2>Education</h2>
        </div>
        <div class="education-cards">
          <!-- Cards -->
          <div class="cards-content">
            <div
              v-for="edu in educationDetails"
              :key="edu.id"
              class="card--data"
            >
              <div class="flex items-center justify-between gap-2 md:mb-1">
                <p class="font-bold md:text-xl">{{ edu.institute }}</p>
                <span
                  class="text-right font-bold text-gray-300 whitespace-nowrap text-sm md:text-base"
                >
                  {{
                    edu.percentage ? edu.percentage + " %" : edu.cgpa + " CGPA"
                  }}
                </span>
              </div>
              <div class="flex items-center justify-between">
                <p class="text-gray-400 text-sm">{{ edu.qualification }}</p>
                <p
                  class="text-sm text-right font-bold text-gray-400 whitespace-nowrap"
                >
                  {{ edu.from }} - {{ edu.to }}
                </p>
              </div>
              <!-- <ul v-if="edu.content" class="py-2 text-sm md:text-lg">
                <li
                  v-for="data in edu.content"
                  :key="data"
                  class="list-disc ml-4"
                >
                  {{ data }}
                </li>
              </ul> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import eduData from "@/data/education/data.json";

import { onMounted, ref } from "vue";

let educationDetails = ref([]);

onMounted(() => {
  console.log("eduData: ", eduData);
  educationDetails.value = eduData;
});
</script>

<style lang="scss">
.education-cards {
  @apply pt-4 md:pt-10;
  .cards {
    &-content {
      @apply grid gap-6;
    }
  }
  .card {
    &--data {
      @apply bg-black text-white;
    }
  }
}
</style>

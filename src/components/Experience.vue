<template>
  <div class="experience">
    <div class="experience-content">
      <div class="content-header">
        <h2>Experience</h2>
      </div>
      <div class="experience-cards">
        <div class="cards-content">
          <template v-for="exp in experienceDetails" :key="exp.id">
            <div class="card" v-if="exp.show">
              <div class="card-top">
                <h4>
                  {{ exp.role }}
                  <span>
                    {{ "- " + exp.company_name + ", " + exp.location }}
                  </span>
                </h4>
                <p>
                  {{
                    exp.start_date.toUpperCase() +
                    " - " +
                    (exp.end_date ? exp.end_date.toUpperCase() : "PRESENT")
                  }}
                </p>
              </div>
              <ul class="card-mid">
                <li v-for="desc in exp.description" :key="desc">
                  {{ desc }}
                </li>
              </ul>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import expData from "@/data/experience/data.json";

import { onMounted, ref } from "vue";

let experienceDetails = ref([]);

onMounted(() => {
  experienceDetails.value = expData;
});
</script>

<style lang="scss">
.experience-cards {
  @apply pt-4 lg:pt-10;
  .cards-content {
    @apply space-y-6;
    .card {
      @apply pt-5 bg-gray-900 rounded-md p-6;
      &-top {
        @apply lg:flex lg:items-center lg:justify-between;
        h4 {
          @apply font-bold text-lg lg:text-2xl;
          span {
            @apply text-base text-gray-400;
          }
        }
        p {
          @apply my-1 text-xs font-bold text-white bg-gray-700 py-1 px-1.5 rounded w-fit;
        }
      }
      &-mid {
        @apply text-sm py-2 lg:text-base;
        li {
          @apply list-disc ml-4;
        }
      }
    }
  }
}
</style>

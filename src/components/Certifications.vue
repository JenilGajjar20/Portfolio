<template>
  <div class="certificates">
    <div class="certificates-content">
      <div class="content-header">
        <h2>Certifications</h2>
      </div>
      <div class="certificates-data">
        <div
          class="certificate"
          v-for="certificate in certificates"
          :key="certificate.id"
        >
          <div class="image flex flex-col gap-5">
            <img
              :src="`/images/certi/${certificate.image}.png`"
              :alt="certificate.title"
              class="rounded h-56 lg:h-80"
            />
            <div class="">
              <div class="flex flex-col">
                <h4 class="font-bold text-xl md:text-2xl">
                  {{ certificate.title }}
                </h4>
                <span class="text-base text-blue-500 font-medium">
                  {{ certificate.platform.toUpperCase() }}
                </span>
              </div>
              <ul class="block mb-3">
                <li
                  v-for="desc in certificate.description"
                  :key="desc"
                  class="flex gap-2"
                >
                  <IconsMdiCheck class="text-green-500 text-lg" />
                  {{ desc }}
                </li>
              </ul>
              <div class="flex items-center gap-2">
                <IconsMdiCalender />
                <p class="flex flex-col">
                  <span class="text-xs text-gray-400"> Issued on </span>
                  <span class="text-sm whitespace-nowrap font-bold h-fit">
                    {{
                      certificate.month +
                      " " +
                      certificate.date +
                      ", " +
                      certificate.year
                    }}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import certificatesData from "@/data/certificates/data.json";
import IconsMdiCalender from "@/components/icons/MdiCalender.vue";
import IconsMdiCheck from "@/components/icons/MdiCheck.vue";
import { onMounted, ref } from "vue";

const certificates = ref([]);

onMounted(() => {
  certificates.value = certificatesData;
});
</script>

<style lang="scss">
.certificates-data {
  @apply grid gap-3 pt-5 md:gap-8 md:grid-cols-2 md:pt-10;
  .certificate {
    @apply border border-gray-700 p-6 lg:p-10 rounded-md hover:bg-gray-900;
    .image {
      img {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transition: 0.3s ease-in-out;
        transition: 0.3s ease-in-out;
      }
      &:hover {
        img {
          -webkit-transform: scale(1.05);
          transform: scale(1.05);
        }
      }
    }
    ul {
      @apply mt-4;
    }
  }
}
</style>

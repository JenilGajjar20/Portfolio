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
          <div class="md:flex md:items-start md:gap-5">
            <img
              :src="`/images/certi/${certificate.image}.png`"
              :alt="certificate.title"
              class="rounded md:w-64"
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
              <ul class="hidden lg:block mb-3">
                <li
                  v-for="desc in certificate.description"
                  :key="desc"
                  class="flex items-center gap-2"
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
          <ul class="lg:hidden">
            <li
              v-for="desc in certificate.description"
              :key="desc"
              class="list-disc ml-4"
            >
              {{ desc }}
            </li>
          </ul>
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
  @apply pt-5 md:pt-10 space-y-5 md:space-y-8;
  .certificate {
    @apply bg-gray-900 p-6 rounded-md;
    ul {
      @apply mt-4;
    }
  }
}
</style>

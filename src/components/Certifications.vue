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
              <h4 class="font-bold text-xl my-3 md:text-2xl">
                {{ certificate.title }},
                <span class="text-base text-gray-500 font-bold">{{
                  certificate.platform.toUpperCase()
                }}</span>
              </h4>
              <ul class="hidden lg:block mb-3">
                <li
                  v-for="desc in certificate.description"
                  :key="desc"
                  class="list-disc ml-4"
                >
                  {{ desc }}
                </li>
              </ul>
              <p class="flex items-center gap-2">
                <IconsMdiCalender />
                Issued on
                <span
                  class="py-1 px-1.5 rounded bg-gray-700 whitespace-nowrap text-xs text-white font-bold h-fit"
                >
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

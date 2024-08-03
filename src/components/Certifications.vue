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
          <div class="flex md:items-center justify-between">
            <h4 class="font-bold text-xl md:text-2xl">
              {{ certificate.title }},
              <span class="font-normal text-base md:text-xl">
                {{ certificate.platform }}
              </span>
            </h4>
            <p class="whitespace-nowrap text-sm text-gray-400 md:text-base">
              {{ certificate.month + " " + certificate.year }}
            </p>
          </div>
          <ul>
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
    ul {
      @apply mt-4;
    }
  }
}
</style>

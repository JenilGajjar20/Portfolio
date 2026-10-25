<template>
  <section class="certificates" id="certifications">
    <div class="certificates-content" v-reveal>
      <div class="content-header">
        <h2>Certifications</h2>
      </div>
      <div class="certificates-data">
        <div
          class="certificate"
          v-for="certificate in certificates"
          :key="certificate.id"
          v-reveal
        >
          <div class="image flex flex-col gap-5">
            <img
              :src="`/images/certi/${certificate.image}.png`"
              :alt="certificate.title"
              class="rounded h-56 lg:h-80"
            />
            <div class="">
              <div class="flex flex-col">
                <h4 class="font-bold text-xl whitespace-normal md:text-2xl">
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
                  <p class="whitespace-normal">{{ desc }}</p>
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
  </section>
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
  @apply overflow-auto whitespace-nowrap md:gap-8 md:grid-cols-2;
  padding-bottom: 0.75rem;

  .certificate {
    @apply inline-block w-full mr-6 mb-5 p-6 md:w-2/5 xl:w-1/2 lg:p-8;
    vertical-align: top;
    white-space: normal;
    border: 1px solid var(--line);
    border-radius: 1.15rem;
    background:
      linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.025)),
      rgba(8, 13, 27, 0.72);
    box-shadow: 0 18px 70px rgba(0, 0, 0, 0.28);
    backdrop-filter: blur(18px);
    transition:
      transform 240ms ease,
      border-color 240ms ease,
      box-shadow 240ms ease;

    &:hover {
      border-color: var(--line-strong);
      transform: translateY(-7px);
      box-shadow:
        0 24px 84px rgba(0, 0, 0, 0.34),
        0 0 32px rgba(255, 101, 179, 0.14);
    }

    .image {
      img {
        width: 100%;
        object-fit: cover;
        border: 1px solid var(--line);
        border-radius: 0.9rem;
        box-shadow: 0 14px 42px rgba(0, 0, 0, 0.28);
        transform: scale(1);
        transition: transform 0.3s ease-in-out;
      }
      &:hover {
        img {
          transform: scale(1.05);
        }
      }
    }

    h4 {
      color: var(--text-main);
    }

    span.text-blue-500 {
      color: var(--cyan);
    }

    p {
      color: var(--text-soft);
    }

    ul {
      @apply mt-4;

      svg {
        color: var(--lime);
      }
    }
  }
}
</style>

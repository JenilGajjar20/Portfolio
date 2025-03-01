<template>
  <div class="experience">
    <div class="experience-content">
      <div class="content-header">
        <h2 class="text-4xl font-bold mb-6">Experience</h2>
      </div>
      <div class="experience-cards">
        <div class="experience-cards__content">
          <template
            v-for="(companyGroup, index) in groupedExperiences"
            :key="index"
          >
            <div class="company-logo">
              <div class="relative">
                <div
                  class="company-name"
                  :class="{
                    'show-company-name':
                      showCompanyName === companyGroup[0].company_name,
                  }"
                >
                  {{ companyGroup[0].company_name }}
                </div>
                <img
                  :src="getCompanyLogo(companyGroup[0].company_name)"
                  :alt="companyGroup[0].company_name + ' logo'"
                  class="company-logo-img"
                  @mouseenter="showCompanyName = companyGroup[0].company_name"
                  @mouseleave="showCompanyName = null"
                />
              </div>
            </div>

            <div class="company-experiences">
              <template v-for="exp in companyGroup" :key="exp.id">
                <div class="card" v-if="exp.show">
                  <div class="card-top">
                    <div>
                      <h4 class="role-title">
                        {{ exp.role }}
                        <div class="verification-icon" v-if="exp.current">
                          ✓
                        </div>
                      </h4>
                      <p class="company-subtitle">
                        {{
                          exp.start_date +
                          " - " +
                          (exp.end_date ? exp.end_date : "Present")
                        }}
                        <span class="duration">{{
                          calculateDuration(exp.start_date, exp.end_date)
                        }}</span>
                        • {{ exp.location }}
                        <span>• Full-Time</span>
                      </p>
                    </div>
                  </div>
                  <ul class="card-mid">
                    <li
                      v-for="(desc, descIndex) in exp.description"
                      :key="descIndex"
                    >
                      {{ desc }}
                    </li>
                  </ul>
                </div>
              </template>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import expData from "@/data/experience/data.json";

let experienceDetails = ref([]);
let showCompanyName = ref(null);

const groupedExperiences = computed(() => {
  const sorted = [...experienceDetails.value].sort((a, b) => {
    const dateA = new Date(a.start_date);
    const dateB = new Date(b.start_date);
    return dateB - dateA;
  });

  const groupedByCompany = {};
  sorted.forEach((exp) => {
    if (exp.show !== false) {
      if (!groupedByCompany[exp.company_name]) {
        groupedByCompany[exp.company_name] = [];
      }
      groupedByCompany[exp.company_name].push(exp);
    }
  });

  return Object.values(groupedByCompany);
});

const calculateDuration = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  const yearDiff = end.getFullYear() - start.getFullYear();
  const monthDiff = end.getMonth() - start.getMonth();

  let totalMonths = yearDiff * 12 + monthDiff;
  if (end.getDate() < start.getDate()) {
    totalMonths--;
  }

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  let result = "";
  if (years > 0) {
    result += `${years} yr`;
    if (years > 1) result += "s";
  }

  if (months > 0) {
    if (result) result += ", ";
    result += `${months} m`;
  }

  return `(${result})`;
};

const getCompanyLogo = (companyName) => {
  const logoMap = {
    "7Span Internet Private Limited": "/images/7Span.png",
    "Rejig Digital": "/images/rejig-digital.png",
  };

  return logoMap[companyName] || "/assets/logos/default-logo.svg";
};

onMounted(() => {
  experienceDetails.value = expData;
});
</script>

<style lang="scss">
.experience-cards {
  @apply pt-4 lg:pt-10;

  &__content {
    @apply relative pl-16;

    &:before {
      @apply content-[''] absolute bg-gray-600 h-full w-0.5 rounded left-6 top-6 bottom-0;
    }
  }

  .company-logo {
    @apply absolute left-0 z-10 mt-0.5;

    .company-name {
      @apply absolute bg-gray-800 text-white rounded-md px-3 py-2 text-sm font-medium left-1/2 mb-2 opacity-0 whitespace-nowrap pointer-events-none;
      transform: translateX(-50%) translateY(-100%) scale(0.8);
      visibility: hidden;
      transition: all 0.2s ease;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

      &.show-company-name {
        opacity: 1;
        visibility: visible;
        transform: translateX(-50%) translateY(-100%) scale(1);
      }
    }

    &-img {
      @apply w-12 h-12 object-cover rounded-full bg-white;
      box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2);
    }
  }

  .company-experiences {
    @apply mb-10 relative;

    &:before {
      @apply content-[''] absolute bg-gray-600 h-full w-0.5 rounded top-6 bottom-0 -left-11 hidden;
    }
  }

  .card {
    @apply mb-6 relative;

    &:before {
      @apply content-[''] absolute bg-white w-2.5 h-2.5 rounded-full -left-11 top-2.5;
      box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2);
    }

    &-top {
      @apply mb-3;

      .role-title {
        @apply font-bold text-xl flex items-center gap-2;

        .verification-icon {
          @apply text-white bg-green-700 rounded-full w-5 h-5 flex items-center justify-center text-sm;
        }
      }

      .company-subtitle {
        @apply text-sm text-gray-400 mt-1 font-medium;

        .duration {
          @apply text-gray-500;
        }
      }
    }

    &-mid {
      @apply text-sm text-gray-300 space-y-2;

      li {
        @apply relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-gray-500;
      }
    }
  }
}
</style>

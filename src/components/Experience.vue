<template>
  <section class="experience" id="experience">
    <div class="experience-content" v-reveal>
      <div class="content-header">
        <h2>Experience</h2>
      </div>
      <div class="experience-cards">
        <div class="experience-cards__content">
          <template
            v-for="(companyGroup, index) in groupedExperiences"
            :key="index"
          >
            <div class="company-logo">
              <div class="relative">
                <img
                  :src="getCompanyLogo(companyGroup[0].company_name)"
                  :alt="companyGroup[0].company_name + ' logo'"
                  class="company-logo-img"
                />
              </div>
            </div>

            <div class="company-experiences">
              <h3 class="experience-company-heading">{{ companyGroup[0].company_name }}</h3>
              <template v-for="exp in companyGroup" :key="exp.id">
                <article class="card" v-if="exp.show" v-reveal>
                  <div class="card-top">
                    <div>
                      <h4 class="role-title">
                        {{ exp.role }}
                        <div class="verification-icon" v-if="exp.current">
                          &#10003;
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
                        &bull; {{ exp.location }}
                        <span>&bull; Full-Time</span>
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
                </article>
              </template>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import expData from "@/data/experience/data.json";

let experienceDetails = ref([]);

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
  @apply pt-2;

  &__content {
    @apply relative pl-16;

    &:before {
      @apply content-[''] absolute h-full w-0.5 rounded left-6 top-6 bottom-0;
      background: linear-gradient(180deg, var(--cyan), rgba(167, 139, 250, 0.5), var(--rose));
      box-shadow: 0 0 24px rgba(96, 247, 255, 0.28);
    }
  }

  .company-logo {
    @apply absolute left-0 z-10 mt-0.5;

    &-img {
      @apply w-12 h-12 object-cover rounded-full bg-white;
      border: 2px solid rgba(255, 255, 255, 0.75);
      box-shadow:
        0 0 0 5px rgba(96, 247, 255, 0.1),
        0 0 30px rgba(96, 247, 255, 0.24);
    }
  }

  .company-experiences {
    @apply mb-10 relative;
    display: grid;
    gap: 1rem;
  }

  .card {
    @apply mb-6 relative;
    width: 100%;
    border: 1px solid var(--line);
    border-radius: 1rem;
    padding: clamp(1.1rem, 3vw, 1.5rem);
    background:
      linear-gradient(145deg, rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.02)),
      rgba(8, 13, 27, 0.68);
    backdrop-filter: blur(18px);
    transition:
      transform 220ms ease,
      border-color 220ms ease,
      box-shadow 220ms ease;

    &:hover {
      border-color: var(--line-strong);
      transform: translateX(6px);
      box-shadow: var(--shadow-glow);
    }

    &:before {
      @apply content-[''] absolute w-2.5 h-2.5 rounded-full -left-11 top-7;
      background: var(--cyan);
      box-shadow:
        0 0 0 5px rgba(96, 247, 255, 0.12),
        0 0 22px rgba(96, 247, 255, 0.52);
    }

    &-top {
      @apply mb-3;

      .role-title {
        @apply font-bold text-xl flex items-center gap-2;
        color: var(--text-main);

        .verification-icon {
          @apply rounded-full w-5 h-5 flex items-center justify-center text-sm;
          color: #061017;
          background: var(--lime);
          box-shadow: 0 0 18px rgba(183, 255, 90, 0.35);
        }
      }

      .company-subtitle {
        @apply text-sm mt-1 font-medium;
        color: var(--text-muted);
        font-family: "Courier New", Courier, monospace;

        .duration {
          color: var(--text-soft);
        }
      }
    }

    &-mid {
      @apply text-sm space-y-2 md:text-base;
      color: var(--text-soft);
      border-top: 1px solid var(--line);
      padding-top: 1rem;

      li {
        @apply relative pl-5 before:content-[''] before:absolute before:left-0;

        &::before {
          top: 0.7em;
          width: 0.38rem;
          height: 0.38rem;
          border-radius: 999px;
          background: var(--rose);
          box-shadow: 0 0 12px rgba(255, 101, 179, 0.45);
        }
      }
    }
  }
}

@media (max-width: 640px) {
  .experience-cards {
    &__content {
      padding-left: 2.75rem;

      &::before {
        left: 1rem;
      }
    }

    .company-logo {
      left: -0.5rem;
    }

    .card::before {
      left: -2rem;
    }

    .card {
      width: 100%;
      margin-left: 0;
      border-radius: 1rem;

      &::before {
        left: -2rem;
      }
    }
  }
}
</style>

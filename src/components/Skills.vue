<template>
  <section class="skills" id="skills">
    <div class="skills-content" v-reveal>
      <div class="content-header">
        <h2>Skills</h2>
      </div>
      <div class="skills-content__data">
        <div class="skill-data">
          <div class="skills-matrix">
            <div
              v-for="(skill, index) in skills"
              :key="skill.name"
              class="common-class"
              v-reveal="`${index * 45}ms`"
            >
              <component :is="skill.icon" class="icon" />
              <p>{{ skill.name }}</p>
              <span>{{ skill.type }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import IconsHtml from "@/components/icons/Html.vue";
import IconsCSS from "@/components/icons/CSS.vue";
import IconsTailwind from "@/components/icons/Tailwind.vue";
import IconsJS from "@/components/icons/JS.vue";
import IconsVue from "@/components/icons/Vue.vue";
import IconsNuxt from "@/components/icons/Nuxt.vue";
import IconsPython from "@/components/icons/Python.vue";
import IconsAngular from "@/components/icons/Angular.vue";
import IconsNest from "@/components/icons/Nest.vue";
import IconsPHP from "@/components/icons/Php.vue";

const skills = [
  { name: "HTML", type: "Markup", icon: IconsHtml },
  { name: "CSS", type: "Styling", icon: IconsCSS },
  { name: "Tailwind CSS", type: "UI Systems", icon: IconsTailwind },
  { name: "JavaScript", type: "Frontend", icon: IconsJS },
  { name: "PHP", type: "Backend", icon: IconsPHP },
  { name: "Vue.js", type: "Framework", icon: IconsVue },
  { name: "Nuxt.js", type: "Meta Framework", icon: IconsNuxt },
  { name: "Angular", type: "Dashboard UI", icon: IconsAngular },
  { name: "Nest", type: "API Layer", icon: IconsNest },
  { name: "Python", type: "Automation", icon: IconsPython },
];
</script>

<style lang="scss">
.skills-content {
  &__data {
    .skill-data {
      @apply space-y-5 md:space-y-8;

      .skills-matrix {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: clamp(0.85rem, 2vw, 1.25rem);
        align-items: stretch;
      }

      .common-class {
        @apply text-center flex flex-col items-center justify-center;
        position: relative;
        min-height: 10.5rem;
        overflow: hidden;
        border: 1px solid var(--line);
        border-radius: 1rem 0.25rem 1rem 0.25rem;
        padding: 1.3rem 1rem;
        background:
          linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02)),
          rgba(7, 12, 25, 0.7);
        box-shadow: 0 16px 56px rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(18px);
        transition:
          transform 240ms ease,
          border-color 240ms ease,
          box-shadow 240ms ease;

        &:nth-child(1),
        &:nth-child(6) {
          grid-column: span 2;
          min-height: 11rem;
        }

        &:nth-child(4),
        &:nth-child(10) {
          transform: translateX(0.65rem);
        }

        &::before {
          content: "";
          position: absolute;
          inset: auto 12% 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--cyan), var(--rose), transparent);
          opacity: 0.75;
          transform: scaleX(0.25);
          transition: transform 240ms ease;
        }

        &::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, transparent 49%, rgba(96, 247, 255, 0.11) 50%, transparent 51%),
            linear-gradient(0deg, transparent 49%, rgba(96, 247, 255, 0.08) 50%, transparent 51%);
          background-size: 2rem 2rem;
          opacity: 0.28;
          mask-image: radial-gradient(circle, black, transparent 70%);
          pointer-events: none;
        }

        &:hover {
          border-color: var(--line-strong);
          transform: translateY(-8px) scale(1.02);
          box-shadow:
            0 24px 80px rgba(0, 0, 0, 0.35),
            0 0 30px rgba(96, 247, 255, 0.16);
          transform: translateY(-8px) scale(1.02);

          &::before {
            transform: scaleX(1);
          }

          .icon {
            transform: translateY(-6px) rotate(-4deg) scale(1.08);
            filter: drop-shadow(0 0 18px rgba(96, 247, 255, 0.34));
          }
        }

        .icon {
          @apply mx-auto h-10 w-10 mb-3 md:h-16 md:w-16;
          z-index: 1;
          transition:
            transform 260ms ease,
            filter 260ms ease;
        }
        p {
          @apply font-bold lg:text-lg;
          z-index: 1;
          color: var(--text-main);
        }

        span {
          z-index: 1;
          margin-top: 0.25rem;
          color: var(--text-muted);
          font-size: 0.76rem;
          font-weight: 700;
          text-transform: uppercase;
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  .skills-content__data .skill-data .skills-matrix {
    grid-template-columns: repeat(3, minmax(0, 1fr));

    .common-class:nth-child(1),
    .common-class:nth-child(6) {
      grid-column: span 1;
      min-height: 10.5rem;
    }

    .common-class:nth-child(4),
    .common-class:nth-child(10) {
      transform: none;
    }
  }
}

@media (max-width: 640px) {
  .skills-content__data .skill-data .skills-matrix {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>

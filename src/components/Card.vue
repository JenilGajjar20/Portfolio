<template>
  <div v-if="!item?.show" class="cards" v-reveal>
    <div class="cards-content">
      <div v-if="item?.image" class="card--image">
        <img :src="`/images/projects/${item?.image}.png`" :alt="item.title" />
      </div>
      <div class="card--data">
        <div class="card--top">
          <p
            class="card--top_badge"
            :class="{
              'text-blue-700': item?.category === 'linux',
              'text-purple-700': item?.tech === 'php',
              'text-blue-500': item?.tech === 'python',
              'text-blue-600': item?.tech === 'react',
              'text-yellow-500': item?.tech === 'javascript',
              'text-green-500': item?.tech === 'vue' || item?.tech === 'nuxt',
              'text-green-800': item?.tech === 'node',
            }"
          >
            <span>{{ item?.category ? item.category : item.tech }}</span>
          </p>
          <div class="card--top_icon">
            <button
              v-if="item.projects"
              class="card-icon-btn"
              aria-label="Open project details"
              @click="emit('openModal', item)"
            >
              <IconsMdiModal />
            </button>
            <a :href="item.link" target="_blank" class="card-icon-btn">
              <IconsMdiArrowTopRight />
            </a>
          </div>
        </div>

        <div class="card--bottom">
          <h6>{{ item.title }}</h6>
          <div v-if="item.description" class="card--desc">
            <p v-html="item.description" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconsMdiModal from "@/components/icons/Modal.vue";
import IconsMdiArrowTopRight from "@/components/icons/MdiArrowTopRight.vue";

defineProps(["item"]);
const emit = defineEmits(["openModal"]);
</script>

<style lang="scss">
.projects--lists {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: clamp(1rem, 2vw, 1.5rem);
  counter-reset: project-card;

  .cards {
    counter-increment: project-card;
    grid-column: span 4;

    &:nth-child(1),
    &:nth-child(8) {
      grid-column: span 8;
    }

    &:nth-child(3),
    &:nth-child(4) {
      grid-column: span 6;
    }

    &-content {
      @apply relative;
      display: grid;
      grid-template-rows: auto 1fr;
      min-height: 100%;
      overflow: hidden;
      border: 1px solid var(--line);
      border-radius: 1.1rem;
      background:
        linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.025)),
        var(--bg-panel);
      box-shadow: 0 18px 70px rgba(0, 0, 0, 0.28);
      backdrop-filter: blur(18px);
      transform-style: preserve-3d;
      transition:
        transform 260ms ease,
        border-color 260ms ease,
        box-shadow 260ms ease;

      &::before {
        content: "";
        position: absolute;
        inset: 0;
        background:
          linear-gradient(120deg, transparent, rgba(96, 247, 255, 0.14), transparent 42%),
          linear-gradient(300deg, transparent, rgba(255, 101, 179, 0.12), transparent 52%);
        opacity: 0;
        transition: opacity 260ms ease;
        pointer-events: none;
      }

      &::after {
        content: counter(project-card, decimal-leading-zero);
        position: absolute;
        right: 1rem;
        bottom: 0.5rem;
        color: rgba(255, 255, 255, 0.045);
        font-family: "Courier New", Courier, monospace;
        font-size: clamp(3.5rem, 8vw, 6.2rem);
        font-weight: 900;
        line-height: 1;
        pointer-events: none;
      }

      &:hover {
        border-color: var(--line-strong);
        transform: translateY(-6px);
        box-shadow:
          0 24px 90px rgba(0, 0, 0, 0.42),
          0 0 38px rgba(96, 247, 255, 0.16);

        &::before {
          opacity: 1;
        }
      }
    }
  }
  .card {
    &--image {
      padding: 1.25rem;
      border-bottom: 1px solid var(--line);
      img {
        @apply h-40 mx-auto aspect-square object-cover w-full;
        border-radius: 0.9rem;
        box-shadow: 0 0 28px rgba(96, 247, 255, 0.15);
        transition:
          transform 360ms ease,
          filter 360ms ease;
      }

      &:hover img {
        transform: scale(1.05);
        filter: saturate(1.12);
      }
    }
    &--data {
      @apply p-5;
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      min-height: 15rem;
    }
    &--top {
      @apply flex items-center justify-between gap-3;
      &_badge {
        border: 1px solid var(--line);
        border-radius: 999px;
        padding: 0.35rem 0.7rem;
        background: rgba(255, 255, 255, 0.045);
        span {
          @apply font-bold text-xs uppercase;
          color: currentColor;
        }
      }
      &_icon {
        @apply flex items-center gap-3;
      }
    }

    &--bottom {
      @apply py-4;
      margin-top: auto;
      h6 {
        @apply text-lg md:text-xl font-bold pb-4;
        color: var(--text-main);
        max-width: 82%;
      }
    }
    &--desc {
      p {
        color: var(--text-soft);
        line-height: 1.7;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  }

  .card-icon-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.25rem;
    height: 2.25rem;
    color: var(--text-main);
    border: 1px solid var(--line);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.055);
    transition:
      transform 180ms ease,
      color 180ms ease,
      border-color 180ms ease,
      box-shadow 180ms ease;

    svg {
      width: 1.12rem;
      height: 1.12rem;
    }

    &:hover {
      color: var(--cyan);
      border-color: var(--line-strong);
      transform: translateY(-2px);
      box-shadow: var(--shadow-glow);
    }
  }
}

@media (max-width: 640px) {
  .projects--lists {
    grid-template-columns: 1fr;

    .cards,
    .cards:nth-child(1),
    .cards:nth-child(3),
    .cards:nth-child(4),
    .cards:nth-child(8) {
      grid-column: span 1;
    }

    .card--data {
      min-height: 14rem;
    }
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  .projects--lists {
    grid-template-columns: repeat(2, minmax(0, 1fr));

    .cards,
    .cards:nth-child(1),
    .cards:nth-child(3),
    .cards:nth-child(4),
    .cards:nth-child(8) {
      grid-column: span 1;
    }
  }
}
</style>

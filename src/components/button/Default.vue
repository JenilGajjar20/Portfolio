<template>
  <button class="button group">
    <p>{{ $attrs.text }}</p>
    <IconsMdiArrowTopRight
      v-if="icon"
      class="duration-100 group-hover:-translate-y-1 group-hover:translate-x-1"
    />

    <IconsMdiLoading v-if="isLoading" class="animate-spin ml-2" />
  </button>
</template>

<script setup>
defineProps({
  icon: {
    type: Boolean,
    default: false,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
});
import IconsMdiArrowTopRight from "@/components/icons/MdiArrowTopRight.vue";
import IconsMdiLoading from "@/components/icons/MdiLoading.vue";
</script>

<style lang="scss" scoped>
.button {
  @apply px-5 py-3 duration-200 font-bold flex items-center gap-2 md:px-6;
  position: relative;
  justify-content: center;
  overflow: hidden;
  border-radius: 999px;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.18), transparent);
    transform: translateX(-120%);
    transition: transform 420ms ease;
  }

  &:hover::before {
    transform: translateX(120%);
  }

  p,
  svg {
    position: relative;
  }

  &--outline {
    color: var(--cyan);
    border: 1px solid var(--line-strong);
    background: rgba(255, 255, 255, 0.04);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);

    &:hover {
      color: #031018;
      border-color: transparent;
      background: linear-gradient(135deg, var(--cyan), var(--lime));
      box-shadow: 0 0 32px rgba(96, 247, 255, 0.26);
      transform: translateY(-2px);
    }
  }
}
</style>

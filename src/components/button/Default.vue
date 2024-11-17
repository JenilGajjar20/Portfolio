<template>
  <button class="button group">
    <p>{{ $attrs.text }}</p>
    <IconsMdiArrowTopRight
      v-if="icon"
      class="duration-100 group-hover:-translate-y-1 group-hover:translate-x-1"
    />
  </button>
</template>

<script setup>
defineProps({
  icon: {
    type: Boolean,
    default: false,
  },
});
import IconsMdiArrowTopRight from "@/components/icons/MdiArrowTopRight.vue";
</script>

<style lang="scss" scoped>
.button {
  @apply px-8 py-2 duration-200 font-bold flex items-center gap-2;
  &--outline {
    @apply border-2 border-white;
    &:hover {
      @apply text-bright_yellow border-bright_yellow;
    }
  }
}
</style>

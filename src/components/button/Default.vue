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
  @apply px-5 py-2 duration-200 font-bold flex items-center gap-2 md:px-6;
  &--outline {
    @apply border-2 rounded text-yellow-500 border-yellow-500;
    &:hover {
      @apply text-bright_yellow border-bright_yellow;
    }
  }
}
</style>

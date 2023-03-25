<template>
  <button class="button">{{ $attrs.text }}</button>
  <!-- <Icon :name="$attrs.icon" /> -->
</template>

<script setup>
// import Icon from "@/components/Icon.vue";
</script>

<style lang="scss" scoped>
.button {
  @apply px-8 py-2 duration-200 font-bold;
  &--outline {
    @apply border-2 border-white;
    &:hover {
      @apply bg-white text-grey;
    }
  }
}
</style>

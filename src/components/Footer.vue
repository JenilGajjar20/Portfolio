<template>
  <div class="container pt-10 md:pt-24">
    <div class="footer-section">
      <p>Follow me:</p>
      <div class="">
        <div v-for="link in links" :key="link.id">
          <a :href="link.path" target="_blank">{{ link.label }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const links = [
  {
    id: "1",
    label: "LinkedIn",
    path: "",
  },
  {
    id: "2",
    label: "Twitter",
    path: "",
  },
  {
    id: "3",
    label: "GitHub",
    path: "",
  },
  {
    id: "4",
    label: "Medium",
    path: "",
  },
  {
    id: "5",
    label: "Hashnode",
    path: "",
  },
];
</script>

<style lang="scss">
.footer-section {
  @apply bg-gray-600 rounded p-5;
}
</style>

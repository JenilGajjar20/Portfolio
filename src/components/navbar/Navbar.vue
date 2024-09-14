<template>
  <div class="navbar-wrapper">
    <div class="navbar-wrapper--content">
      <div class="navbar-content__logo">
        <router-link to="/">
          <img src="/images/jenil.jpg" alt="jenil-gajjar" />
        </router-link>
      </div>
      <div class="navbar-content__items">
        <NavItems />
      </div>
    </div>
  </div>
</template>

<script setup>
import NavItems from "./NavItems.vue";
</script>

<style lang="scss" scoped></style>

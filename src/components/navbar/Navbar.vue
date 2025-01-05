<template>
  <div class="navbar-wrapper">
    <div class="navbar-wrapper--content">
      <div class="navbar-content__logo">
        <router-link to="/" class="navbar-link">
          <!-- <img src="/images/jenil.jpg" alt="jenil-gajjar" /> -->
          Jenil Gajjar
        </router-link>
      </div>
      <div class="navbar-content__items">
        <NavItems />
      </div>
      <!-- <div class="navbar-content__link">
        <RouterLink
          to="/blogs"
          class="hover:border-bright_yellow hover:text-bright_yellow"
        >
          Read Blogs
        </RouterLink>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import NavItems from "./NavItems.vue";
</script>

<style lang="scss" scoped></style>

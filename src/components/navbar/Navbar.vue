<template>
  <div class="navbar-wrapper">
    <div class="navbar-wrapper--content">
      <div class="navbar-content__logo">
        <!-- <a href="/">Jenil Gajjar</a> -->
        <img src="@/assets/images/jenil.jpg" alt="jenil-gajjar" />
      </div>

      <!-- Mobile Navbar -->
      <!-- <div class="navbar-content__menu" @click="toggleMenu">
        <IconMdiMenu class="icon navbar-menu-icon" />
      </div> -->

      <!-- Desktop Navbar -->
      <div class="navbar-content__items">
        <NavItems />
      </div>
    </div>
  </div>

  <!-- Mobile Navbar List Items -->
  <!-- <ListItems :open-menu="openMenu" @close-menu="toggleMenu" /> -->
</template>

<script setup>
// import IconMdiMenu from "@/components/icons/MdiMenu.vue";
import { ref } from "vue";
// import ListItems from "./ListItems.vue";
import NavItems from "./NavItems.vue";

// const openMenu = ref(false);

// const toggleMenu = () => {
//   openMenu.value = !openMenu.value;
// };
</script>

<style lang="scss" scoped></style>

<template>
  <Transition name="slide-fade">
    <div class="list-items" v-if="openMenu">
      <div class="close-icon" @click="$emit('close-menu')">
        <IconMdiClose class="icon navbar-close-icon" />
      </div>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/work">Projects</router-link>
        </li>
        <li>
          <router-link to="/articles">Articles</router-link>
        </li>
      </ul>

      <SocialLinks class-name="navbar" />
    </div>
  </Transition>
</template>

<script setup>
import IconMdiClose from "@/components/icons/MdiClose.vue";
import SocialLinks from "@/components/SocialLinks.vue";

defineProps({
  openMenu: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["close-menu"]);
</script>

<style lang="scss">
.slide-fade-enter-active {
  transition: all 0.1s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>

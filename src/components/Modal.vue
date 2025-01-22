<template>
  <div class="modal-overlay container">
    <div class="modal-content">
      <div class="modal-header">
        <h3>{{ project.modalTitle }}</h3>
        <button @click="$emit('close')" class="modal-btn">
          <IconsMdiClose />
        </button>
      </div>

      <div class="modal-body">
        <div
          class="modal-body--content"
          v-for="pro in project?.projects"
          :key="pro.id"
        >
          <h5>{{ pro.title }}</h5>
          <p>{{ pro.subTitle }}</p>
        </div>
        <!-- <p>{{ project.description }}</p> -->
      </div>

      <div class="modal-footer">
        <a class="modal-footer--link" :href="project.link" target="_blank"
          >View More</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import IconsMdiClose from "@/components/icons/MdiClose.vue";
const props = defineProps(["project"]);
defineEmits(["close"]);
</script>

<style lang="scss">
.modal-overlay {
  @apply fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50;
  .modal-content {
    @apply relative bg-gray-900 rounded-lg text-white w-11/12 max-w-2xl mx-auto;
  }

  .modal-header {
    @apply p-4 font-bold text-xl border-b-2 border-black md:p-6 md:text-2xl;

    .modal-btn {
      @apply absolute top-0 right-6 border-2 border-white bg-gray-900 rounded-full p-1 text-lg -m-9 text-white transition-all duration-200 hover:-rotate-90;
    }
  }

  .modal-body {
    @apply p-4 space-y-4 md:p-6;
    &--content {
      @apply bg-gray-800 rounded-md py-2 px-4;
      h5 {
        @apply mb-1 font-medium text-lg lg:text-xl;
      }
      p {
        @apply text-gray-400;
      }
    }
  }

  .modal-footer {
    @apply p-4 text-right border-t-2 border-black md:p-6;
    &--link {
      @apply border-2 border-gray-800 rounded py-2 px-6 text-sm bg-gray-800 text-white hover:text-gray-800 hover:bg-white md:text-base;
    }
  }
}
</style>

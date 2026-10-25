<template>
  <Teleport to="body">
  <div class="modal-overlay" @click.self="emit('close')">
    <div ref="dialog" class="modal-content" role="dialog" aria-modal="true" aria-labelledby="project-dialog-title" tabindex="-1" @keydown.esc="emit('close')" @keydown.tab="trapFocus">
      <div class="modal-header">
        <h3 id="project-dialog-title">{{ project.modalTitle }}</h3>
        <button @click="emit('close')" class="modal-btn" aria-label="Close project details">
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
  </Teleport>
</template>

<script setup>
import IconsMdiClose from "@/components/icons/MdiClose.vue";
import { onMounted, onBeforeUnmount, ref } from "vue";
defineProps(["project"]);
const emit = defineEmits(["close"]);
const dialog = ref(null);
let previousFocus;
onMounted(() => {
  previousFocus = document.activeElement;
  dialog.value.focus();
});
onBeforeUnmount(() => previousFocus?.focus());
const trapFocus = (event) => {
  const controls = [...dialog.value.querySelectorAll('button, a[href]')];
  const first = controls[0];
  const last = controls[controls.length - 1];
  if (event.shiftKey && (document.activeElement === first || document.activeElement === dialog.value)) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
};
</script>

<style lang="scss">
.modal-overlay {
  @apply fixed inset-0 flex items-center justify-center z-50;
  background: rgba(3, 4, 10, 0.74);
  backdrop-filter: blur(14px);
  z-index: 100;
  padding: 16px;

  .modal-content {
    @apply relative text-white w-11/12 max-w-2xl mx-auto;
    overflow: hidden;
    max-height: calc(100dvh - 32px);
    display: flex;
    flex-direction: column;
    border: 1px solid var(--line-strong);
    border-radius: 1.15rem;
    background:
      linear-gradient(145deg, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.025)),
      var(--bg-panel-strong);
    box-shadow:
      0 30px 120px rgba(0, 0, 0, 0.58),
      0 0 48px rgba(96, 247, 255, 0.16);
    animation: modalIn 220ms ease both;
  }

  .modal-header {
    @apply p-4 font-bold text-xl md:p-6 md:text-2xl;
    border-bottom: 1px solid var(--line);
    padding-right: 72px;
    flex-shrink: 0;

    .modal-btn {
      @apply absolute top-4 right-4 rounded-full p-2 text-lg text-white transition-all duration-200 hover:-rotate-90;
      border: 1px solid var(--line);
      background: rgba(255, 255, 255, 0.06);

      &:hover {
        color: var(--cyan);
        border-color: var(--line-strong);
        box-shadow: var(--shadow-glow);
      }
    }
  }

  .modal-body {
    overflow-y: auto;
    @apply p-4 space-y-4 md:p-6;
    &--content {
      @apply py-3 px-4;
      border: 1px solid var(--line);
      border-radius: 0.85rem;
      background: rgba(255, 255, 255, 0.045);
      h5 {
        @apply mb-1 font-medium text-lg lg:text-xl;
        color: var(--text-main);
      }
      p {
        color: var(--text-soft);
      }
    }
  }

  .modal-footer {
    flex-shrink: 0;
    @apply p-4 text-right md:p-6;
    border-top: 1px solid var(--line);
    &--link {
      @apply py-2 px-6 text-sm md:text-base;
      display: inline-flex;
      border-radius: 999px;
      color: #031018;
      background: linear-gradient(135deg, var(--cyan), var(--lime));

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 0 30px rgba(96, 247, 255, 0.26);
      }
    }
  }
}

@keyframes modalIn {
  from {
    opacity: 0;
    transform: translateY(18px) scale(0.97);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>

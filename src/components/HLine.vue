<template>
  <div class="section-divider" aria-hidden="true">
    <div></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.section-divider {
  padding-block: clamp(3rem, 7vw, 6rem);

  div {
    height: 1px;
    border: 0;
    background:
      linear-gradient(90deg, transparent, rgba(96, 247, 255, 0.5), rgba(255, 101, 179, 0.38), transparent);
    box-shadow: 0 0 22px rgba(96, 247, 255, 0.18);
  }
}
</style>

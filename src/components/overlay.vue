<template>
  <div
    class="
      absolute
      top-0
      left-0
      h-full
      w-full
      bg-blue-darkest bg-opacity-30
      select-none
    "
    @click.self="closeMenu"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  emits: ["close"],
  setup(props, { emit }) {
    const closeMenu = () => {
      emit("close");
    };

    return { closeMenu };
  },
};
</script>

<style>
</style>
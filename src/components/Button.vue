<template>
  <div
    class="
      button-wrapper
      bg-orange
      text-white text-sm
      cursor-pointer
      flex
      justify-center
      items-center
      rounded-xl
      gap-3
    "
  >
    <img v-if="withIcon" class="cart-icon" src="/images/icon-cart.svg" alt="" />
    <h4>{{ title }}</h4>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: ["withIcon", "title"],
};
</script>

<style lang="scss" >
.cart-icon {
  filter: brightness(0) invert(1);
}
</style>

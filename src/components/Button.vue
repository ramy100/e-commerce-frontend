<template>
  <div class="button-wrapper">
    <img v-if="withIcon" class="cart-icon" src="images/icon-cart.svg" alt="" />
    <h4>{{ title }}</h4>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: ["withIcon", "title"],
};
</script>

<style lang="scss" scoped>
.button-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--Orange);
  color: white;
  border-radius: 10px;
  gap: 10px;
  height: 100%;
  cursor: pointer;
}
.cart-icon {
  filter: brightness(0) invert(1);
}
</style>

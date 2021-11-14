<template>
  <div class="cart-wrapper">
    <h2 class="header">Cart</h2>
    <div class="cart-items">
      <cart-item />
    </div>
    <Button class="checkout" title="Checkout" />
  </div>
</template>

<script>
import Button from "./Button.vue";
import CartItem from "./CartItem.vue";
export default {
  components: { Button, CartItem },
  computed: {
    quantity() {
      this.$store.state.quantity;
    },
  },
};
</script>

<style scoped>
.cart-wrapper {
  top: 8rem;
  width: 400px;
  right: 0;
  position: absolute;
  z-index: 1;
  display: flex;
  box-shadow: 0 10px 20px 1px #999999;
  border: none;
  border-radius: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: white;
  gap: 25px;
}

.header {
  align-self: start;
}
.checkout {
  width: 70%;
  height: 40px;
}
</style>
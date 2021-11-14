<template>
  <div class="cart-item-wrapper" v-if="quantity > 0">
    <img class="item-image" src="images/image-product-1-thumbnail.jpg" alt="" />
    <div class="item-desc">
      <div class="name">Fall Limited Edition Sneakers</div>
      <div class="quantity">$125.00 x {{ quantity }}</div>
      <div class="price">${{ finalPrice }}.00</div>
    </div>
    <div class="delete-action">
      <img
        @click="$store.commit('reset')"
        src="images/icon-delete.svg"
        alt=""
      />
    </div>
  </div>
  <div v-else class="empty">Your cart is empty.</div>
</template>

<script>
export default {
  computed: {
    quantity() {
      return this.$store.state.quantity;
    },
    finalPrice() {
      return this.quantity * 125;
    },
  },
};
</script>

<style scoped>
.cart-item-wrapper {
  display: grid;
  position: relative;
  grid-template-columns: 50px 200px 50px;
  align-items: center;
  gap: 10px;
}

.empty {
  padding: 3rem;
  color: var(--Dark-grayish-blue);
}

.name,
.quantity {
  color: var(--Dark-grayish-blue);
}
.name {
  white-space: nowrap;
  width: 170px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.delete-action {
  cursor: pointer;
}

.item-image {
  width: 50px;
}

.item-img {
  width: 50px;
}
</style>
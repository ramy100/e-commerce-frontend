<template>
  <div class="grid grid-flow-col gap-3 items-center" v-if="quantity > 0">
    <img
      class="w-16 rounded-lg"
      src="images/image-product-1-thumbnail.jpg"
      alt=""
    />
    <div class="grid grid-cols-2">
      <div class="text-blue-grayish col-span-full">
        Fall Limited Edition Sneakers
      </div>
      <div class="text-blue-grayish">$125.00 x {{ quantity }}</div>
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
  <div v-else class="text-blue-grayish">Your cart is empty.</div>
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


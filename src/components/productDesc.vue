<template>
  <div class="grid grid-cols-12 auto-rows-min gap-3">
    <h5 class="col-span-full text-orange">sneaker company</h5>
    <h1 class="col-span-full text-3xl capitalize">
      fall limited edition sneakers
    </h1>
    <div class="col-span-full text-blue-grayish">
      These low-profile sneakers are your perfect casuala wear companion.
      Featuring a durable rubber outer sole, they'll withstand every thing the
      weather can offer.
    </div>
    <div class="col-span-3">$125.00</div>
    <div
      class="col-span-2 text-orange bg-orange-light w-12 text-center rounded-lg"
    >
      50%
    </div>
    <div class="md:col-span-full col-start-11 text-blue-grayish line-through">
      $250.00
    </div>
    <div class="md:col-span-5 col-span-full">
      <quantity @setQuantity="setQuantity" />
    </div>
    <div class="md:col-span-7 col-span-full relative h-10">
      <Button
        class="h-full"
        :withIcon="true"
        title="Add to cart"
        @click="addToCart"
      />
    </div>
  </div>
</template>


<script>
import Button from "./Button.vue";
import quantity from "./quantity.vue";
export default {
  components: { quantity, Button },
  data() {
    return {
      quantity: 0,
    };
  },
  methods: {
    setQuantity(x) {
      this.quantity = x;
    },
    addToCart() {
      this.$store.commit("setQuantity", this.quantity);
    },
  },
};
</script>
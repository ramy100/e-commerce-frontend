<template>
  <div class="desc-wrapper">
    <h5 class="company">sneaker company</h5>
    <h1 class="product-name">fall limited edition sneakers</h1>
    <div class="mid-desc">
      These low-profile sneakers are your perfect casuala wear companion.
      Featuring a durable rubber outer sole, they'll withstand every thing the
      weather can offer.
    </div>
    <div class="price">$125.00</div>
    <div class="discount">50%</div>
    <div class="oldprice">$250.00</div>
    <div class="quantinty">
      <quantity @setQuantity="setQuantity" />
    </div>
    <div class="add-to-cart-button" withIcon="true">
      <Button :withIcon="true" title="Add to cart" @click="addToCart" />
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

<style>
.desc-wrapper {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: min-content;
  row-gap: 1rem;
}
.company {
  color: var(--Orange);
  grid-column: 1 / -1;
  grid-row: 1;
  font-size: 20px;
  text-transform: uppercase;
}
.product-name {
  grid-column: 1 / -1;
  grid-row: 2;
  text-transform: capitalize;
}
.mid-desc {
  color: var(--Dark-grayish-blue);
  grid-column: 1 / -1;
  grid-row: 3;
}
.price {
  grid-row: 4;
  grid-column: 1/ 4;
}
.discount {
  grid-row: 4;
  grid-column: 4/ 6;
  background: var(--Orange-light);
  color: var(--Orange);
  font-weight: bolder;
  text-align: center;
  border-radius: 8%;
  width: 40px;
}
.oldprice {
  color: var(--Grayish-blue);
  text-decoration: line-through;
  grid-row: 5;
  grid-column: 1 / -1;
}
.quantinty {
  grid-row: 6;
  grid-column: 1 / 5;
}
.add-to-cart-button {
  grid-row: 6;
  grid-column: 6 / -1;
}
</style>

<template>
  <div className="navBar">
    <ul className="right-links">
      <li>
        <img src="images/logo.svg" alt="" />
      </li>
      <Link class="active">Collections</Link>
      <Link>Men</Link>
      <Link>Women</Link>
      <Link>About</Link>
      <Link>Contact</Link>
      <!-- <Link>{{ $screen.width }}</Link> -->
    </ul>
    <ul className="left-links">
      <li @click="showCart = !showCart">
        <img src="images/icon-cart.svg" alt="" />
        <div v-if="quantity" class="cart-count">{{ quantity }}</div>
      </li>
      <li>
        <img width="50" src="images/image-avatar.png" alt="" />
      </li>
      <Cart v-if="showCart" />
    </ul>
  </div>
</template>
<script lang="ts">
import Link from "./Link.vue";
import Cart from "./Cart.vue";
export default {
  components: { Link, Cart },
  data() {
    return {
      showCart: false,
    };
  },
  computed: {
    quantity() {
      return this.$store.state.quantity;
    },
  },
};
</script>
<style lang="scss" scoped>
li {
  position: relative;
  cursor: pointer;
}
.cart-count {
  position: absolute;
  top: -10px;
  right: 15px;
  background-color: var(--Orange);
  padding-left: 10px;
  padding-right: 10px;
  color: white;
  border-radius: 60px;
  font-size: 12px;
}
.navBar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.right-links {
  display: grid;
  grid-template-columns: repeat(6, auto);
  gap: 40px;

  align-items: center;
}
.left-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  align-items: center;
}

@media only screen and (min-width: 500px) {
  .left-links,
  .right-links {
    display: hidden;
  }
}
</style>

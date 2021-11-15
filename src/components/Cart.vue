<template>
  <teleport to="body">
    <div
      class="
        md:w-96
        w-11/12
        absolute
        right-0
        md:left-auto md:top-20
        top-28
        left-0
        ml-auto
        mr-auto
        justify-center
        flex flex-col
        items-center
        bg-white
        gap-14
        shadow-2xl
        z-10
        md:pt-10
        p-10
        pb-20
      "
    >
      <div class="flex justify-between w-full">
        <h2>Cart</h2>
        <img
          class="h-4 cursor-pointer"
          @click="close"
          src="/images/icon-close.svg"
          alt="close"
        />
      </div>
      <div class="cart-items">
        <cart-item />
      </div>
      <Button
        v-if="quantity"
        class="h-11 pl-16 pr-16 w-full"
        title="Checkout"
      />
    </div>
  </teleport>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
import Button from "./Button.vue";
import CartItem from "./CartItem.vue";
import { watchEffect } from "@vue/runtime-core";
export default {
  components: { Button, CartItem },
  emits: ["close"],
  setup(props, { emit }) {
    const store = useStore();
    const quantity = ref(store.state.quantity);
    watchEffect(() => {
      quantity.value = store.state.quantity;
    });
    const close = () => {
      emit("close");
    };
    return { quantity, close };
  },
};
</script>

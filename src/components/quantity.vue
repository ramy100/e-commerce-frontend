<template>
  <div
    class="
      grid grid-cols-3
      text-center
      bg-blue-light
      h-10
      items-center
      rounded-xl
      text-orange
    "
  >
    <button @click="count > 0 && decrement()">-</button>
    <div class="text-black">{{ count }}</div>
    <button @click="increment" class="plus">+</button>
  </div>
</template>

<script>
export default {
  emits: ["setQuantity"],
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    decrement() {
      this.count--;
      this.$emit("setQuantity", this.count);
    },
    increment() {
      this.count++;
      this.$emit("setQuantity", this.count);
    },
  },
};
</script>


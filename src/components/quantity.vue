<template>
  <div class="quantity-wrapper">
    <button @click="count > 0 && decrement()" class="minus">-</button>
    <div class="number">
      <div>{{ count }}</div>
    </div>
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

<style scoped lang="scss">
.quantity-wrapper {
  display: grid;
  grid-template-columns: 22% auto 22%;
  height: 50px;
}
.plus,
.minus {
  color: var(--Orange);
  font-size: 25px;
}
.plus {
  border-radius: 10px 0 0 10px;
}
.minus {
  border-radius: 0 10px 10px 0;
}
.number {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--Light-grayish-blue);
}

button {
  border: none;
  background-color: var(--Light-grayish-blue);
  cursor: pointer;
}
</style>

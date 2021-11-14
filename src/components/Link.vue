<template>
  <li @click="setActive" class="link">
    <slot></slot>
  </li>
</template>
<script lang="ts">
export default {
  methods: {
    setActive(e: any) {
      const all = document.getElementsByClassName("active");
      Array.from(all).forEach((el) => {
        if (e.target != el) el.classList.remove("active");
      });
      e.target.classList.add("active");
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  position: relative;
  padding-top: 40px;
  padding-bottom: 40px;
  text-align: center;
}
.link::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 5px;
  bottom: 0;
  left: 0;
}
.active:after {
  background-color: var(--Orange);
}
</style>

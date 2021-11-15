<template>
  <li>
    <slot></slot>
    <div
      :class="{ hidden: !active }"
      class="absolute bg-orange w-full h-1 -bottom-8 duration-300"
    ></div>
  </li>
</template>
<script lang="ts">
export default {
  props: ["active"],
};
</script>


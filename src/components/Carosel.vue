<template>
  <div class="max-w-md grid grid-cols-1 absolute top-28 left-0 right-0 m-auto">
    <img
      class="
        cursor-pointer
        absolute
        w-5
        -top-10
        right-0
        invert
        brightness-0
        filter
      "
      @click="closeModal"
      src="/images/icon-close.svg"
      alt="close"
    />
    <slot></slot>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  props: ["images"],
  emits: ["close"],
  setup(props, { emit }) {
    const activeImage = ref(props.images[0]);
    const closeModal = () => {
      emit("close");
    };
    return { activeImage, closeModal };
  },
};
</script>




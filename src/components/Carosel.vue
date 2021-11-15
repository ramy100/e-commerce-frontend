<template>
  <teleport to="body">
    <div
      @click.self="closeModal"
      class="
        bg-blue-darkest
        flex
        justify-center
        items-center
        bg-opacity-30
        h-full
        w-full
        absolute
        top-0
        left-0
      "
    >
      <div class="max-w-lg grid grid-cols-1 gap-3 relative">
        <div>
          <img
            class="h-4 cursor-pointer absolute -top-5 right-0"
            @click="closeModal"
            src="/images/icon-close.svg"
            alt=""
            srcset=""
          />
        </div>
        <slot></slot>
      </div>
    </div>
  </teleport>
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




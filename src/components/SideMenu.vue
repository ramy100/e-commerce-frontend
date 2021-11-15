<template>
  <teleport to="body">
    <div
      class="
        absolute
        top-0
        left-0
        h-full
        w-full
        bg-blue-darkest bg-opacity-30
        select-none
      "
      @click.self="closeMenu"
    >
      <div class="p-5 absolute left-0 top-0 h-full w-60 bg-white">
        <ul class="grid grid-cols-1 gap-5">
          <li class="cursor-auto">
            <img
              class="mb-10 cursor-pointer"
              @click.self="closeMenu"
              src="/images/icon-close.svg"
              alt=""
              srcset=""
            />
          </li>
          <li v-for="link in links" :key="link">{{ link }}</li>
        </ul>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  emits: ["close"],
  props: ["links"],
  setup(props, { emit }) {
    const closeMenu = () => {
      emit("close");
    };

    return { closeMenu };
  },
};
</script>

<style>
</style>
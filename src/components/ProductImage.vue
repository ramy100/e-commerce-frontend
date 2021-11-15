<template>
  <div class="grid gap-5 justify-center select-none">
    <div class="relative">
      <div
        v-if="screenWidth < 768 || isModal"
        class="
          absolute
          md:-left-5
          left-5
          top-1/2
          bg-white
          rounded-full
          p-3
          pl-4
          pr-4
          flex
          justify-center
          items-center
          md:cursor-pointer
        "
        @click="goToImage('prev')"
      >
        <img src="/images/icon-previous.svg" alt="" srcset="" />
      </div>

      <img
        :src="active"
        @click="screenWidth > 768 && open()"
        class="md:rounded-2xl sm:w-full"
        :class="{ 'cursor-pointer': screenWidth > 768 }"
      />
      <div
        v-if="screenWidth < 768 || isModal"
        class="
          absolute
          md:-right-5
          right-5
          top-1/2
          bg-white
          justify-center
          items-center
          rounded-full
          flex
          p-3
          pl-4
          pr-4
          cursor-pointer
        "
        @click="goToImage('next')"
      >
        <img src="/images/icon-next.svg" alt="" srcset="" />
      </div>
    </div>
    <ul class="md:grid grid-cols-4 gap-2 hidden">
      <li
        v-for="(image, index) in images"
        :class="{ 'border-orange border-2': active == image }"
        :key="image"
        class="rounded-2xl duration-300"
      >
        <img
          @click="setActiveImage(index)"
          :class="{
            'border-orange border-2': active == image,
          }"
          :src="image"
          class="rounded-2xl"
        />
        <div
          :class="{ hidden: active != image }"
          class="
            absolute
            bg-white bg-opacity-40
            w-full
            h-full
            top-0
            bottom-0
            rounded-2xl
          "
        ></div>
      </li>
    </ul>
  </div>
  <carosel
    v-if="screenWidth > 768 && showCarosel"
    :images="images"
    @close="close"
  >
    <product-image :images="images" :isModal="true" />
  </carosel>
</template>

<script >
import { ref } from "@vue/reactivity";
import Carosel from "./Carosel.vue";
import { onMounted } from "@vue/runtime-core";
export default {
  components: { Carosel },
  name: "product-image",
  props: ["images", "isModal"],
  setup(props) {
    const index = ref(0);
    const active = ref(props.images[0]);
    const showCarosel = ref(false);
    const screenWidth = ref(window.innerWidth);

    onMounted(() => {
      window.addEventListener("resize", () => {
        screenWidth.value = window.innerWidth;
      });
    });

    const close = () => {
      showCarosel.value = false;
    };
    const open = () => {
      !props.isModal ? (showCarosel.value = true) : null;
    };
    const goToImage = (to) => {
      if (to == "next") {
        index.value =
          index.value + 1 == props.images.length ? 0 : index.value + 1;
      }
      if (to == "prev") {
        index.value =
          index.value - 1 < 0 ? props.images.length - 1 : index.value - 1;
      }
      active.value = props.images[index.value];
    };
    const setActiveImage = (num) => {
      index.value = num;
      active.value = props.images[num];
    };
    return {
      close,
      active,
      showCarosel,
      open,
      goToImage,
      setActiveImage,
      screenWidth,
    };
  },
};
</script>

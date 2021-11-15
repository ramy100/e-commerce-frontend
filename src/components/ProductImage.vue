<template>
  <div class="grid gap-5 items-center select-none">
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
        <img src="/images/icon-previous.svg" alt="previous arrow" />
      </div>

      <img
        :src="active"
        @click="screenWidth > 768 && open()"
        class="md:rounded-2xl sm:w-full"
        :class="{ 'cursor-pointer': screenWidth > 768 }"
        alt="product img"
      />
      <div
        v-if="screenWidth < 768 || isModal"
        class="
          absolute
          md:-right-5
          right-5
          bg-white
          justify-center
          items-center
          top-1/2
          rounded-full
          flex
          p-3
          pl-4
          pr-4
          cursor-pointer
        "
        @click="goToImage('next')"
      >
        <img src="/images/icon-next.svg" alt="next arrow" />
      </div>
    </div>

    <div class="md:grid grid-cols-4 gap-2 hidden">
      <div v-for="(image, index) in images" :key="image" class="relative">
        <img
          @click="setActiveImage(index)"
          :class="{
            'border-orange border-2': active == image,
          }"
          :src="image"
          class="rounded-2xl"
          alt="small product image"
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
      </div>
    </div>
  </div>
  <teleport to="body">
    <transition name="fade" mode="in-out">
      <overlay v-if="screenWidth > 768 && showCarosel" @close="close" />
    </transition>
    <transition name="scale" mode="in-out">
      <carosel
        v-if="screenWidth > 768 && showCarosel"
        :images="images"
        @close="close"
      >
        <product-image :images="images" :isModal="true" />
      </carosel>
    </transition>
  </teleport>
</template>

<script >
import { ref } from "@vue/reactivity";
import Carosel from "./Carosel.vue";
import { onMounted } from "@vue/runtime-core";
import Overlay from "./overlay.vue";
export default {
  components: { Carosel, Overlay },
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
<style>
.scale-enter-active,
.scale-leave-active {
  transition: transform 0.2s;
}
.scale-enter-from {
  transform: scale(0);
}
.scale-enter-to {
  transform: scale(1);
}

.scale-leave-to {
  transform: scale(0);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}

.fade-leave-to {
  opacity: 0;
}
</style>
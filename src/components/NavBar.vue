<template>
  <div className="flex justify-between pt-6 pb-6 ">
    <ul className="grid grid-flow-col items-center gap-6 ">
      <li class="md:hidden mt-1" @click="sideMenu = true">
        <img src="/images/icon-menu.svg" alt="menu" />
      </li>
      <li>
        <img src="/images/logo.svg" alt="logo" />
      </li>
      <Link
        v-for="link in links"
        :key="link"
        class="hidden md:block"
        @click="setActive"
        :active="activeLink == link"
        >{{ link }}</Link
      >
    </ul>
    <ul className="grid grid-flow-col items-center gap-5">
      <li @click="showCart = !showCart">
        <img src="/images/icon-cart.svg" alt="cart" />
        <div
          v-if="quantity"
          class="
            absolute
            pl-2
            pr-2
            -top-2
            -right-2
            bg-orange
            rounded-lg
            text-xs
          "
        >
          {{ quantity }}
        </div>
      </li>
      <li>
        <img
          class="border-orange border-2 rounded-full"
          width="50"
          src="/images/image-avatar.png"
          alt="avatar"
        />
      </li>
      <teleport to="body">
        <transition @before-enter="beforeEnter" @enter="enter" @leave="leave">
          <Cart v-if="showCart" @close="showCart = false" />
        </transition>
      </teleport>
    </ul>
    <teleport to="body">
      <transition name="fade" mode="in-out">
        <overlay
          v-if="screenWidth < 768 && sideMenu"
          @close="sideMenu = false"
        />
      </transition>
      <transition name="slide" mode="in-out">
        <side-menu
          v-if="screenWidth < 768 && sideMenu"
          @close="sideMenu = false"
          :links="links"
        />
      </transition>
    </teleport>
  </div>
</template>
<script >
import Link from "./Link.vue";
import Cart from "./Cart.vue";
import { useStore } from "vuex";
import { computed, ref } from "@vue/reactivity";
import SideMenu from "./SideMenu.vue";
import { onMounted } from "@vue/runtime-core";
import Overlay from "./overlay.vue";
import gsap from "gsap";

export default {
  components: { Link, Cart, SideMenu, Overlay },
  setup(props) {
    const store = useStore();
    const sideMenu = ref(false);
    const links = ref(["Collections", "Men", "Women", "About", "Contact us"]);
    const quantity = computed(() => store.state.quantity);
    const activeLink = ref("Collections");
    const showCart = ref(false);
    const screenWidth = ref(window.innerWidth);
    const setActive = (e) => {
      activeLink.value = e.target.innerText;
    };
    const beforeEnter = (el) => {
      gsap.set(el, { y: "-200%" });
    };
    const enter = (el, done) => {
      gsap.to(el, {
        y: 0,
        duration: 0.8,
        onComplete: done,
        ease: "elastic.inOut(1, 1)",
      });
    };
    const leave = (el, done) => {
      gsap.to(el, { x: 0, opacity: 1 });
      gsap.to(el, {
        y: "-200%",
        duration: 0.8,
        onComplete: done,
        ease: "elastic.inOut(1, 1)",
      });
    };

    onMounted(() => {
      window.addEventListener("resize", () => {
        screenWidth.value = window.innerWidth;
      });
    });
    return {
      quantity,
      showCart,
      setActive,
      activeLink,
      sideMenu,
      links,
      screenWidth,
      beforeEnter,
      enter,
      leave,
    };
  },
};
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}
.slide-enter-from {
  transform: translateX(-100%);
}
.slide-enter-to {
  transform: translateX(0);
}

.slide-leave-to {
  transform: translateX(-100%);
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
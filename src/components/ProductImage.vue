<template>
  <div class="product">
    <img :src="active" />
    <ul class="small-images">
      <li
        v-for="image in images"
        :class="{ activeImage: active == image }"
        :key="image"
      >
        <img
          @click="active = image"
          :class="{ activeImage: active == image }"
          :src="image"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  props: ["images"],
  data() {
    return {
      active: this.images[0],
    };
  },
};
</script>

<style scoped lang="scss">
.product {
  display: grid;
  gap: 20px;
  justify-content: center;
  position: relative;
}
.small-images {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

img {
  max-width: 100%;
  max-height: 100%;
}

img.activeImage {
  opacity: 0.5;
}
li.activeImage {
  outline: 0.3vw solid var(--Orange);
}
img,
li {
  border-radius: 5%;
}
</style>

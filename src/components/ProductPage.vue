<template>
  <div class="wrapper">
    <div>
      <product-image
        :images="[
          'images/image-product-1.jpg',
          'images/image-product-2.jpg',
          'images/image-product-3.jpg',
          'images/image-product-4.jpg',
        ]"
        class="images"
      />
    </div>
    <product-desc @setCount="soso" />
  </div>
</template>

<script>
import ProductDesc from "./productDesc.vue";
import ProductImage from "./ProductImage.vue";

export default {
  components: { ProductImage, ProductDesc },
  methods: {
    soso() {
      console.log("object");
    },
  },
};
</script>

ProductDesc
<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 2rem;
  padding-bottom: 5rem;
  gap: 5rem;
  align-items: center;
}
</style>

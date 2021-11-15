<template>
  <div
    class="
      md:max-w-5xl md:grid
      grid-cols-2
      md:m-10 md:pt-10 md:gap-20 md:items-center md:justify-items-center
    "
  >
    <div>
      <product-image
        :images="[
          '/images/image-product-1.jpg',
          '/images/image-product-2.jpg',
          '/images/image-product-3.jpg',
          '/images/image-product-4.jpg',
        ]"
        :isModal="false"
      />
    </div>
    <product-desc class="md:p-0 p-10" />
  </div>
</template>

<script>
import ProductDesc from "./productDesc.vue";
import ProductImage from "./ProductImage.vue";

export default {
  components: { ProductImage, ProductDesc },
};
</script>
<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import productPage from "./components/ProductPage.vue";
</script>

<template>
  <main class="h-screen">
    <div class="pl-10 pr-10">
      <NavBar />
    </div>
    <div class="flex justify-center md:pl-16 md:pr-16">
      <productPage />
    </div>
  </main>
</template>

<style>
* {
  font-family: "Open Sans", sans-serif;
}

li {
  cursor: pointer;
  position: relative;
}
</style>

<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import productPage from "./components/ProductPage.vue";
</script>

<template>
  <main>
    <NavBar />
    <productPage />
  </main>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
}
body {
  padding-left: 15%;
  padding-right: 15%;
  position: relative;
}
main {
  display: grid;
  grid-template-rows: 150px auto;
  height: 100vh;
}
ul {
  list-style: none;
}

:root {
  --Orange: hsl(26, 100%, 55%);
  --Orange-light: hsla(26, 100%, 90%);
  --pale-orange: hsl(25, 100%, 94%);
  --main-bg-color: brown;
  --Very-vark-blue: hsl(220, 13%, 13%);
  --Dark-grayish-blue: hsl(219, 9%, 45%);
  --Grayish-blue: hsl(220, 14%, 75%);
  --Light-grayish-blue: hsl(223, 64%, 98%);
  --White: hsl(0, 0%, 100%);
  --Black: hsl(0, 0%, 0%);
}
</style>

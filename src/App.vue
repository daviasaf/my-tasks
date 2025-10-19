<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Main from "./components/Main.vue";
</script>

<template>
  <div class="flex flex-col justify-between bg-green-100">
    <Header />
    <Main>
      <router-view></router-view>
    </Main>
    <Footer />
  </div>
</template>

<style scoped></style>

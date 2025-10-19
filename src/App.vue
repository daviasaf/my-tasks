<script setup>
import Header from "./components/Header.vue";
import Footer from './components/Footer.vue'
import Main from "./components/Main.vue";
</script>

<template>
  <Header>
  </Header>
  <Main>
    <router-view></router-view>
  </Main>
  <Footer />
</template>

<style scoped></style>

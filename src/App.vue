<script setup>
import Header from "./components/Header.vue";
import Footer from './components/Footer.vue'
import Main from "./components/Main.vue";
</script>

<template>
  <Header>
    <template #link1 > <routerLink to="/"> Home</routerLink> </template>
    <template #link2 ><routerLink to="/tasks"> Tasks</routerLink></template>
  </Header>
  <Main>
    <router-view></router-view>
  </Main>
  <Footer />
</template>

<style scoped></style>

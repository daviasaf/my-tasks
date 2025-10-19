<script setup>
import { computed, ref } from "vue";
import IconButton from "./IconButton.vue";
let showMenu = ref(false);
function menuDisplay() {
  showMenu.value = !showMenu.value;
}

import { useRoute } from "vue-router";
const route = useRoute();
let rotas = ref([
  { rota: "/", nome: "Home", estaNaPagina: false },
]);

// Não deve ser usar computed pra modificar valor
const rotaComStatus = computed(() => {
  return rotas.value.map((rota) => {
    return {
      ...rota,
      estaNaPagina: rota.rota == route.path,
    };
  });
});

</script>

<template>
  <header
    class="bg-green-200 flex justify-between items-center px-6 py-4 overflow-x-hidden"
  >
    <!-- TITULO -->
    <h1 class="text-xl">My Tasks</h1>

    <!-- NO MOBILE -->
    <!-- ICON MENU SANDUICHE -->
    <IconButton @click="menuDisplay" class="sm:hidden" v-if="!rotaComStatus[0].estaNaPagina" >
      <img src="/public/menu.svg" alt="Menu"  />
    </IconButton>
    <!-- FUNDO PRETO -->
    <div
      v-if="showMenu"
      @click="menuDisplay"
      class="block sm:hidden bg-black inset-0 fixed h-screen w-screen opacity-50"
    ></div>
    <!-- MENU SANDUICHE -->
    <div
      v-show="showMenu"
      :class="showMenu ? 'right-0' : 'hidden'"
      class="fixed top-0 flex flex-col 1 sm:hidden w-1/3 h-screen list-none bg-green-200"
    >
      <IconButton @click="menuDisplay" class="hover:bg-green-300 m-2">
        <img src="../../public/cross.svg" alt="Botão sair" />
      </IconButton>
      <div class="flex flex-col items-center">
        <ul>
          <li v-for="(rota, index) in rotaComStatus" :key="index">
            <routerLink @click="menuDisplay" :to="rota.rota" v-if="!rota.estaNaPagina">{{
              rota.nome
            }}</routerLink>
          </li>
        </ul>
      </div>
    </div>
    <!-- DESKTOP -->
    <!-- LINKS -->
    <ul class="hidden sm:flex text-sm w-1/4 md:w-1/6 justify-around">
      <ul>
        <li v-for="(rota, index) in rotaComStatus" :key="index">
          <routerLink :to="rota.rota" v-if="!rota.estaNaPagina">{{
            rota.nome
          }}</routerLink>
        </li>
      </ul>
    </ul>
  </header>
</template>

<style scoped>
a:hover{
   color:oklch(50.8% 0.118 165.612)
}</style>

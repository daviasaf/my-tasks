<script setup>
import { ref } from "vue";
let showMenu = ref(false);
</script>

<template>
  <header
    class="bg-green-200 flex justify-between items-center px-6 py-4 overflow-x-hidden"
  >
    <h1 class="text-xl">My Tasks</h1>
    <p @click="showMenu = !showMenu" class="sm:hidden cursor-pointer"><img src="/public/menu.svg" class="w-6 h-6" alt="Menu"></p>
    <ul class="hidden sm:flex text-sm w-1/4 md:w-1/6 justify-around">
      <li><slot name="link1" ></slot></li>
      <li><slot name="link2" ></slot></li>
    </ul>
    <div
      v-if="showMenu"
      @click="showMenu = !showMenu"
      class="block sm:hidden bg-black inset-0 fixed h-screen w-screen opacity-50"
    ></div>
    <div
      v-show="showMenu"
      :class="showMenu ? 'right-0' : 'hidden'"
      class="fixed top-0 flex flex-col 1 sm:hidden w-1/3 h-screen list-none bg-green-200"
    >
      <div @click="showMenu = !showMenu">
        <img
          src="../../public/cross.svg"
          class="m-1 w-6 h-6 p-1.5 hover:bg-green-300 cursor-pointer rounded-md"
          alt=""
        />
      </div>
      <div class="flex flex-col items-center">
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
        <li><a href="#">Link 3</a></li>
      </div>
    </div>
  </header>
</template>

<style scoped></style>

<script setup>
import Button from "../components/Button.vue";
import UserComment from "../components/UserComment.vue";
import pessoa1 from '../assets/pessoa1.jpg'
import pessoa2 from '../assets/pessoa2.jpg'
import pessoa3 from '../assets/pessoa3.jpg'


</script>

<template>

  <!-- APRESENTAÇÃO DA P -->
  <div class="grid gap-4 grid-cols-1 mx-4 my-20">
    <h1 class="text-5xl text-center uppe">My Tasks</h1>
    <p>Salve suas tarefas em um único lugar!</p>
    <Button #buttonContent
      ><routerLink to="/tasks">Comece agora</routerLink></Button
    >
  </div>

<!-- COMENTÁRIOS -->
  <div class="flex flex-wrap justify-center my-10">
    <UserComment :url="pessoa2">
      <template #nome>Jonas</template>
      <template #comentario>
        Nunca mais esqueci de fazer minhas tarefas :)
      </template>
    </UserComment>
    <UserComment :url="pessoa3">
      <template #nome>Carmen</template>
      <template #comentario>
        Incrível!
      </template>
    </UserComment>
    <UserComment :url="pessoa1">
      <template #nome>Francis</template>
      <template #comentario>
        Nunca mais esqueci de fazer minhas tarefas :)
      </template>
    </UserComment>
  </div>
</template>

<style scoped></style>

<script setup>
import Button from "../components/Button.vue";
import UserComment from "../components/UserComment.vue";
import pessoa1 from "../assets/pessoa1.jpg";
import pessoa2 from "../assets/pessoa2.jpg";
import pessoa3 from "../assets/pessoa3.jpg";
</script>

<template>
  <!-- APRESENTAÇÃO -->
  <div class="flex flex-col justify-center items-center h-[50vh] w-full bg-emerald-100">
    <h1 class="text-5xl text-center my-5">My Tasks</h1>
    <p class="text-center mb-5">Salve suas tarefas em um único lugar!</p>
    <div class="w-1/5 flex justify-center">
      <routerLink to="/tasks" class="w-full min-w-30">
        <Button #buttonContent>Comece agora!</Button>
      </routerLink>
    </div>
  </div>

  <!-- COMENTÁRIOS -->
  <div class="flex flex-wrap justify-center py-10 w-full bg-green-100">
    <UserComment :url="pessoa2">
      <template #nome>Jonas</template>
      <template #comentario>
        Nunca mais esqueci de fazer minhas tarefas :)
      </template>
    </UserComment>
    <UserComment :url="pessoa3">
      <template #nome>Carmen</template>
      <template #comentario> Incrível! </template>
    </UserComment>
    <UserComment :url="pessoa1">
      <template #nome>Francis</template>
      <template #comentario> Simples e funcional! </template>
    </UserComment>
  </div>
</template>

<style scoped></style>

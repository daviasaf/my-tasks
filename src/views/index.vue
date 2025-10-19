<script setup>
import Button from "../components/Button.vue";
import UserComment from "../components/UserComment.vue";
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
    <UserComment url="src/assets/pessoa-2.jpg">
      <template #nome>Jonas</template>
      <template #comentario>
        Nunca mais esqueci de fazer minhas tarefas :)
      </template>
    </UserComment>
    <UserComment url="src/assets/pessoa-3.jpg">
      <template #nome>Carmen</template>
      <template #comentario>
        Incrível!
      </template>
    </UserComment>
    <UserComment url="src/assets/pessoa-1.jpg">
      <template #nome>Francis</template>
      <template #comentario>
        Nunca mais esqueci de fazer minhas tarefas :)
      </template>
    </UserComment>
  </div>
</template>

<style scoped></style>

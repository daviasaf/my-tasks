<script setup>
import { useTemplateRef } from 'vue';

  const props = defineProps(['url'])

</script>

<template>
  <div class="flex flex-col items-center border-1 border-gray-300 p-4 shadow m-2 min-w-30 w-1/4">
    <div  >
      <img :src="props.url" class=" w-40 rounded-full border-2" >
    </div>
    <p class="my-2 text-lg text-center"> <slot name="nome" ></slot> </p>
    <p class="text-center"> <slot name="comentario" ></slot> </p>
  </div>
</template>

<style scoped>

</style>
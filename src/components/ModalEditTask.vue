<script setup>
import Button from "./Button.vue";
import IconButton from "./IconButton.vue";

const props = defineProps(["openEdit", "switchDisplayEdit"]);
const emit = defineEmits(["atualizarTarefa"]);

function enviarEmit() {
  emit("atualizarTarefa");
}
</script>

<template>
  <!-- FUNDO PRETO -->
  <div
    v-if="props.openEdit"
    @click="props.switchDisplayEdit"
    class="z-40 bg-black opacity-50 fixed inset-0"
  ></div>
  <!-- DIV CENTRALIZADA -->
  <div
    v-if="props.openEdit"
    class="grid grid-cols-1 z-50 min-w-5/6 h-auto p-10 bg-gray-100 shadow-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded gap-2 sm:min-w-2/3 md:min-w-1/3"
  >
    <!-- BOTÃO X -->
    <div class="fixed right-2 top-2">
      <IconButton @click="props.switchDisplayEdit" class="hover:bg-gray-300">
        <img src="/cross.svg" alt="Botão para sair" />
      </IconButton>
    </div>
    <!-- INPUTS -->
    <slot name="input1"></slot>
    <slot name="input2"></slot>
    <!-- BOTÃO SALVAR -->
    <Button @click="enviarEmit" #buttonContent>Salvar</Button>
  </div>
</template>

<style scoped></style>

<script setup>
import { ref } from "vue";
import MenuConfig from "./MenuConfig.vue";
const emit = defineEmits(["deletarTask", "atualizarTask"]);
const props = defineProps(["task"]);

let taskName = ref(props.task.nome);
let taskDesc = ref(props.task.desc);

let isError = ref(false);

let openConfig = ref(false);
let openEdit = ref(false);

function deletarTarefa() {
  emit(`deletarTask`, props.task.id);
}
function atualizarTarefa() {
  if (taskName.value && taskDesc.value) {
    emit("atualizarTask", {
      nome: taskName.value,
      desc: taskDesc.value,
      id: props.task.id,
    });
    semErroDetectado();
  } else {
    erroDetectado();
  }
}
function switchDisplayConfig() {
  openConfig.value = !openConfig.value;
}
function switchDisplayEdit() {
  openEdit.value = !openEdit.value;
}
function erroDetectado() {
  isError.value = true;
}
function semErroDetectado() {
  isError.value = false;
}
</script>

<template>
  <div
    :class="isError ? 'with-error' : 'no-error'"
    class="bg-gray-100 border-2 border-green-200 rounded-sm h-auto min-h-30 w-100 p-3 gap-1 my-1"
  >
    <div class="flex justify-end">
      <button @click="switchDisplayConfig" class="h-full">
        <MenuConfig />
      </button>
    </div>
    <h1
      id="titulo"
      class="text-2xl text-center border-b-2 border-green-200 flex items-center justify-center pb-2"
    >
      {{ task.nome }}
    </h1>
    <p class="text-center flex justify-center items-center my-4">
      {{ task.desc }}
    </p>

    <div v-show="openConfig" class="flex justify-around">
      <button
        @click="deletarTarefa"
        class="transition bg-gray-200 hover:bg-green-200 w-1/3 p-1 rounded-lg"
      >
        Apagar
      </button>
      <button
        @click="switchDisplayEdit"
        class="transition bg-gray-200 hover:bg-green-200 w-1/3 p-1 rounded-lg"
      >
        Editar
      </button>
    </div>
    <p v-if="isError" class="text-center">Não deixe nada vazio</p>
    <div
      v-if="openEdit"
      @click="switchDisplayEdit"
      class="fixed inset-0 bg-black opacity-50 z-40"
    ></div>


    <!-- CONFIG BAR -->
    <div
      v-if="openEdit"
      class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-100 min-w-5/6 sm:min-w-2/3 md:min-w-1/3 h-auto rounded shadow-lg grid grid-cols-1 gap-2 p-5 z-50"
      >
      <div class=" fixed right-2 top-2 ">
        <button @click="switchDisplayEdit"  class="h-full" >
          <img src="../../public/cross.svg" class="w-6 h-6 p-1.5 transition hover:bg-gray-300 rounded " >
        </button>
      </div>
      <label class="w-full"> Nome </label>
      <input type="text" v-model="taskName" class="bg-gray-200 text-center p-1 " />
      <label for=""> Descrição </label>
      <input type="text"  v-model="taskDesc" class="bg-gray-200  text-center p-1" />
      <button
        @click="atualizarTarefa(), switchDisplayEdit()"
        class="bg-gray-300 hover:bg-gray-400 rounded-md py-3"
      >
        Salvar
      </button>
    </div>
  </div>
</template>

<style scoped>
.with-error {
  border: 2px solid oklch(80.8% 0.114 19.571);
  border-radius: 4px;

  #titulo {
    border-bottom: 1px solid oklch(80.8% 0.114 19.571);
  }
}
.no-error {
  border: 2px solid oklch(92.5% 0.084 155.995);
}
</style>

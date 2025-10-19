<script setup>
import { ref } from "vue";
import IconButton from "./IconButton.vue";
import MensagemErro from "./MensagemErro.vue";
import Button from "./Button.vue";
import ModalEditTask from "./ModalEditTask.vue";
import InputText from "../components/InputText.vue";
import { useTasks } from "../composables/useTasks";

const { updateTask } = useTasks();
const emit = defineEmits(["deletarTask", "atualizarTask"]);
const props = defineProps(["task"]);
const isErrorCard = ref(false);

let taskName = ref(props.task.nome);
let taskDesc = ref(props.task.desc);

let openConfig = ref(false);
let openEdit = ref(false);

function erroDetectadoTask() {
  isErrorCard.value = true;
}
function semErroDetectadoTask() {
  isErrorCard.value = false;
}

function deletarTarefa() {
  emit(`deletarTask`, props.task.id);
}
function atualizarTarefa() {
  if (taskName.value && taskDesc.value) {
    semErroDetectadoTask();
    return updateTask(taskName.value, taskDesc.value, props.task.id);
  }
  return erroDetectadoTask();
}
function switchDisplayConfig() {
  openConfig.value = !openConfig.value;
}
function switchDisplayEdit() {
  openEdit.value = !openEdit.value;
}
</script>

<template>
  <div
    :class="isErrorCard ? ' with-error' : 'no-error'"
    class="h-auto min-h-30 grid grid-cols-1 p-3 m-1 mt-5 bg-gray-100 border-2 border-green-200 rounded-sm gap-1 min-w-30 w-3/4 sm:w-3/7"
  >
    <!-- BUTTON -->
    <div class="flex justify-end">
      <IconButton @click="switchDisplayConfig" class="hover:bg-gray-300">
        <img src="/menu-dots.svg" alt="Menu suspenso" />
      </IconButton>
    </div>
    <!-- TITLE -->
    <h1
      id="titulo"
      class="flex pb-2 text-2xl text-center border-b-2 border-green-200 items-center justify-center"
    >
      {{ task.nome }}
    </h1>
    <!-- DESCRIPTION -->
    <p class="flex my-4 text-center justify-center items-center">
      {{ task.desc }}
    </p>
    <!-- CONFIG AREA -->
    <div v-show="openConfig" class="grid grid-cols-2 gap-3">
      <Button @click="deletarTarefa" #buttonContent>Apagar</Button>
      <Button @click="switchDisplayEdit" #buttonContent>Editar</Button>
    </div>
    <!-- ERRO -->
    <MensagemErro v-show="isErrorCard"></MensagemErro>
    <!-- MODAL -->
    <ModalEditTask
      :openEdit="openEdit"
      :switchDisplayEdit="switchDisplayEdit"
      @atualizarTarefa="
        atualizarTarefa();
        switchDisplayEdit();
      "
    >
      <template #input1>
        <InputText
          name-label="Nome da tarefa"
          name-input="user-task-update"
          v-model="taskName"
        ></InputText>
      </template>
      <template #input2>
        <InputText
          name-label="Nome da descrição"
          name-input="user-task-update-desc"
          v-model="taskDesc"
        ></InputText>
      </template>
    </ModalEditTask>
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

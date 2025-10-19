<script setup>
//Components
import CardTask from "../components/CardTask.vue";
import Button from "../components/Button.vue";
import inputText from "../components/InputText.vue";
import MensagemErro from "../components/MensagemErro.vue";
import { useTasks } from "../composables/useTasks";

//Composables
const { tasks, addTask, deleteTask, isErrorForm, userTaskName, userTaskDesc } =
  useTasks();

function adicionarTarefa() {
  addTask(userTaskName.value, userTaskDesc.value);
  limparInputs();
}
function deletarTarefa(id) {
  deleteTask(id);
}

function limparInputs() {
  userTaskName.value = "";
  userTaskDesc.value = "";
}
</script>

<template>
  <div class="flex flex-col w-full">
    <!-- ---------- ESCREVER AS TAREFAS ----------- -->
    <form
      @submit.prevent="adicionarTarefa"
      :class="isErrorForm ? 'with-error' : 'no-error'"
      class="min-w-30 w-3/4 sm:w-3/5 md:w-2/5 grid grid-cols-1 gap-4 bg-gray-100 border-2 p-5 mx-auto rounded"
    >
      <p class="flex justify-center items-start text-2xl">Escreva sua tarefa</p>
      <inputText
        nameLabel="Nome da tarefa"
        nameInput="user-task"
        v-model="userTaskName"
      ></inputText>
      <inputText
        nameLabel="Descrição da tarefa"
        nameInput="user-task-desc"
        v-model="userTaskDesc"
      ></inputText>
      <Button #buttonContent>Enviar</Button>
      <MensagemErro v-show="isErrorForm"></MensagemErro>
    </form>

    <!-- ---------- MOSTRAS AS TAREFAS ---------- -->
    <div v-show="tasks.length > 0" class="flex flex-wrap justify-around">
      <CardTask
        @deletarTask="deletarTarefa"
        v-for="task in tasks"
        :key="task.id"
        :task="task"
      />
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

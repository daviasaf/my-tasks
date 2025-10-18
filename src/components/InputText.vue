<script setup>
import { useTemplateRef, onMounted } from "vue";

// funciona igual um ref, mas pega o v-model do pai
const valorBidirecional = defineModel()

const props = defineProps(["nameLabel", "nameInput"]);
const input = useTemplateRef("input-text");
const label = useTemplateRef("label-input-text");
onMounted(() => {
  label.value.htmlFor = props.nameInput;
  input.value.id = props.nameInput;
  input.value.name = props.nameInput;
});
</script>

<template>
  <div>
    <label for="" ref="label-input-text"> {{ props.nameLabel }} </label>
    <input
    v-model="valorBidirecional"
      ref="input-text"
      type="text"
      maxlength="40"
      class="border-gray-300 hover:bg-gray-200 focus:bg-gray-200 text-center outline-0 rounded py-1.5 transition border-1 w-full"
    />
  </div>
</template>

<style scoped></style>

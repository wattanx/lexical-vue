<script setup lang="ts">
defineProps<{
  codeLanguages: string[];
  value: string;
}>();

const emit = defineEmits<{
  (e: 'update:value', value: string): void;
}>();

const change = (e: Event) => {
  emit('update:value', (e.target as HTMLSelectElement).value);
};
</script>

<template>
  <select class="toolbar-item code-language" :value="value" @change="change">
    <option :hidden="true" value="" />
    <option v-for="lang in codeLanguages" :key="lang" :value="lang">
      {{ lang }}
    </option>
  </select>
</template>

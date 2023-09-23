<template>
  <input
    class="dark:ring-slate-500 dark:bg-slate-800 dark:border-gray-600 dark:focus:ring-indigo-500 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-white"
    v-model="model"
    @input="onInput"
  />
</template>

<script setup>
import { useVModel,KEY_EMIT_UPDATE } from '@/tools/use-v-model'

const props = defineProps({modelValue:{default:""}})
const emits = defineEmits([KEY_EMIT_UPDATE])

const {model,onInput} = useVModel(()=>props.modelValue, emits)
</script>

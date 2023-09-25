<template>
  <button :disabled="loading" class="disabled:cursor-not-allowed flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400">
    <template v-if="loading">
      <component :is="IconLoading" class="-ml-1 animate-spin h-5 mr-3 text-white w-5" />
    </template>

    <slot />
  </button>
</template>

<script setup>
import IconLoading from '@/icons/loading.vue';

defineProps({
  loading:{type:Boolean,default:false}
})
</script>

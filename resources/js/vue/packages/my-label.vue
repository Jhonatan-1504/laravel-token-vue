<template>
  <label :for="forHtml" class="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
    <slot />
  </label>
</template>

<script setup>
defineProps({forHtml:{type:String,default:null}})
</script>
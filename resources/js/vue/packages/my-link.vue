<template>
  <router-link v-if="to" :to="to" class="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
    <slot />
  </router-link>

  <a href="#" v-else class="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
    <slot />
  </a>
</template>

<script setup>
const props = defineProps({to:{default:null}})
</script>

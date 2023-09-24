<template>
  <div class="ring-2 bg-white rounded-lg ring-black/5 max-w-sm shadow-lg dark:bg-slate-800">
    <div class="p-4">
      <div class="flex items-start">
        <div class="shrink-0">
          <svg class="h-6 w-6 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div>
        <div class="flex-1 mt-0.5 ml-3">
          <p v-if="title" class="text-gray-900 font-semibold text-sm dark:text-white">{{title}}</p>
          <p v-if="message" class="text-sm mt-1 font-normal text-gray-500 dark:text-gray-400">{{message}}</p>
        </div>
        <div class="shrink-0 flex ml-4">
          <button class="text-gray-400 bg-white rounded-md inline-flex focus:ring-indigo-500 dark:bg-slate-800">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon:{default:null},
  title:{type:String,default:null},
  message:{type:String,default:null}
})
</script>

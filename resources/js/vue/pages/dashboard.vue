<template>
  <sidebar-main />

  <div class="lg:pl-72 bg-white min-h-screen">
    <navbar-main />
    
    <main class="py-8 px-4 sm:px-6 lg:px-8">
      <div class="text-gray-700">hola mundo</div>
    </main>
  </div>
</template>

<script setup>
import sidebarMain from '@/components/sidebar/sidebar-main.vue';
import navbarMain from '@/components/navbar/navbar-main.vue';
</script>

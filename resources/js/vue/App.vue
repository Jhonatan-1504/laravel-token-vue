<template>
  <div class="bg-white dark:bg-gray-900 min-h-screen">
    <router-view />

    <my-container-notification />
  </div>
</template>

<script setup>
import myContainerNotification from '@/packages/my-container-notification.vue';
</script>

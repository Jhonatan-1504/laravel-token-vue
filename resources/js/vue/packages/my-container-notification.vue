<template>
  <teleport to="body">
    <div id="notification" class="absolute top-0 right-0 m-4 z-10">
      <my-notification
        title="Successfull sent!"
        message="Lorem ipsum dolor sit amet consectetur."
      />
    </div>
  </teleport>
</template>

<script setup>
import myNotification from './my-notification.vue';
</script>

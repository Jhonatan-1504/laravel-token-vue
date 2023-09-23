<template>
  <div>
    <!-- LABEL -->
    <template v-if="slots.label">
      <slot name="label" />
    </template>

    <template v-else>
      <my-label :forHtml="forHtml">{{label}}</my-label>
    </template>
    <!-- END LABEL -->

    <div class="mt-2">
      <slot />
    </div>
  </div>
</template>

<script setup>
import myLabel from './my-label.vue';

import { useSlots } from "vue";

const props = defineProps({
  label: { type: String, default: null },
  forHtml: { type: String, default: null },
});

const slots = useSlots()
</script>
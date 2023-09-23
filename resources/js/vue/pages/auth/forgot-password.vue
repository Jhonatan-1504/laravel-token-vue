<template>
  <div class="flex min-h-full sm:min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm text-gray-900 dark:text-white flex items-center gap-3">
      <router-link to="login">
        <div class="cursor-pointer p-2 hover:bg-gray-700 rounded-full ease-in duration-75">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
        </div>
      </router-link>

      <h2 class="text-center text-2xl font-bold leading-9 tracking-tight">Recuperar contraseña</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
        <p class="text-sm text-gray-500 dark:text-gray-400">
          ¿Olvidaste tu contraseña? No te preocupes, te ayudaremos a recuperarla. Solo necesitamos tu correo electrónico para enviarte un enlace seguro de restablecimiento de contraseña. Ingresa tu correo a continuación para comenzar.
        </p>

        <my-form-item for-html="email" label="Email address">
          <my-input
            v-model="form.email"
            placeholder="Correo electronico"
            id="email"
            name="email"
            autocomplete="email"
            required
          />
        </my-form-item>

        <div>
          <my-button type="submit">Send</my-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import myLink from '@/packages/my-link.vue';
import myInput from '@/packages/my-input.vue';
import myButton from '@/packages/my-button.vue';
import myLabel from '@/packages/my-label.vue';
import myFormItem from '@/packages/my-form-item.vue';

import {reactive} from 'vue';

const form = reactive({
  email:"",
  password:""
})
</script>

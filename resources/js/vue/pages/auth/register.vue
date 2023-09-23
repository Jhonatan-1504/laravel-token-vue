<template>
  <div class="flex min-h-full sm:min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm text-gray-900 dark:text-white flex items-center gap-3">
      <router-link to="login">
        <div class="cursor-pointer p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full ease-in duration-75">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
        </div>
      </router-link>

      <h2 class="text-center text-2xl font-bold leading-9 tracking-tight">Registrar</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
        <my-form-item for-html="name" label="Fullname">
          <my-input
            v-model="form.name"
            placeholder="Nombre completo"
            id="name"
            name="name"
            autocomplete="name"
            required
          />
        </my-form-item>

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

        <my-form-item for-html="password" label="Password">
          <my-input
            v-model="form.password"
            placeholder="Contraseña"
            id="password"
            name="password"
            autocomplete="password"
            required
            type="password"
          />
        </my-form-item>

        <my-form-item for-html="password_confirmation" label="Repeat password">
          <my-input
            v-model="form.password_confirmation"
            placeholder="Repita su contraseña"
            id="password_confirmation"
            name="password_confirmation"
            autocomplete="password_confirmation"
            required
            type="password"
          />
        </my-form-item>

        <div>
          <my-button>Save</my-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import myInput from '@/packages/my-input.vue';
import myButton from '@/packages/my-button.vue';
import myFormItem from '@/packages/my-form-item.vue';

import {reactive} from 'vue';

const form = reactive({
  name:"",
  email:"",
  password:"",
  password_confirmation:""
})
</script>

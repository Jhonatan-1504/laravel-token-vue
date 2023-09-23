<template>
  <div class="flex min-h-full sm:min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
      <!-- <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" /> -->
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">Iniciar sesión</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
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
          <template #label>
            <div class="flex items-center justify-between">
              <my-label forHtml="password">Password</my-label>

              <div class="text-sm">
                <my-link to="forgot-password">Forgot password?</my-link>
              </div>
            </div>
          </template>

          <my-input
            v-model="form.email"
            placeholder="Contraseña"
            id="password"
            name="password"
            type="password"
            autocomplete="current-password"
            required
          />
        </my-form-item>

        <div>
          <my-button type="submit">Sign in</my-button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
        Not a member?
        {{ ' ' }}
        <router-link to="register" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">Register free.</router-link>
      </p>
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

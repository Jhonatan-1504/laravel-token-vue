<template>
  <div class="flex min-h-full sm:min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 dark:bg-gray-900">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
      <!-- <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" /> -->
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">Iniciar sesión</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Email address</label>
          <div class="mt-2">
            <my-input
              v-model="form.email"
              placeholder="Correo electronico"
              id="email"
              name="email"
              autocomplete="email"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Password</label>
            <div class="text-sm">
              <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">Forgot password?</a>
            </div>
          </div>
          <div class="mt-2">
            <my-input
              v-model="form.email"
              placeholder="Contraseña"
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
            />
          </div>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400">Sign in</button>
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
import myInput from '@/packages/my-input.vue';

import {reactive} from 'vue';

const form = reactive({
  email:"",
  password:""
})
</script>

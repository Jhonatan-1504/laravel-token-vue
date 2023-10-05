<template>
  <div class="flex min-h-full sm:min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
      <!-- <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" /> -->
      <my-text class="mt-10">Iniciar sesión</my-text>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <FormKit
        id="login-user"
        type="form"
        label="Sign in"
        form-class="space-y-6"
        v-model="store.form"
        :incomplete-message="false"
        :ignore="true"
        @submit="onSubmit"
      >
        <FormKit 
          type="email"
          label="Email address"
          name="email"
          autocomplete="email"
          placeholder="Correo electronico"
          validation="required|email"
          :validation-messages="{required:'Correo es requerido.',email:'Correo invalido.'}"
        />

        <FormKit
          type="password"
          label="Password"
          name="password"
          placeholder="Contraseña"
          suffix-icon="eyeClosed"
          validation="required"
          :validation-messages="{required:'Contraseña es requerido.'}"
          @suffix-icon-click="ToggleShowPassword"
        />
      </FormKit>

      <p class="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
        Not a member?
        {{ ' ' }}
        <router-link to="register" aria-label="Registrar nuevo usuario" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">Register free.</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import {reset} from '@formkit/vue';

import myText from '@/packages/my-text.vue';

import {useRouter} from 'vue-router';
import {useLogin} from '@/stores/auth/login';
import {ToggleShowPassword} from '@/tools/show-password-formkit';

const store = useLogin()
const router = useRouter()

const onSubmit = async () =>{
  const success = await store.AuthLogin()

  if(success){
    reset("login-user")

    router.push({name:"dashboard"})
  }
}
</script>

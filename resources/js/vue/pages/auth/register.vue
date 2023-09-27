<template>
  <div class="flex min-h-full sm:min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm text-gray-900 dark:text-white flex items-center gap-3">
      <router-link to="login" aria-label="Volver a login">
        <div class="cursor-pointer p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full ease-in duration-75">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
        </div>
      </router-link>

      <my-text>Registrar</my-text>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <FormKit
        id="register-user"
        type="form"
        label="register"
        form-class="space-y-6"
        v-model="store.form"
        :incomplete-message="false"
        :ignore="true"
        @submit="onSubmit"
      >
        <FormKit 
          type="text"
          label="Fullname"
          name="name"
          autocomplete="name"
          placeholder="Nombre completo"
          validation="required"
          :validation-messages="{required:'Nombre es requerido.'}"
        />

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

        <FormKit
          type="password"
          label="Repeat password"
          name="password_confirmation"
          placeholder="Repita su contraseña"
          suffix-icon="eyeClosed"
          validation="required|confirm:password"
          :validation-messages="{required:'Repetir la contraseña.'}"
          @suffix-icon-click="ToggleShowPassword"
        />
      </FormKit>
    </div>
  </div>
</template>

<script setup>
import { reset } from '@formkit/core'

import myText from '@/packages/my-text.vue';
import myInput from '@/packages/my-input.vue';
import myButton from '@/packages/my-button.vue';
import myFormItem from '@/packages/my-form-item.vue';

import {useRegister} from '@/stores/auth/register';
import {RegisterUser} from '@/services/AuthServices';
import {ToggleShowPassword} from '@/tools/show-password-formkit';

const store = useRegister()

const onSubmit = async (data) => {
  const success = await store.Register(data)

  if(success){
    reset("register-user")
  }
}
</script>

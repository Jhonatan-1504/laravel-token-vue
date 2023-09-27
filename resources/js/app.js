import {createApp} from 'vue'
import {createPinia} from 'pinia';
import {plugin, defaultConfig} from '@formkit/vue'
import formkitConfig from '@/formkit.config';
import router from '@/router/index';

import App from './vue/App.vue'

const pinia = createPinia()

createApp(App)
.use(pinia)
.use(plugin,defaultConfig(formkitConfig))
.use(router)
.mount("#app")
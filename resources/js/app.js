import './bootstrap';

import {createApp} from 'vue'
import router from '@/router/index';

import App from './vue/App.vue'

createApp(App).use(router).mount("#app")
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;

import './assets/main.css'
import './fonts/fontawesome/css/all.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

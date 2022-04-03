import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import App from './App.vue'
import i18n from './i18n'

import router from './router'
import './scss/main.scss'

const app = createApp(App)


const pinia = createPinia()
pinia.use(piniaPersist)

app.use(i18n)
app.use(pinia)
app.use(router)

app.mount('#app')

import './style.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import Meows from './MeowsList.vue'
import router from './router'

const pinia = createPinia()

createApp(Meows).use(pinia).use(router).mount('meows-list')

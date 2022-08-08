import './style.css'

import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'

import LayoutIndex from './components/Layout/LayoutIndex.vue'
import router from './router'
import { initHost } from './utils'

initHost()

const pinia = createPinia()
pinia.use(piniaPluginPersistedState)
createApp(LayoutIndex).use(pinia).use(router).mount('meows-list')

import './style.css'

import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'

import IndexPage from './pages/IndexPage.vue'
import router from './router'
import { initHost } from './utils'

initHost()

const pinia = createPinia()
pinia.use(piniaPluginPersistedState)
createApp(IndexPage).use(pinia).use(router).mount('meows-list')

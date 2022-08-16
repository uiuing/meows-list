import './style.css'

import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'

import LayoutIndex from './components/Layout/LayoutIndex.vue'
import router from './router'
import { initHost } from './utils'

//mavon-editor
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
//mavon-editor


initHost()

const pinia = createPinia()
pinia.use(piniaPluginPersistedState)
createApp(LayoutIndex).use(pinia).use(router).use(mavonEditor).mount('meows-list')
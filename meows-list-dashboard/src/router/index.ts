import { createRouter, createWebHashHistory } from 'vue-router'

import notesRouter from '../components/Notes/notesRouter'
import tasksRouter from '../components/Tasks/tasksRouter'

const routes: Array<any> = [
  {
    path: '/',
    redirect: '/tasks'
  },
  { ...tasksRouter },
  { ...notesRouter }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

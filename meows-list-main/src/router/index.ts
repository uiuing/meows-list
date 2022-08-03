import { createRouter, createWebHashHistory } from 'vue-router'

import notesRouter from '../components/Notes/notesRouter'
import tasksRouter from '../components/Tasks/tasksRouter'
import viewsRouter from '../components/Views/viewsRouter'

const routes: Array<any> = [
  {
    path: '/',
    redirect: '/tasks'
  },
  { ...tasksRouter },
  { ...viewsRouter },
  { ...notesRouter }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

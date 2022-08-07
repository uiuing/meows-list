import { useMobile } from '../../hooks'
import DesktopIndex from './Desktop/DesktopIndex.vue'
import MobileIndex from './Mobile/MobileIndex.vue'

const isMobile = useMobile()

const tasksRouter: Record<string, any> = {
  path: '/tasks',
  name: 'tasks',
  component: isMobile ? MobileIndex : DesktopIndex
}

export default tasksRouter

import { isMobile } from '../../hooks/location'
import DesktopIndex from './Desktop/DesktopIndex.vue'
import MobileIndex from './Mobile/MobileIndex.vue'

const tasksRouter: Record<string, any> = {
  path: '/tasks',
  name: 'tasks',
  component: isMobile() ? MobileIndex : DesktopIndex
}

export default tasksRouter

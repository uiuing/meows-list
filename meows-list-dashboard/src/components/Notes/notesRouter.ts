import { useMobile } from '../../hooks'
import DesktopIndex from './Desktop/DesktopIndex.vue'
import MobileIndex from './Mobile/MobileIndex.vue'

const isMobile = useMobile()

const notesRouter: Record<string, any> = {
  path: '/notes',
  name: 'notes',
  component: isMobile.value ? MobileIndex : DesktopIndex
}

export default notesRouter

import NoteIcon from './svg/NoteIcon.vue'
import SettingIcon from './svg/SettingIcon.vue'
import SyncIcon from './svg/SyncIcon.vue'
import TaskFinishIcon from './svg/TaskFinishIcon.vue'

export interface NavOptions {
  [index: number]: {
    className: string
    routerName?: string
    optionName?: string
    component: any
    description: string
  }
}

export const routerOption: NavOptions = [
  {
    className: 'svg-finish',
    routerName: 'tasks',
    component: TaskFinishIcon,
    description: '待办'
  },
  {
    className: 'svg-note',
    routerName: 'notes',
    component: NoteIcon,
    description: '随记'
  }
]

export const moreOption: NavOptions = [
  {
    className: 'svg-sync',
    optionName: 'sync',
    component: SyncIcon,
    description: '同步'
  },
  {
    className: 'svg-setting',
    optionName: 'setting',
    component: SettingIcon,
    description: '设置'
  }
]

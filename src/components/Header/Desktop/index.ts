import { useLocationHash } from '../../../hooks'
import { moreOption, NavOptions, routerOption } from '../common/option'

export const locationHash = useLocationHash()

interface NavModules {
  [index: number]: NavOptions
}

export const modules: NavModules = [routerOption, moreOption]

export function openRouter(routerName: string | undefined) {
  if (routerName) {
    locationHash.set(routerName)
  }
}

export function openOption(optionName: string | undefined) {
  if (optionName) {
    // TODO : 同步和设置按钮的点击事件
    // eslint-disable-next-line no-console
    console.log(optionName)
  }
}

/* eslint-disable no-unused-vars */

import { effect, reactive, Ref, ref, UnwrapRef } from 'vue'

export function useMobile(): Ref<UnwrapRef<boolean>> {
  const isMobile = ref(false)
  effect(() => {
    const isMobileUserAgent =
      /Android|iPhone|iPod|BlackBerry|MicroMessenger|IEMobile|Opera Mini|iPad|WebOS/i.test(
        window.navigator.userAgent
      )
    const { innerWidth, innerHeight } = window
    const isEricScreen = innerWidth > innerHeight
    isMobile.value = isMobileUserAgent && isEricScreen
  })
  return isMobile
}

interface LocationHash {
  name: string

  get(): string

  set(newHash: string): void
}

export function useLocationHash(): LocationHash {
  const hash = reactive<LocationHash>({
    name: '',
    get: () => {
      const _ = window.location.hash
      if (_) {
        return _.includes('#/') ? _.replace('#/', '') : _
      }
      return 'tasks'
    },
    set: (newHash: string) => {
      window.location.hash = `#/${newHash}`
    }
  })
  hash.name = hash.get()
  window.addEventListener('hashchange', () => {
    hash.name = hash.get()
  })
  return hash
}

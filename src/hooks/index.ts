/**
 * @description Determine if it is a non-mobile device, ipads and WebOS excluded.
 * @return {boolean}
 */
import { effect, Ref, ref, UnwrapRef } from 'vue'

// eslint-disable-next-line import/prefer-default-export
export const useMobile = (): Ref<UnwrapRef<boolean>> => {
  const isMobile = ref(false)
  effect(() => {
    const isMobileUserAgent =
      /Android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        window.navigator.userAgent
      )
    const isMobileScreenWidth = window.screen.width < 600
    isMobile.value = isMobileUserAgent && isMobileScreenWidth
  })
  return isMobile
}

/**
 * @description Determine if it is a non-mobile device, ipads and WebOS excluded.
 * @return {boolean}
 */
// eslint-disable-next-line import/prefer-default-export
export const isMobile = (): boolean =>
  /Android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )

// eslint-disable-next-line import/prefer-default-export
export function initScreen() {
  const { innerHeight } = window
  const initData = {
    height: '',
    margin: ''
  }
  if (innerHeight > 1024) {
    initData.height = '950px'
    initData.margin = '6vh 0'
  } else {
    initData.height = `${innerHeight - 30}px`
    initData.margin = '15px 0'
  }
  const d = document.documentElement.style
  d.setProperty('--desktop-auto-margin', initData.margin)
  d.setProperty('--desktop-auto-height', initData.height)
}

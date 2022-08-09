// eslint-disable-next-line import/prefer-default-export
export function initHost(): void {
  const { hostname } = window.location
  const meowsHost = 'd-meows.uiuing.com'
  if (hostname !== meowsHost && hostname !== 'localhost') {
    window.location.replace(`https://${meowsHost}`)
  }
}

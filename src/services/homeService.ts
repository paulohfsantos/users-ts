export const homeService = {
  getHomeMsg() {
    let message = 'Welcome to the home route'
    return { msg: message }
  },

  getPingMsg() {
    let message = 'pong'
    return { msg: message }
  }
}
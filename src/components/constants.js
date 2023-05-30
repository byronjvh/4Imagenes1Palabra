export const GAME_STATUS = Object.freeze({
  INIT: 'Init',
  PLAYING: 'Playing',
  WON: 'Won',
  OVER: 'Over'
})

export const GAME_STATE = {
  status: GAME_STATUS.INIT,
  inputValue: '',
  currentWord: '',
  currentUrls: [],
  completedWords: [
  ]
}

import { createContext, useEffect, useState } from 'react'
import { useWord } from '../hooks/useWord'
import Words from '../service/Words.json'
import Keys from '../service/Keys.json'
import { GAME_STATE, GAME_STATUS } from '../components/constants'
import Header from '../components/Header'
import useKeydown from '../hooks/useKeydown'
import { clamp } from '../utils/clamp'
import Over from '../components/Over'
import WonModal from '../components/WonModal'
import Start from '../components/Start'
import Images from '../components/images/Images'
import Input from '../components/input/Input'
import Keyboard from '../components/keyboard/Keyboard'

export const globalContext = createContext()

export function Game () {
  const [gameState, setGameState] = useState(() => {
    const gameStateFromLocalStorage = JSON.parse(window.localStorage.getItem('gameState'))
    if (gameStateFromLocalStorage) return gameStateFromLocalStorage
    return GAME_STATE
  })
  const { word, imagesUrls } = useWord(Words, gameState.completedWords, gameState.status)
  const [currentFocus, setCurrentFocus] = useState(0)
  const [incorrect, setIncorrect] = useState(false)

  useEffect(() => {
    if (gameState.currentWord || gameState.status === GAME_STATUS.WON) return

    let gameStateToLocalStorage = gameState

    if (typeof word === 'undefined') {
      setGameState({ ...gameState, status: GAME_STATUS.OVER })
      gameStateToLocalStorage = { ...gameState, status: GAME_STATUS.OVER }
    } else {
      setGameState({
        ...gameState,
        currentWord: word,
        currentUrls: imagesUrls
      })

      gameStateToLocalStorage = {
        ...gameState,
        currentWord: word,
        currentUrls: imagesUrls
      }
    }

    window.localStorage.setItem('gameState', JSON.stringify(gameStateToLocalStorage))
  }, [word])

  useKeydown(handleKeyDown)

  function handleKeyDown (e) {
    const key = e.key.toUpperCase()
    onKeyPressed(key)
  }

  const onKeyPressed = (key) => {
    if (gameState.status !== GAME_STATUS.PLAYING) return
    const { currentWord, inputValue } = gameState

    if (key === 'BACKSPACE' && inputValue.length > 0) {
      onDelete()
      return
    }

    if (key === 'ENTER' && inputValue.length === currentWord.length) {
      onEnter()
      return
    }

    if (inputValue.length >= currentWord.length) return

    if (Keys.includes(key)) {
      onInput(key)
    }
  }

  function onInput (key) {
    const { currentWord, inputValue } = gameState
    const newValue = inputValue + key

    setCurrentFocus(clamp(inputValue.length + 1, 0, currentWord.length - 1))
    setGameState({ ...gameState, inputValue: newValue })
  }

  function onDelete () {
    const { currentWord, inputValue } = gameState
    const newValue = inputValue.slice(0, -1)

    setCurrentFocus(clamp(inputValue.length - 1, 0, currentWord.length - 1))
    setGameState({ ...gameState, inputValue: newValue })
  }

  function onEnter () {
    if (gameState.inputValue === gameState.currentWord) {
      const correctWord = gameState.currentWord

      setGameState({
        ...gameState,
        status: GAME_STATUS.WON,
        completedWords: [...gameState.completedWords, correctWord]
      })

      const gameStateToLocalStorage = {
        ...gameState,
        currentWord: word,
        currentUrls: imagesUrls,
        status: GAME_STATUS.WON,
        completedWords: [...gameState.completedWords, correctWord]
      }

      window.localStorage.setItem('gameState', JSON.stringify(gameStateToLocalStorage))
    } else {
      setIncorrect(true)
    }
  }

  function startGame () {
    setGameState({ ...gameState, status: GAME_STATUS.PLAYING })
  }

  function resetGame () {
    setGameState({
      ...gameState,
      status: GAME_STATUS.PLAYING,
      inputValue: '',
      currentWord: '',
      currentUrls: []
    })

    setCurrentFocus(0)
  }

  function resetIncorrect () {
    setIncorrect(false)
  }

  function deleteData () {
    window.localStorage.removeItem('gameState')
    window.localStorage.removeItem('userData')
    setGameState({
      ...gameState,
      status: GAME_STATUS.INIT,
      completedWords: [],
      inputValue: '',
      currentWord: '',
      currentUrls: []
    })
  }

  return (
    <globalContext.Provider value={{ gameState, currentFocus, onKeyPressed, incorrect, resetIncorrect }}>
      <Header />
      <main className='main'>
        {
          (gameState.status === GAME_STATUS.INIT) && (
            <Start onStart={startGame} />
          )
        }
        {
          ((gameState.status === GAME_STATUS.PLAYING) || (gameState.status === GAME_STATUS.WON)) && (
            <>
              <Images />
              <Input />
              <Keyboard />
            </>
          )
        }
        {
          gameState.status === GAME_STATUS.WON && <WonModal currentWord={gameState.currentWord} onClick={resetGame} />
        }
        {
          gameState.status === GAME_STATUS.OVER && <><Over /><button onClick={deleteData} className='button'>¿Reiniciar?</button></>
        }
      </main>
    </globalContext.Provider>
  )
}

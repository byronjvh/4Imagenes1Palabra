import { useEffect, useState } from 'react'
import { GAME_STATUS } from '../components/constants'
import { getRandomWord } from '../utils/getRandomWord'

export function useWord (words, completedWords, status) {
  const [wordWithUrls, setWordWithUrls] = useState({ word: '', imagesUrls: [] })

  useEffect(() => {
    if (status !== GAME_STATUS.PLAYING) return

    const newWord = getRandomWord(words, completedWords)
    setWordWithUrls(newWord)
  }, [words, completedWords, status])

  return wordWithUrls
}

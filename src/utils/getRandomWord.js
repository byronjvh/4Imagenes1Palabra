export function getRandomWord (words, completedWords) {
  const filteredWords = words.filter(el => !completedWords.includes(el.word.toUpperCase()))

  if (filteredWords.length < 1) return { word: undefined, imagesUrls: [] }

  const randomIndex = Math.floor(Math.random() * filteredWords.length)
  const wordWithUrls = { word: filteredWords[randomIndex].word.toUpperCase(), imagesUrls: filteredWords[randomIndex].urls }

  return wordWithUrls
}

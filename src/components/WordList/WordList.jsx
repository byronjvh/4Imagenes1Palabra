import { useEffect, useState } from 'react'
import ListItem from './ListItem'

function WordList ({ completedWords }) {
  const [isOddNumber, setIsOddNumber] = useState(false)

  useEffect(() => {
    if (completedWords.length % 2 !== 0) {
      setIsOddNumber(true)
    } else setIsOddNumber(false)
  }, [completedWords])

  return (
    <div className='list__container'>
      <ul className='list'>
        <div className='list__title'>
          <h3 className='title'>Palabras completadas</h3>
        </div>
        {
          completedWords?.map((word, index) => (
            <ListItem
              className={isOddNumber && completedWords.length - 1 === index ? 'full-width' : ''}
              key={index}
              word={word}
            />
          ))
        }
      </ul>
    </div>
  )
}

export default WordList

import { useContext, useEffect } from 'react'
import { globalContext } from '../../context/GlobalContext'
import './Input.css'
import InputField from './inputField.jsx'

function Input () {
  const { gameState, currentFocus, incorrect, resetIncorrect } = useContext(globalContext)

  useEffect(() => {
    if (incorrect) {
      setTimeout(() => {
        resetIncorrect()
      }, 500)
    }
  }, [incorrect])
  return (
    <section className='input__container'>
      <h3 className='title'>¿Qué ves?</h3>
      <div className={`input${incorrect ? ' incorrect' : ''}`}>
        {
          gameState.currentWord?.split('').map((_, index) => (
            <InputField key={index} index={index} currentFocus={currentFocus}>
              {gameState.inputValue[index]}
            </InputField>
          ))
        }
      </div>
    </section>
  )
}

export default Input

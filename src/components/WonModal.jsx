import { createPortal } from 'react-dom'
import './WonModal.css'
import { useEffect, useRef } from 'react'

function WonModal ({ currentWord, onClick }) {
  const modalButtonRef = useRef()

  useEffect(() => {
    modalButtonRef.current.focus()
  }, [])

  return createPortal(
    <div className='modal__overlay'>
      <div className='wonModal'>
        <h3 className='title'>¡Correcto!</h3>
        <div className='wonModal__word'>
          {
           currentWord.split('').map((letter, index) => (
             <span key={index} className={`letter letter-${index}`}>
               {letter}
             </span>
           ))
          }
        </div>
        <button ref={modalButtonRef} className='button' onClick={onClick}>Siguiente</button>
      </div>
    </div>,
    document.getElementById('portal')
  )
}

export default WonModal

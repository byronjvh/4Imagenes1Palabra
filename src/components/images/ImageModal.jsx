import './ImageModal.css'
import { createPortal } from 'react-dom'
import { HiX } from 'react-icons/hi'
import { useEffect, useRef } from 'react'

function ImageModal ({ imageUrl, onClose }) {
  const ref = useRef(null)

  useEffect(() => {
    function handleClickOutside (event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose()
      }
    }

    // Bind the event listener
    window.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      window.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, onClose])

  return createPortal(
    <div className='modal__overlay'>
      <div ref={ref} className='imageModal'>
        <button className='imageModal__button' onClick={onClose}><HiX /></button>
        <img className='imageModal__img' src={imageUrl} />
      </div>
    </div>,
    document.getElementById('portal')
  )
}

export default ImageModal

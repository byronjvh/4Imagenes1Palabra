import { createPortal } from 'react-dom'
import { HiX } from 'react-icons/hi'
import Footer from './Footer'
import './Help.css'

function Help ({ onClose }) {
  return createPortal(
    <section className='help'>
      <button className='help__close' onClick={onClose}><HiX /></button>
      <div className='help__howTo'>
        <h2 className='title'>¿Cómo se juega?</h2>
        <p className='paragraph'>Aparecerán 4 imágenes y deberás adivinar la palabra a la que hacen referencia.</p>
        <button className='button' onClick={() => onClose(false)}>¡Entendido!</button>
      </div>
      <Footer />
    </section>,
    document.getElementById('portal')
  )
}

export default Help

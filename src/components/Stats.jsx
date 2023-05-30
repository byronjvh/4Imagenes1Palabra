import { createPortal } from 'react-dom'
import { HiX } from 'react-icons/hi'
import Footer from './Footer'
import './Stats.css'
import WordList from './WordList/WordList'

function Stats ({ completedWords, onClose }) {
  return createPortal(
    <section className='stats'>
      <button className='stats__close' onClick={onClose}><HiX /></button>
      <div className='stats__container'>
        <h2 className='title'>Estadísticas</h2>
        <WordList completedWords={completedWords} />
      </div>
      <Footer />
    </section>,
    document.getElementById('portal')
  )
}

export default Stats

import './Header.css'
import { FaQuestion } from 'react-icons/fa'
import { IoIosStats } from 'react-icons/io'
import { useContext, useState } from 'react'
import Stats from './Stats'
import Help from './Help'
import { globalContext } from '../context/GlobalContext'

const TITLE = '4Imágenes1Palabra'

function Header () {
  const { gameState } = useContext(globalContext)
  const [openStats, setOpenStats] = useState(false)
  const [openHelp, setOpenHelp] = useState(false)

  return (
    <>
      <header className='header'>
        <span style={{ display: 'flex', gap: '.5rem' }}>
          <button onClick={() => setOpenStats(true)} className='header__button'><IoIosStats fontSize='22px' /></button>
        </span>
        <h1 className='header__title'>
          {
           TITLE.split('').map((letter, index) => (
             <span key={index}>{letter}</span>
           ))
          }
        </h1>
        <button onClick={() => setOpenHelp(true)} className='header__button'><FaQuestion /></button>
      </header>
      {
        openStats && (
          <Stats completedWords={gameState.completedWords} onClose={() => setOpenStats(false)} />
        )
      }
      {
        openHelp && (
          <Help onClose={() => setOpenHelp(false)} />
        )
      }
    </>
  )
}

export default Header

import './Keyboard.css'
import Keys from '../../service/Keys.json'
import { HiBackspace } from 'react-icons/hi'
import { FaArrowRight } from 'react-icons/fa'
import Key from './Key'
import { useContext } from 'react'
import { globalContext } from '../../context/GlobalContext'

function Keyboard () {
  const { onKeyPressed } = useContext(globalContext)

  function handleInput (e) {
    onKeyPressed(e.target.textContent)
  }

  function handleEnter () {
    onKeyPressed('ENTER')
  }

  function handleDelete () {
    onKeyPressed('BACKSPACE')
  }

  return (
    <section className='keyboard'>
      <div className='keyboard__row'>
        {
          Keys.slice(0, 10).map((key, i) => (
            <Key key={i} onClick={handleInput}>
              {key}
            </Key>
          ))
        }
      </div>
      <div className='keyboard__row'>
        {
          Keys.slice(10, 20).map((key, i) => (
            <Key key={i} onClick={handleInput}>
              {key}
            </Key>
          ))
        }
      </div>
      <div className='keyboard__row'>
        <Key onClick={handleDelete} className='key--delete'>
          <HiBackspace style={{ fontSize: '1.5rem' }} />
        </Key>
        {
          Keys.slice(20, 27).map((key, i) => (
            <Key key={i} onClick={handleInput}>
              {key}
            </Key>
          ))
        }
        <Key onClick={handleEnter} className='key--enter'>
          <FaArrowRight style={{ fontSize: '1.2rem' }} />
        </Key>
      </div>
    </section>
  )
}

export default Keyboard

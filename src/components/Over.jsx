import confetti from 'canvas-confetti'
import { useEffect } from 'react'
import { FaGithub } from 'react-icons/fa'
import './Over.css'

const WINNER = 'WINNER'

function Over () {
  const launchConfetti = (time) => {
    setTimeout(() => {
      confetti({
        particleCount: 50,
        startVelocity: 30,
        spread: 65,
        origin: {
          y: 0.4
        }
      })
    }, time)
  }

  useEffect(() => {
    launchConfetti(1800)
  }, [])

  return (
    <>
      <section className='over'>
        <div className='over__winner'>
          {
          WINNER.split('').map((letter, index) => (
            <span key={index} className={`letter letter-${index}`}>
              {letter}
            </span>
          ))
        }
        </div>
        <h3 className='title'>Has terminado todas las <span style={{ display: 'inline-block' }}>palabras! 🎉</span></h3>
        <a style={{ fontSize: '2.3em' }} href='https://github.com/byronjvh/4Imagenes1Palabra' className='iconLink' title='Visit on GitHub'><FaGithub /></a>
      </section>
    </>
  )
}

export default Over

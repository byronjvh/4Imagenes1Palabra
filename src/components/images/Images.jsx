import { useContext } from 'react'
import { globalContext } from '../../context/GlobalContext'
import Image from './Image'
import './Images.css'

function Images () {
  const { gameState } = useContext(globalContext)

  return (
    <section className='images'>
      <div className='images__container'>
        {
          gameState.currentUrls.map((url, index) => (
            <Image key={index} url={url} />
          ))
        }
      </div>
      <span className='images__site'>
        Imágenes por
        <a className='images__site--link' target='_blank' href='https://unsplash.com/' rel='noopener noreferrer'>
          <img
            className='images__site--img'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Unsplash_wordmark_logo.svg/2560px-Unsplash_wordmark_logo.svg.png'
            alt='Unsplash'
          />
        </a>
      </span>
    </section>
  )
}

export default Images

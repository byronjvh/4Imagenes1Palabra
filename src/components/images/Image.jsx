import { useState } from 'react'
import ImageModal from './ImageModal'

function Image ({ url }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <img
        onClick={() => setIsOpen(true)}
        className='images__img'
        src={url}
        alt=''
      />

      {
        isOpen && <ImageModal imageUrl={url} onClose={() => setIsOpen(false)} />
      }
    </>
  )
}

export default Image

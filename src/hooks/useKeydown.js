import { useEffect } from 'react'

function useKeydown (callback) {
  useEffect(() => {
    window.addEventListener('keydown', callback)

    return () => window.removeEventListener('keydown', callback)
  })
}

export default useKeydown

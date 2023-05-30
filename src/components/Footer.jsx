import { FaGithub } from 'react-icons/fa'

function Footer () {
  return (
    <footer className='footer'>
      <span>Hecho por <a href='https://github.com/byronjvh' target='_blank' rel='noopenner noreferrer' className='footer__link'>Byron</a></span>
      <a style={{ display: 'block' }} href='' className='iconLink' title='Visit on GitHub'><FaGithub /></a>
    </footer>
  )
}

export default Footer

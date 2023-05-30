import './Start.css'

function Start ({ onStart }) {
  return (
    <section className='start'>
      <div className='start__text'>
        <h3 className='title'>¿Cómo se Juega?</h3>
        <p className='paragraph'>Aparecerán 4 imágenes y deberás adivinar la palabra a la que hacen referencia.</p>
      </div>
      <button className='button' onClick={onStart}>¡Jugar!</button>
    </section>
  )
}

export default Start

function ListItem ({ word, className }) {
  return (
    <li className={`list__item ${className ?? ''}`}>
      <div className='list__item__word'>
        <p>{word}</p>
      </div>
    </li>
  )
}

export default ListItem

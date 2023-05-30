function Key ({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`key ${className || ''}`}
    >
      {children}
    </button>
  )
}

export default Key

function InputField ({ currentFocus, index, children }) {
  return (
    <div className={`input__field${currentFocus === index ? ' focus' : ''}`}>
      <span className={`input__value${children ? ' hasValue' : ''}`}>{children}</span>
    </div>
  )
}

export default InputField

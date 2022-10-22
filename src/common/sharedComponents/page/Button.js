export function TextButton (props) {
  return (
    <button 
      className="button-text"
      type={props.type}
      disabled={props.disabled || false}
    >
      {props.children}
      <p>{props.text}</p>
    </button>
  )
}

export function IconButton (props) {
  return (
    <button 
      className="button-icon"
      type={props.type}
      disabled={props.disabled || false}
    >
      {props.children}
    </button>
  )
}
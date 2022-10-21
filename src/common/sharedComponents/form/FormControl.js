export default function FormControl (props) {
  return(
    <div className="form-control">
      <label htmlFor={props.name}>
        {props.children}
      </label>
      <input
        type={props.type}
        id={props.name}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  )
}
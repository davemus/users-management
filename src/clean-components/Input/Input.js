import './Input.css';

function Input(props) {
  return (
    <input className="cinereousInput" id={props.id} name={props.name} type={props.type || 'text'}
      defaultValue={props.defaultValue} pattern={props.pattern} title={props.title}
      maxLength={props.maxlength} required={props.required}/>
  )
}

export default Input;

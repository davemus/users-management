import './Input.css'
import PropType from 'prop-types'

function Input(props) {
  return (
    <input className="cinereousInput" id={props.id} name={props.name} type={props.type || 'text'}
      defaultValue={props.defaultValue || ''} pattern={props.pattern} title={props.title}
      maxLength={props.maxlength} required={props.required}/>
  )
}

Input.propTypes = {
  id: PropType.string.isRequired,
  name: PropType.string.isRequired,
  type: PropType.string,
  defaultValue: PropType.string,
  pattern: PropType.string,
  title: PropType.string,
  maxlength: PropType.number,
  required: PropType.bool,
}

export default Input

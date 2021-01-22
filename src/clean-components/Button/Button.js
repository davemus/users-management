import './Button.css'
import PropTypes from 'prop-types'

function Button(props) {
  let className = 'cinereousButton clickable'
  if (props.active) {
    className += ' active'
  }
  return (
    <button className={className} onClick={props.onClick} type={props.type || 'button'}>
      {props.text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
}

export default Button

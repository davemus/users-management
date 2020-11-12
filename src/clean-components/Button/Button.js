import './Button.css';
import PropTypes from 'prop-types';

function Button(props) {
  let className = 'cinereousButton clickable';
  if (props.active) {
    className += ' active';
  }
  return (
    <button className={className} onClick={props.onClick}>
      {props.text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func,
}

export default Button;

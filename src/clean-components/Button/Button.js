import './Button.css';

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

export default Button;
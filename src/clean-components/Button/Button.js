import './Button.css';

function Button(props) {
    return (
        <button className="cinereousButton" onClick={props.onClick}>{props.text}</button>
    )
}

export default Button;
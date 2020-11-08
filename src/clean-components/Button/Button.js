import './Button.css';

function Button(props) {
    return (
        <button className="cinereousButton" type={props.type}>{props.text}</button>
    )
}

export default Button;
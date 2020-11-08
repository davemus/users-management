import './UserForm.css';
import Button from '../Button/Button.js';
import { useParams } from 'react-router-dom';

export function Input(props) {
  const id = 'user-form-input-' + props.name;
  return (
    <div className="field-wrapper">
      <label htmlFor={id}>
        {props.text}
      </label>
      <br />
      <input id={id} name={props.name} type={props.type || 'text'} required/>
      <br />
    </div>
  )
}

function formToDataRow(id, form) {
  return [
    id,
    form.email.value,
    form.username.value,
    form.firstname.value,
    form.lastname.value,
  ];
}

function UserForm(props) {
  const { id } = useParams();

  function onSubmit($event) {
    $event.preventDefault();
    props.onFormSubmit(formToDataRow(id, $event.target));
  }

  return (
    <form className="cinereousForm" onSubmit={onSubmit}>
      <Input name="email" type="email" text="Email" />
      <Input name="username" text="Username" />
      <Input name="firstname" text="First Name" />
      <Input name="lastname" text="Last Name" />
      <Button text="Submit" />
    </form>
  )
}

export default UserForm;

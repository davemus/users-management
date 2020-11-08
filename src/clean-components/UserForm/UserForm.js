import './UserForm.css';
import Button from '../Button/Button.js';
import { useParams } from 'react-router-dom';

export function Input(props) {
  const id = 'user-form-input-' + props.name;
  console.log(props.value)
  return (
    <div className="field-wrapper">
      <label htmlFor={id}>
        {props.text}
      </label>
      <br />
      <input id={id} name={props.name} type={props.type || 'text'} defaultValue={props.value}
        required/>
      <br />
    </div>
  )
}

function formToUser(form) {
  return {
    'email': form.email.value,
    'username': form.username.value,
    'firstname': form.firstname.value,
    'lastname': form.lastname.value,
  };
}

function UserForm(props) {
  const { id } = useParams();

  function onSubmit($event) {
    $event.preventDefault();
    props.onFormSubmit(id, formToUser($event.target));
  }

  const userOrDummy = props.user !== undefined ? props.user : {};

  return (
    <form className="cinereousForm" onSubmit={onSubmit}>
      <Input name="email" type="email" text="Email" value={userOrDummy.email} />
      <Input name="username" text="Username" value={userOrDummy.username} />
      <Input name="firstname" text="First Name" value={userOrDummy.firstname} />
      <Input name="lastname" text="Last Name" value={userOrDummy.lastname} />
      <Button text="Submit" type="submit" />
    </form>
  )
}

export default UserForm;

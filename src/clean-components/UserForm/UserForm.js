import './UserForm.css';

export function Input(props) {
  const id = 'user-form-input-' + props.name;
  return (
    <div className="field-wrapper">
      <label htmlFor={id}>
        {props.text}
      </label>
      <br />
      <input id={id} name={props.name} type={props.type || 'text'} />
      <br />
    </div>
  )
}

function UserForm() {
  return (
    <form className="cinereousForm">
      <Input name="email" type="email" text="Email" />
      <Input name="username" text="Username" />
      <Input name="firstname" text="First Name" />
      <Input name="lastname" text="Last Name" />
      <button type="submit">Submit</button>
    </form>
  )
}

export default UserForm;

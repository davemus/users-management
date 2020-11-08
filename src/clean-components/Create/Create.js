import { Link } from 'react-router-dom';
import UserForm from '../UserForm/UserForm.js';
import Button from '../Button/Button.js';

function Create(props) {
  return (
    <>
      <Link to="/">
        <Button text="To List Page" />
      </Link>
      <UserForm onFormSubmit={props.onFormSubmit} />
    </>
  )
}

export default Create;

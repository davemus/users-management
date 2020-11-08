import { Link } from 'react-router-dom';
import UserForm from '../UserForm';
import Button from '../Button';

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

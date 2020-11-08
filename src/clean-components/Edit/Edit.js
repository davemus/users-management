import { 
  useParams,
  Link,
} from 'react-router-dom';
import UserForm from '../UserForm/UserForm.js';
import Button from '../Button/Button.js';

function Edit(props) {
  const { id } = useParams();

  return (
    <>
      <h1>Edit works! Id is {id}</h1>
      <Link to="/">
        <Button text="To List Page" />
      </Link>
      <UserForm onFormSubmit={props.onFormSubmit} />
    </>
  )
}

export default Edit;

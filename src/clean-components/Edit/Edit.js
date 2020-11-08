import { 
  useParams,
  Link,
} from 'react-router-dom';
import UserForm from '../UserForm';
import Button from '../Button';

function Edit(props) {
  const { id } = useParams();

  return (
    <>
      <h1>Edit works! Id is {id}</h1>
      <Link to="/">
        <Button text="To List Page" />
      </Link>
      <UserForm user={props.users.find((user) => user['id'].toString() === id)}
        onFormSubmit={props.onFormSubmit} />
    </>
  )
}

export default Edit;

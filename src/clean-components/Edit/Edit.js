import { useParams } from 'react-router-dom';
import UserForm from '../UserForm/UserForm.js';

function Edit() {
  const { id } = useParams();

  return (
    <>
      <h1>Edit works! Id is {id}</h1>
      <UserForm/>
    </>
  )
}

export default Edit;

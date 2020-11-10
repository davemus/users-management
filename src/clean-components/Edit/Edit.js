import { 
  useParams,
} from 'react-router-dom';
import ChangeOrCreatePage from '../ChangeOrCreatePage';

function Edit(props) {
  const { id } = useParams();

  return (
    <ChangeOrCreatePage user={props.users.find((user) => user['id'].toString() === id)}
      onFormSubmit={props.onFormSubmit} />
  )
}

export default Edit;

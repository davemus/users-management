import { 
  useParams,
} from 'react-router-dom';
import ChangeOrCreatePage from '../ChangeOrCreatePage';
import PropType from 'prop-types';
import { UserPropType } from '../common-prop-types';

function Edit(props) {
  const { id } = useParams();

  return (
    <ChangeOrCreatePage user={props.users.find((user) => user['id'].toString() === id)}
      onFormSubmit={props.onFormSubmit} />
  )
}

Edit.propTypes = {
  users: PropType.arrayOf(
    UserPropType,
  )
}

export default Edit;

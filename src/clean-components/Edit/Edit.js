import { 
  useParams,
} from 'react-router-dom'
import { connect } from 'react-redux'
import ChangeOrCreatePage from '../ChangeOrCreatePage'
import PropType from 'prop-types'
import { UserPropType } from '../common-prop-types'
import { updateUser } from '../../store/users'

function mapStateToProps(state) {
  return {
    'users': state.users.users
  }
}

function Edit(props) {
  const { id } = useParams();
  const user = props.users.find((user) => user['id'] === Number(id))

  return (
    <ChangeOrCreatePage user={user} onFormSubmit={(user) => props.updateUser(user)} />
  )
}

Edit.propTypes = {
  users: PropType.arrayOf(
    UserPropType,
  )
}

export default connect(mapStateToProps, { updateUser })(Edit);

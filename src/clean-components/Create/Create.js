import { connect } from 'react-redux'
import { createUser } from '../../store/users'
import ChangeOrCreatePage from '../ChangeOrCreatePage'
import PropType from 'prop-types'

function Create(props) {
  return (
    <ChangeOrCreatePage onFormSubmit={(user) => props.createUser(user)} />
  )
}

Create.propTypes = {
  createUser: PropType.func.isRequired,
}

export default connect(() => {}, { createUser })(Create)

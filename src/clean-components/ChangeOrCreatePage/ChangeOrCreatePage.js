import { withRouter } from 'react-router-dom'
import './ChangeOrCreatePage.css'
import Button from '../Button'
import Input from '../Input'
import {
  useParams,
  Link,
} from 'react-router-dom'
import PropType from 'prop-types'
import { UserPropType } from '../common-prop-types'

export function InputWithLabel(props) {
  const id = 'user-form-input-' + props.name
  return (
    <div className="field-wrapper">
      <label htmlFor={id}>
        {props.text}
      </label>
      <br />
      <Input id={id} name={props.name} type={props.type || 'text'} defaultValue={props.value}
        pattern={props.pattern} title={props.title} maxLength={props.maxlength} required/>
      <br />
    </div>
  )
}

function formToUser(form) {
  return {
    'email': form.email.value,
    'username': form.username.value,
    'firstname': form.firstname.value,
    'lastname': form.lastname.value,
  }
}

function ChangeOrCreatePage(props) {
  const { id } = useParams()

  function onSubmit($event) {
    $event.preventDefault()
    const user = formToUser($event.target)
    if (id) {
      user.id = Number(id)
    }
    props.onFormSubmit(user)
    props.history.push('/')
  }

  const userOrDummy = props.user !== undefined ? props.user : {}

  const USERNAME_REGEX = '[A-z0-9-_$]+'
  const NAME_REGEX = '[A-Z][a-z]+'

  return (
    <>
      <div className="topPanel centered">
        <Link to="/">
          <Button text="To List Page" />
        </Link>
      </div>
      <form className="cinereousForm centered" onSubmit={onSubmit}>
        <InputWithLabel name="email" type="email" text="Email" value={userOrDummy.email} maxlength="100" />
        <InputWithLabel name="username" text="Username" value={userOrDummy.username}
          pattern={USERNAME_REGEX} title="Only letters, digits and symbols -, _, $ are allowed"
          maxlength="10" />
        <InputWithLabel name="firstname" text="First Name" value={userOrDummy.firstname}
          pattern={NAME_REGEX} title="One uppercase and few lowercase letters" maxlength="20"/>
        <InputWithLabel name="lastname" text="Last Name" value={userOrDummy.lastname} pattern={NAME_REGEX} 
          title="One uppercase and few lowercase letters" maxlength="20" />
        <Button text="Submit" type="submit" />
      </form>
    </>
  )
}

ChangeOrCreatePage.propTypes = {
  user: UserPropType,
  onFormSubmit: PropType.func.isRequired,
}

export default withRouter(ChangeOrCreatePage)

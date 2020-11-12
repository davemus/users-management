import ChangeOrCreatePage from '../ChangeOrCreatePage';
import PropType from 'prop-types';

function Create(props) {
  return (
    <ChangeOrCreatePage onFormSubmit={props.onFormSubmit} />
  )
}

Create.propTypes = {
  onFormSubmit: PropType.func.isRequired,
}

export default Create;

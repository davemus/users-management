import ChangeOrCreatePage from '../ChangeOrCreatePage';

function Create(props) {
  return (
    <ChangeOrCreatePage onFormSubmit={props.onFormSubmit} />
  )
}

export default Create;

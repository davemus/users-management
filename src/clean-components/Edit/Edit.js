import { useParams } from 'react-router-dom';

function Edit() {
  const { id } = useParams();

  return (
    <h1>Edit works! Id is {id}</h1>
  )
}

export default Edit;

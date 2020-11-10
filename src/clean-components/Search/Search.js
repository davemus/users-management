import Button from '../Button';
import './Search.css';
import Input from '../Input';

function Search(props) {
  return (
    <form className="searchWrapper" onSubmit={
        (event$) => {
          props.onSearch(
            event$.target.field.value,
            event$.target.search.value
          );
          event$.preventDefault();
      }}>
      <Input name="search" required={false}/>
      <select className="cinereousSelect" name="field">
        <option value="email">Email</option>
        <option value="username">Username</option>
        <option value="firstname">First Name</option>
        <option value="lastname">Last Name</option>
      </select>
      <Button text="Search Users..." />
    </form>
  )
}

export default Search;

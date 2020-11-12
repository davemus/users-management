import Button from '../Button';
import './Search.css';
import Input from '../Input';
import PropType from 'prop-types';

function Search(props) {
  return (
    <form className="searchWrapper" onSubmit={
        (event$) => {
          props.onSearch(
            event$.target.field.value,
            event$.target.search.value
          );
          event$.preventDefault();
      }}
      onReset={props.onResetFilter}>
      { props.search && <Button text="Reset Filters" type="reset" /> }
      <Input id="search-input" name="search" required={true} defaultValue={props.search || ''} />
      <select className="cinereousSelect" name="field" defaultValue={props.searchField} required>
        <option value="email">Email</option>
        <option value="username">Username</option>
        <option value="firstname">First Name</option>
        <option value="lastname">Last Name</option>
      </select>
      <Button text="Search Users..." type="submit" />
    </form>
  )
}

Search.propTypes = {
  onSearch: PropType.func.isRequired,
  onResetFilter: PropType.func.isRequired,
  search: PropType.string,
  searchField: PropType.string,
}

export default Search;

import { connect } from 'react-redux'
import Button from '../Button'
import './Search.css'
import Input from '../Input'
import { setFilter, unsetFilter } from '../../store/filter'

const mapStateToProps = (state) => {
  return {
    search: state.search,
    searchField: state.searchField,
  }
}

function Search(props) {
  const onReset = event$ => {
    props.unsetFilter()
  }
  const onSubmit = event$ => {
    event$.preventDefault()
    props.setFilter(
      event$.target.search.value,
      event$.target.field.value,
    )
  }
  return (
    <form className="searchWrapper" onSubmit={onSubmit} onReset={onReset}>
      <Button text="Reset Filters" type="reset" />
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

export default connect(mapStateToProps, { setFilter, unsetFilter })(Search);

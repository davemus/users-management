import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom' 

import { zip } from '../../utils'
import './TablePage.css'
import Button from '../Button'
import Search from '../Search'
import Pagination from '../Pagination'
import PropType from 'prop-types'
import { setPage } from '../../store/pagination'
import { setFilter, unsetFilter } from '../../store/filter'


function TableHeaderRow(props) {
  const row = zip(props.data, props.fieldNames)
  return (
    <tr>
      {row.map(([cell, name]) => <th key={name + row[0]}>{cell}</th>)}
    </tr>
  )
}

TableHeaderRow.propTypes = {
  data: PropType.arrayOf(PropType.string),
  fieldNames: PropType.arrayOf(PropType.string),
}

function TableRow(props) {
  const row = zip(props.data, props.fieldNames)
  return (
    <tr onClick={props.toDetails} className="clickable">
      {row.map(([cell, name]) => <td key={name}>{cell}</td>)}
    </tr>
  )
}

TableRow.propTypes = {
  data: PropType.arrayOf(PropType.string),
  fieldNames: PropType.arrayOf(PropType.string),
  toDetails: PropType.func,
}

function Table(props) {
  props = props.outerProps
  const fieldNames = props.headerRow.map((str) => str.toLowerCase())

  if (props.rows.length < 1) {
    return (
      <div className="noData">
        <p>
          No users were found, matching your search, or server is offline.
          Please reset your search filters.
          If it doesn&apos;t work, refer to maintainer.
        </p>
      </div>
    )
  }

  return (
    <>
      <table className="cinereousTable">
        <thead>
          <TableHeaderRow data={props.headerRow} fieldNames={fieldNames} />
        </thead>
        <tbody>
          {props.rows.map((row) =>
            <TableRow key={row.id} data={row.data} fieldNames={fieldNames}
              toDetails={() => props.history.push(`/edit/${row.id}`)} />
          )}
        </tbody>
      </table>
      <Pagination onPaginate={props.onPaginate} maxPageNumber={props.maxPageNumber}
        pageNumber={props.pageNumber}>
      </Pagination>
    </>
  )
}

Table.propTypes = {
  headerRow: PropType.arrayOf(
    PropType.string,
  ),
  rows: PropType.arrayOf(
    PropType.exact({
      id: PropType.number,
      data: PropType.array,
    })
  ),
  pageNumber: PropType.number.isRequired,
  maxPageNumber: PropType.number.isRequired,
  history: PropType.func.isRequired,
}

function userToTableRow(user) {
  return {
    id: user['id'],
    data: [
      user['id'],
      user['email'],
      user['username'],
      user['firstname'],
      user['lastname'],
    ]
  }
}

function mapStateToProps(state) {
  const sliceStart = state.pagination.limit * state.pagination.page
  const sliceEnd = sliceStart + state.pagination.limit
  const usersFilter = user => user[state.filter.searchField].includes(state.filter.search)
  const filteredUsers = state.users.users.filter(usersFilter)
  return {
    'rows': filteredUsers.map(userToTableRow).slice(sliceStart, sliceEnd),
    'maxPageNumber': Math.ceil(filteredUsers.length / state.pagination.limit),
    'headerRow': ['ID', 'Email', 'Username', 'First Name', 'Last Name'],
  }
}

function TablePage(props) {
  return (
    <>
      <div className="topPanel">
        <Link to="/create">
          <Button text="Create User" />
        </Link>
        <Search />
      </div>
      <Table outerProps={props} />
    </>
  )
}

TablePage.propTypes = Table.propTypes

export default withRouter(connect(mapStateToProps, {setPage, setFilter, unsetFilter})(TablePage))

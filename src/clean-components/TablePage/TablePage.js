import { Link } from 'react-router-dom';
import { zip } from '../../utils';
import './TablePage.css';
import Button from '../Button';
import Search from '../Search';
import Pagination from '../Pagination';
import PropType from 'prop-types';


function TableHeaderRow(props) {
  const row = zip(props.data, props.fieldNames)
  return (
    <tr>
      {row.map(([cell, name]) => <th key={name + row[0]}>{cell}</th>)}
    </tr>
  )
}

function TableRow(props) {
  const row = zip(props.data, props.fieldNames)
  return (
    <tr onClick={props.toDetails} className="clickable">
      {row.map(([cell, name]) => <td key={name}>{cell}</td>)}
    </tr>
  )
}

function Table(props) {
  props = props.outerProps;
  const fieldNames = props.headerRow.map((str) => str.toLowerCase());

  if (props.rows.length < 1) {
    return (
      <div className="noData">
        <p>
          No users were found, matching your search, or server is offline.
          Please reset your search filters.
          If it doesn't work, refer to maintainer.
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
              toDetails={() => props.toDetails(row.id)} />
          )}
        </tbody>
      </table>
      <Pagination onPaginate={props.onPaginate} maxPageNumber={props.maxPageNumber}
        pageNumber={props.pageNumber}>
      </Pagination>
    </>
  )
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

TablePage.propTypes = {
  headerRow: PropType.arrayOf(
    PropType.string,
  ),
  rows: PropType.arrayOf(
    PropType.exact({
      id: PropType.number,
      data: PropType.array,
    })
  ),
  pageNumber: PropType.number,
  maxPageNumber: PropType.number,
}

export default TablePage;

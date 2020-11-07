import { Link } from 'react-router-dom';
import { zip } from '../../utils';
import './Table.css';
import Button from '../Button/Button.js';

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
    <Link to={'/edit/' + props.data[0]}>
      {row.map(([cell, name]) => <td key={name}>{cell}</td>)}
    </Link>
  )
}

function Table(props) {
  const fieldNames = props.headerRow.map((str) => str.toLowerCase());

  return (
    <>
      <Link to="/create">
        <Button text="Create User" />
      </Link>
      <table className="cinereousTable">
        <thead>
          <TableHeaderRow data={props.headerRow} fieldNames={fieldNames} />
        </thead>
        <tbody>
          {props.rows.map((row) => <TableRow key={row[0]} data={row} fieldNames={fieldNames} />)}
        </tbody>
      </table>
    </>
  )
}

export default Table;

import { zip } from '../../utils';
import './Table.css';

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
    <tr>
      {row.map(([cell, name]) => <td key={name}>{cell}</td>)}
    </tr>
  )
}

function Table(props) {
  const fieldNames = props.headerRow.map((str) => str.toLowerCase());

  return (
    <table className="cinereousTable">
      <thead>
        <TableHeaderRow data={props.headerRow} fieldNames={fieldNames} />
      </thead>
      <tbody>
        {props.rows.map((row) => <TableRow key={row[0]} data={row} fieldNames={fieldNames} />)}
      </tbody>
    </table>
  )
}

export default Table;

import './Table.css'

function TableHeaderRow(props) {
  return (
    <tr>
      {props.data.map((cell) => <th>{cell}</th>)}
    </tr>
  )
}

function TableRow(props) {
  return (
    <tr>
      {props.data.map((cell) => <td>{cell}</td>)}
    </tr>
  )
}

function Table(props) {
  return (
    <table className="cinereousTable">
      <thead>
        <TableHeaderRow data={props.headerRow} />
      </thead>
      <tbody>
        {props.rows.map((row) => <TableRow key={row[0]} data={row} />)}
      </tbody>
    </table>
  )
}

export default Table;

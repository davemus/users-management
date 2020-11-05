import './App.css';


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
    <table>
      <TableHeaderRow data={props.headerRow}/>
      {props.rows.map((row) => <TableRow data={row}/>)}
    </table>
  )
}

const headerRow = ['ID', 'Email', 'Username', 'First Name', 'Last Name'];
const rows = [
  [1, 'sonya.hohlovskaia@gmail.com', 'supersofa', 'Sonia', 'Hohlovskaia'],
  [2, 'viktoria.simpleyarova@gmail.com', 'vivi', 'Viktoria', 'Simpleyarova'],
  [3, 'dmitriy.gordovitiy@yandex.com', 'dimon', 'Dmitriy', 'Gordovitiy'],
];

function App() {
  return (
    <Table headerRow={headerRow} rows={rows}/>
  )
}

export default App;

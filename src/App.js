import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link,
} from "react-router-dom";


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
        <TableHeaderRow data={props.headerRow}/>
      </thead>
      <tbody>
        {props.rows.map((row) => <TableRow data={row}/>)}
      </tbody>
    </table>
  )
}

const headerRow = ['ID', 'Email', 'Username', 'First Name', 'Last Name'];
const rows = [
  [1, 'sonya.hohlovskaia@gmail.com', 'supersofa', 'Sonia', 'Hohlovskaia'],
  [2, 'viktoria.simpleyarova@gmail.com', 'vivi', 'Viktoria', 'Simpleyarova'],
  [3, 'dmitriy.gordovitiy@yandex.com', 'dimon', 'Dmitriy', 'Gordovitiy'],
];

function Edit() {
  const { id } = useParams();

  return (
    <h1>Edit works! Id is {id}</h1>
  )
}

function Create() {
  return (
    <h1>Create works!</h1>
  )
}

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">List</Link>
          </li>
          <li>
            <Link to="/edit/1">Edit 1</Link>
          </li>
          <li>
            <Link to="/create">Create</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/edit/:id">
          <Edit />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/">
          <Table headerRow={headerRow} rows={rows}/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;

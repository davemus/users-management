import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import {
  Create,
  Edit,
  Table,
} from './clean-components'

const headerRow = ['ID', 'Email', 'Username', 'First Name', 'Last Name'];
const rows = [
  [1, 'sonya.hohlovskaia@gmail.com', 'supersofa', 'Sonia', 'Hohlovskaia'],
  [2, 'viktoria.simpleyarova@gmail.com', 'vivi', 'Viktoria', 'Simpleyarova'],
  [3, 'dmitriy.gordovitiy@yandex.com', 'dimon', 'Dmitriy', 'Gordovitiy'],
];

function App() {
  return (
    <Router>
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

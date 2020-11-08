import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {
  Create,
  Edit,
  Table,
} from './clean-components'
import React from 'react';
import { copy } from './utils';

const headerRow = ['ID', 'Email', 'Username', 'First Name', 'Last Name'];
const initialusers = {
  1: [1, 'sonya.hohlovskaia@gmail.com', 'supersofa', 'Sonia', 'Hohlovskaia'],
  2: [2, 'viktoria.simpleyarova@gmail.com', 'vivi', 'Viktoria', 'Simpleyarova'],
  3: [3, 'dmitriy.gordovitiy@yandex.com', 'dimon', 'Dmitriy', 'Gordovitiy']
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastId: 3,
      users: copy(initialusers),
    }
  }

  onFormSubmit(dataRow) {
    let id = dataRow[0];
    let newLastId = this.state.lastId + 1;
    let newUsers = copy(this.state.users);
    if (id === undefined) {
      id = newLastId;
      dataRow[0] = id;
    }
    if (id !== newLastId && !(id in newUsers)) {
      alert("Probably you've ventured wrong route");
      return;
    }
    newUsers[id] = dataRow;
    this.setState({
      users: newUsers,
      lastId: newLastId,
    })
  }

  render() {
    const rows = Object.values(this.state.users);
    return (
      <Router>
        <Switch>
          <Route path="/edit/:id">
            <Edit onFormSubmit={this.onFormSubmit.bind(this)} />
          </Route>
          <Route path="/create">
            <Create onFormSubmit={this.onFormSubmit.bind(this)}/>
          </Route>
          <Route path="/">
            <Table headerRow={headerRow} rows={rows}/>
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;

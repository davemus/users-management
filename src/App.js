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
import UsersService from './UsersService';
import UserForm from "./clean-components/UserForm/UserForm";

const headerRow = ['ID', 'Email', 'Username', 'First Name', 'Last Name'];
const initialusers = {
  1: [1, 'sonya.hohlovskaia@gmail.com', 'supersofa', 'Sonia', 'Hohlovskaia'],
  2: [2, 'viktoria.simpleyarova@gmail.com', 'vivi', 'Viktoria', 'Simpleyarova'],
  3: [3, 'dmitriy.gordovitiy@yandex.com', 'dimon', 'Dmitriy', 'Gordovitiy'],
}


function userToTableRow(user) {
  return [
    user['id'],
    user['email'],
    user['username'],
    user['firstname'],
    user['lastname'],
  ];
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastId: 3,
      users: [],
    }
  }
  
  componentDidMount() {
    this.reloadUsers();
  }

  reloadUsers() {
    UsersService.list().then((users) => {
      this.setState({'users': users})
    });
  }

  onUpdate(id, user) {
    UsersService.update(id, user).then(() => this.reloadUsers());
  }

  onCreate(__, user) {
    UsersService.create(user).then(() => this.reloadUsers());
  }

  render() {
    const rows = this.state.users.map(userToTableRow);
    return (
      <Router>
        <Switch>
          <Route path="/edit/:id">
            <Edit onFormSubmit={this.onUpdate.bind(this)} />
          </Route>
          <Route path="/create">
            <Create onFormSubmit={this.onCreate.bind(this)}/>
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

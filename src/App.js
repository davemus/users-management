import {
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import {
  Create,
  Edit,
  Table,
} from './clean-components';
import React from 'react';
import UsersService from './UsersService';


const headerRow = ['ID', 'Email', 'Username', 'First Name', 'Last Name'];


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
    UsersService.update(id, user).then(() => {
      this.reloadUsers();
      this.props.history.push('/');
    });
  }

  onCreate(__, user) {
    UsersService.create(user).then(() => {
      this.reloadUsers();
      this.props.history.push('/');
    });
  }

  render() {
    const rows = this.state.users.map(userToTableRow);
    return (
      <Switch>
        <Route path="/edit/:id">
          <Edit onFormSubmit={this.onUpdate.bind(this)} users={this.state.users} />
        </Route>
        <Route path="/create">
          <Create onFormSubmit={this.onCreate.bind(this)}/>
        </Route>
        <Route path="/">
          <Table headerRow={headerRow} rows={rows}/>
        </Route>
      </Switch>
    )
  }
}

export default withRouter(App);

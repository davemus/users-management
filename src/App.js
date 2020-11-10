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
      users: [],
      search: null,
      searchField: null,
      pageSize: 2,
      pageNumber: 1,
      maxPageNumber: null,
    }
  }
  
  componentDidMount() {
    this.reloadUsers();
  }

  reloadUsers() {
    UsersService.list({
      'searchField': this.state.searchField,
      'search': this.state.search,
    },
    {
      'pageSize': this.state.pageSize,
      'page': this.state.pageNumber,
    }).then(([users, maxPageNumber]) => {
      this.setState({
        'users': users,
        'maxPageNumber': maxPageNumber,
      })
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

  onSearch(fieldName, searchString) {
    this.setState({
      'searchField': fieldName,
      'search': searchString
    }, this.reloadUsers);
  }

  onPaginate(pageNumber) {
    this.setState({'pageNumber': pageNumber}, this.reloadUsers);
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
          <Table headerRow={headerRow} rows={rows} onSearch={this.onSearch.bind(this)}
            onPaginate={this.onPaginate.bind(this)} maxPageNumber={this.state.maxPageNumber}
          />
        </Route>
      </Switch>
    )
  }
}

export default withRouter(App);

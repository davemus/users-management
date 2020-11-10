import {
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import {
  Create,
  Edit,
  Table,
  Footer,
} from './clean-components';
import React from 'react';
import UsersService from './UsersService';
import Loader from 'react-loader-spinner'


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
      pageSize: 10,
      pageNumber: 1,
      maxPageNumber: null,
      loading: false,
    }
  }
  
  componentDidMount() {
    this.reloadUsers();
  }

  reloadUsers() {
    this.setState({loading: true}, () =>
      {
        UsersService.list({
          searchField: this.state.searchField,
          search: this.state.search,
        },
        {
          pageSize: this.state.pageSize,
          page: this.state.pageNumber,
        }).then(([users, maxPageNumber]) => {
          this.setState({
            users: users,
            maxPageNumber: maxPageNumber,
            loading: false,
          })
        });
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

  onToDetails(id) {
    this.props.history.push(`/edit/${id}`)
  }

  render() {
    const rows = this.state.users.map(userToTableRow);
    return (
      <>
        <div class="loaderWrapper">
          <Loader
            type="ThreeDots"
            color="#948473"
            height={100}
            width={100}
            visible={this.state.loading}
          />
        </div>
        <div class="paddingWrapper">
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
                toDetails={this.onToDetails.bind(this)} pageNumber={this.state.pageNumber}
              />
            </Route>
          </Switch>
        </div>
        <Footer />
      </>
    )
  }
}

export default withRouter(App);

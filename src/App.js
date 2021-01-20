import {
  Switch,
  Route,
  withRouter,
} from "react-router-dom"
import {
  Create,
  Edit,
  TablePage,
  Footer,
} from './clean-components'
import React from 'react'
import { connect } from 'react-redux'
import UsersService from './UsersService'
import Loader from 'react-loader-spinner'


const headerRow = ['ID', 'Email', 'Username', 'First Name', 'Last Name'];


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
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
    // this.setState({loading: true}, () =>
    //   {
    //     UsersService.list(
    //       {
    //         searchField: this.props.searchField,
    //         search: this.props.search,
    //       },
    //       {
    //         pageSize: this.state.pageSize,
    //         page: this.state.pageNumber,
    //       },
    //     ).then(([users, maxPageNumber]) => {
    //       this.setState({
    //         users: users,
    //         maxPageNumber: maxPageNumber,
    //         loading: false,
    //       })
    //     }).catch(() => this.setState({'loading': false}));
    //   });
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

  onPaginate(pageNumber) {
    this.setState({'pageNumber': pageNumber}, this.reloadUsers);
  }

  onToDetails(id) {
    this.props.history.push(`/edit/${id}`)
  }

  onResetFilter() {
    this.setState({
      search: null,
      searchField: null,
    }, () => {
      this.reloadUsers();
    });
  }

  render() {
    this.reloadUsers()
    return (
      <>
        <div className="loaderWrapper">
          <Loader
            type="ThreeDots"
            color="#948473"
            height={100}
            width={100}
            visible={this.state.loading}
          />
        </div>
        <div className="paddingWrapper">
          <Switch>
            <Route path="/edit/:id">
              <Edit onFormSubmit={this.onUpdate.bind(this)} users={this.state.users} />
            </Route>
            <Route path="/create">
              <Create onFormSubmit={this.onCreate.bind(this)}/>
            </Route>
            <Route path="/">
              <TablePage headerRow={headerRow} toDetails={this.onToDetails.bind(this)} />
            </Route>
          </Switch>
        </div>
        <Footer />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    search: state.search,
    searchField: state.searchField,
  }
}

export default connect(mapStateToProps, {})(withRouter(App));

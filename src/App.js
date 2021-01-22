import {
  Switch,
  Route,
  withRouter,
} from 'react-router-dom'
import {
  Create,
  Edit,
  TablePage,
  Footer,
} from './clean-components'
import React from 'react'
import Loader from 'react-loader-spinner'


class App extends React.Component {
  render() {
    return (
      <>
        <div className="loaderWrapper">
          <Loader
            type="ThreeDots"
            color="#948473"
            height={100}
            width={100}
            visible={false}
          />
        </div>
        <div className="paddingWrapper">
          <Switch>
            <Route path="/edit/:id">
              <Edit />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/">
              <TablePage />
            </Route>
          </Switch>
        </div>
        <Footer />
      </>
    )
  }
}

export default withRouter(App)

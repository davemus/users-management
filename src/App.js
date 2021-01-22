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


class App extends React.Component {
  render() {
    return (
      <>
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

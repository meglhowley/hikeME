import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import MoreInfo from './pages/MoreInfo'
import Contribute from './pages/Contribute'
import { withRouter } from 'react-router-dom'

class App extends Component {
  render() {
    console.log('testing123')
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            component={(reactRouterProps) => <Home {...reactRouterProps} />}
          />
          <Route
            exact
            path="/search"
            component={(reactRouterProps) => <Search {...reactRouterProps} />}
          />
          <Route
            exact
            path="/search/more-info/:id"
            component={(reactRouterProps) => <MoreInfo {...reactRouterProps} />}
          />
          <Route
            exact
            path="/contribute"
            component={(reactRouterProps) => (
              <Contribute {...reactRouterProps} />
            )}
          />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)

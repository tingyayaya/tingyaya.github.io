import React, {Component} from 'react'
import { hot } from 'react-hot-loader';
import { HashRouter as Router, Switch, Route, Link, withRouter, Redirect} from "react-router-dom";

import routes from '@/routes/routes'
import RouteWithSubRoutes from '@/untils/RouteWithSubRoutes'



import '@/css/normalize.css'
import '@/css/app.scss'

require('bootstrap');

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
          <Route path="/" exact={true} render={(props) => <Redirect to='/yimei' />}/>
          <Route path="/error" render={(props) => <div><h1>404 Not Found!</h1></div>}/>
          <Route path="*" render={(props) => <Redirect to='/error'/>}/>
        </Switch>
      </Router>
    )
  }
}

export default hot(module)(App)
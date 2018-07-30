import * as React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Rainbow, AllColors } from './components/Colors/'
import Wallet from './components/Wallet/'
import { locations } from './locations'

export default class Routes extends React.Component {
  renderRoutes() {
    return (
      <Switch>
        <Route exact={true} path={locations.root()} component={Rainbow} />
        <Route exact={true} path={locations.all()} component={AllColors} />
        <Redirect to={locations.root()} />
      </Switch>
    )
  }

  render() {
    return <Wallet>{this.renderRoutes()}</Wallet>
  }
}

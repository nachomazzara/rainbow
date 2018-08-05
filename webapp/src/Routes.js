import * as React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Rainbow, AllColors } from './components/Colors/'
import NewColor from './components/NewColor/'
import Wallet from './components/Wallet/'
import { locations } from './locations'

export default class Routes extends React.Component {
  renderRoutes() {
    return (
      <Switch>
        <Route exact={true} path={locations.root()} component={AllColors} />
        <Route exact={true} path={locations.rainbow()} component={Rainbow} />
        <Route exact={true} path={locations.new()} component={NewColor} />
        <Redirect to={locations.root()} />
      </Switch>
    )
  }

  render() {
    return <Wallet>{this.renderRoutes()}</Wallet>
  }
}

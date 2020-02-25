import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from './LandingPage'

export default class Routes extends React.Component {
  render () {
    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    )
  }
}

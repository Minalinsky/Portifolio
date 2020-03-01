import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from './LandingPage'
import AboutPage from './AboutPage'

export default class Routes extends React.Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/about' component={AboutPage} />
      </Switch>
    )
  }
}

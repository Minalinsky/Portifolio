import React from 'react'
import { Grid, Cell } from 'react-mdl'

import '../Styles/LandingPage.css'
import ProfileImage from '../img/profile.jpg'

export default class LandingPage extends React.Component {
  render () {
    return (
      <div className="landingContainer">
        <Grid>
          <Cell col={12}>
            <img src={ProfileImage} id="profileImg"/>
          </Cell>
        </Grid>
      </div>
    )
  }
}

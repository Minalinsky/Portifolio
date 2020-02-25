import React from 'react'
import { Grid, Cell, ProgressBar } from 'react-mdl'

import '../Styles/LandingPage.css'
import ProfileImage from '../img/profile.jpg'
import { findByLabelText } from '@testing-library/react'

export default class LandingPage extends React.Component {
  render() {
    return (
      <div className="landingContainer">
        <Grid>
          <Cell col={12}>
            <img src={ProfileImage} id="profileImg" />
            <div className="description">
              <h1> Back-End Developer </h1>
              <ProgressBar indeterminate  style={{width: "75%", opacity: "200%"}} />
              <h4> REST APIs | NodeJS | MySQL</h4>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

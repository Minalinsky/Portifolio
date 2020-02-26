import React from 'react'
import { Grid, Cell, ProgressBar } from 'react-mdl'
import ProfileCard from '../Components/ProfileCard'

import '../Styles/LandingPage.css'
import { findByLabelText } from '@testing-library/react'

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hardSkills: [
        'REST APIs',
        'NodeJS',
        'MySQL'
      ]
    }
  }
  render() {
    return (
      <div className="landingContainer">
        <Grid>
          <Cell col={12}>
            <ProfileCard />

            <div className="descriptionStyle description">
              <h1> Back-End Developer </h1>
              <ProgressBar indeterminate style={{ width: "75%" }} />
              <h4> {this.state.hardSkills.join(' • ')}</h4>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

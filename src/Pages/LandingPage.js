import React from 'react'
import { Grid, Cell, ProgressBar, Button } from 'react-mdl'
import ProfileCard from '../Components/ProfileCard'

import '../Styles/LandingPage.css'

import githubIcon from '../img/icons/github.svg'
import gitlabIcon from '../img/icons/gitlab.svg'
import linkedinIcon from '../img/icons/linkedin.svg'

export default class LandingPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hardSkills: [
        'REST APIs',
        'NodeJS',
        'MySQL'
      ],
      socialMediaIcons: [gitlabIcon, githubIcon, linkedinIcon]
    }
  }
  render () {
    return (
      <div className='landingContainer'>
        <Grid>
          <Cell col={12}>
            <ProfileCard />
            <div className='descriptionStyle description'>
              <h1> Back-End Developer </h1>
              <ProgressBar indeterminate style={{ width: '75%' }} />
              <h4> {this.state.hardSkills.join(' • ')}</h4>
              <div className='socialMedia'>
                {this.state.socialMediaIcons.map(icon => (
                  <Button ripple accent className='socialButton'>
                    <img src={icon} />
                  </Button>
                ))}
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

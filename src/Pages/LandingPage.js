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
      socialMediaIcons: [
        {
          icon: gitlabIcon,
          url: 'https://gitlab.com/alyson1907'
        },
        {
          icon: githubIcon,
          url: 'https://github.com/Minalinsky'
        },
        {
          icon: linkedinIcon,
          url: 'https://www.linkedin.com/in/alysonmaruyama/'
        }
      ]
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
                {this.state.socialMediaIcons.map(({ icon, url }) => (
                  <Button ripple accent className='socialButton' onClick={() => window.open(url)}>
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

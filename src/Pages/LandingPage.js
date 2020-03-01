import React from 'react'
import { Grid, Cell, ProgressBar, Button } from 'react-mdl'
import { Spring } from 'react-spring/renderprops'
import ProfileCard from '../Components/ProfileCard'

import '../Styles/Pages/LandingPage.css'

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
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ duration: 800 }}>
          {props => (
            <Grid style={props}>
              <Cell col={12} style={{ height: '89vh' }}>
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
          )}
        </Spring>
      </div>
    )
  }
}

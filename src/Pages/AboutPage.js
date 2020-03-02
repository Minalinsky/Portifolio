import React from 'react'

import { Grid } from 'react-mdl'
import { Spring } from 'react-spring/renderprops'
import TechCell from '../Components/TechnologyCard'

import '../Styles/Pages/AboutPage.css'

// Importing logos for technologies
const requiredContext = require.context('../img/techs', false, /\.(png|jpe?g|svg|jpg)$/)
const logos = requiredContext.keys().map(requiredContext)

export default class AboutPage extends React.Component {
  render () {
    return (
      <div className='description aboutContainer'>
        <h4> Algumas Tecnologias: </h4>
        <Grid className='aboutGrid'>
          {logos.map(logo => (
            <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ duration: 1800 }}>
              {props => <TechCell techLogo={logo} animation={props} />}
            </Spring>
          ))}
        </Grid>
      </div>

    )
  }
}

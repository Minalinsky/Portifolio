import React from 'react'
import { Cell } from 'react-mdl'

import '../Styles/Components/TechnologyCard.css'

export default class TechnologyCard extends React.Component {
  render () {
    return (
      <Cell col={4} className='techCell' style={this.props.animation}>
        <img src={this.props.techLogo} className='techLogo' />
      </Cell>

    )
  }
}

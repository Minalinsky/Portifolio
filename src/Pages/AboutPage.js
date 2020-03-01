import React from 'react'

import { Grid, Cell } from 'react-mdl'

export default class AboutPage extends React.Component {
  render () {
    return (
      <div style={{display: 'flex', alignItems: 'center'}}>
        <Grid className='description' style={{width: '50%', border: 'black solid 3px'}}>
          <Cell col={4} style={{ border: 'black solid 3px' }}>
            

          </Cell>
        </Grid>
      </div>

    )
  }
}

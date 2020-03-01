import React from 'react'
import { ProgressBar } from 'react-mdl'
import { Spring } from 'react-spring/renderprops'

import ProfileImage from '../img/profile.jpg'
import '../Styles/Components/ProfileCard.css'

// Images
import name from '../img/icons/name.svg'
import email from '../img/icons/email.svg'
import phone from '../img/icons/phone.svg'

export default class ProfileCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      icons: [
        name,
        email,
        phone
      ],
      info: [
        'Alyson Matheus Maruyama Nascimento',
        'alyson1907@gmail.com',
        '(17)98187-3019'
      ],
      description: 'Sou apaixonado por programação e estudar assuntos referentes à tecnologia!'
    }
  }

  render () {
    return (
      <Spring from={{ marginTop: -500 }} to={{ marginTop: 0 }} config={{ duration: 700 }}>
        {props => (
          <div className='profileCardContainer' style={props}>
            <img src={ProfileImage} id='profileImg' />
            <div className='description' id='personalInfoBox'>
              <table id='personalInfoTable'>
                {this.state.icons.map((icon, index) => {
                  return (
                    <tr>
                      <td>
                        <img src={icon} className='profileIcon' />
                      </td>
                      <td className='profileTextCell'>
                        <p>{this.state.info[index]}</p>
                      </td>
                    </tr>
                  )
                })}
              </table>
              <ProgressBar buffer={0} id='progressBar' />
              <p style={{ padding: '4%' }}>{this.state.description}</p>
            </div>
          </div>
        )}
      </Spring>

    )
  }
}

import React from 'react'

import ProfileImage from '../img/profile.jpg'
import '../Styles/ProfileCard.css'
import '../Styles/LandingPage.css'

// Images
import name from '../img/icons/name.svg'
import email from '../img/icons/email.svg'
import phone from '../img/icons/phone.svg'
import { findByLabelText } from '@testing-library/react'

export default class ProfileCard extends React.Component {
  constructor(props) {
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
      description: 'Apaixonado por programação e tecnologia!'
    }
  }

  render() {
    return (
      <div className="profileCardContainer">
        <img src={ProfileImage} id="profileImg" />
        <div className="description" id="personalInfoBox">
          <table id="personalInfoTable">
            {this.state.icons.map((icon, index) => {
              return (
                <tr>
                  <td>
                    <img src={icon} className="profileIcon" />
                  </td>
                  <td className="profileTextCell">
                    <p>{this.state.info[index]}</p>
                  </td>
                </tr>
              )
            })}
          </table>
        </div>
      </div>
    )
  }
}

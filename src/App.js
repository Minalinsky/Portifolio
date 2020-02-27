import React from 'react'
import { Layout, Header, Navigation, Content } from 'react-mdl'
import { Link } from 'react-router-dom'
import './Styles/App.css'
import LandingPage from './Pages/LandingPage'

const linkStyle = {
  fontSize: '20px'
}

const getTitle = () => {
  return (
    <h4 style={{margin: 'auto'}}> Alyson Maruyama </h4>
  )
}

function App () {
  return (
    <div>
      <Layout>
        {/* Header */}
        <Header transparent title={getTitle()} className='headerContainer'>
          <Navigation>
            <Link to='/' style={linkStyle}>Início</Link>
            <Link to='/about' style={linkStyle}>Sobre</Link>
          </Navigation>
        </Header>

        {/* Body */}
        <Content id='Content'>
          <LandingPage />
        </Content>
      </Layout>
    </div>
  )
}

export default App

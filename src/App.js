import React from 'react'
import { Layout, Header, Navigation, Content } from 'react-mdl'
import { Link } from 'react-router-dom'
import './Styles/App.css'
import LandingPage from './Pages/LandingPage'

function App () {
  return (
    <div>
      <Layout>
        {/* Header */}
        <Header transparent title='Alyson Maruyama' className='headerContainer'>
          <Navigation>
            <Link to='/'>Início</Link>
            <Link to='/about'>Sobre</Link>
          </Navigation>
        </Header>

        {/* Body */}
        <Content>
          <LandingPage />
        </Content>
      </Layout>
    </div>
  )
}

export default App

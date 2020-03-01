import React from 'react'
import { Layout, Header, Navigation, Content } from 'react-mdl'
import { Link } from 'react-router-dom'
import './Styles/App.css'
import Routes from './Pages/routes'

const getTitle = () => {
  return (
    <Link to='/' id='headerTitle' style={{ textDecoration: 'none' }}> Alyson Maruyama </Link>
  )
}

function App () {
  return (
    <div>
      <Layout>
        {/* Header */}
        <Header transparent title={getTitle()} className='headerContainer'>
          <Navigation>
            <Link to='/' className='navLink'>Início</Link>
            <Link to='/about' className='navLink'>Sobre</Link>
          </Navigation>
        </Header>

        {/* Body */}
        <Content id='Content'>
          <div className='background' />
          <Routes />
        </Content>
      </Layout>
    </div>
  )
}

export default App

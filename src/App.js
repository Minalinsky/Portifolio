import React from 'react'
import { Layout, Header, Navigation, Content } from 'react-mdl'
import { Link } from 'react-router-dom'
import './Styles/Pages/App.css'
import Routes from './Pages/routes'

const linksStyle = {
  title: {
    margin: 'auto',
    color: 'white',
    textDecoration: 'none'
  },
  navLinks: {
    fontSize: '20px'
  }
}

const getTitle = () => {
  return (
    <Link to='/' style={linksStyle.title}> Alyson Maruyama </Link>
  )
}

function App () {
  return (
    <div>
      <Layout>
        {/* Header */}
        <Header transparent title={getTitle()} className='headerContainer'>
          <Navigation>
            <Link to='/' style={linksStyle.navLinks}>Início</Link>
            <Link to='/about' style={linksStyle.navLinks}>Sobre</Link>
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

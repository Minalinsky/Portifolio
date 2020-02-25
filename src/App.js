import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import { Link } from 'react-router-dom'
import './Styles/App.css';
import LandingPage from './Pages/LandingPage'

function App() {
  return (
    <div>
      <Layout>
        <Header transparent title="Alyson Maruyama" className="headerContainer">
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </Navigation>
        </Header>
        <Content>
          <LandingPage/>
        </Content>
      </Layout>
    </div>
  )
}

export default App;

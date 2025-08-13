import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import {Layout,Typography,Space} from 'antd'
import  NavBar  from './components/navbar';
import Home from './components/home';
import Exchanges from './components/exchanges';
import Cryptocurrencies from './components/cryptocurrencies';
import CryptoDetails from './components/cryptodetails';
import News from './components/news';


import './App.css'



function App() {
  return(
  <div className='app'>
    <div className='navbar'>
      <NavBar/>
    </div>
    <div className='main'>
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/exchanges" element={<Exchanges/>}/>
            <Route path="/cryptocurrencies" element={<Cryptocurrencies/>}/>
            <Route path="/crypto/:coinId" element={<CryptoDetails/>}/>
            <Route path="/news" element={<News/>}/>
          </Routes>
        </Layout>
    <div className='footer'>
          <Typography.Title level={5} style={{color:'white',textAlign:'center'}}>
              Cryptoverse <br/>
              All Rights Reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>

      </div>
    </div>
  </div>
  )
}

export default App

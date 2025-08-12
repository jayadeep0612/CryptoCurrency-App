import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import {Layout,Typography,Space} from 'antd'
import  NavBar  from './components/navbar';
import './App.css'


function App() {
  return(
  <div className='app'>
    <div className='navbar'>
      <NavBar/>
    </div>
    <div className='main'>

    </div>
    <div className='footer'>

    </div>
  </div>
  )
}

export default App

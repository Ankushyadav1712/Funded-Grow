import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./index.css"
import "./Style.css"
import React from 'react'

import Login from './assets/Pages/Login'
import Register from './assets/Pages/Register'
import Homepage from './Home/Homepage'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Dashboard from './Dashboard/Dashboard'


const App = () => {
  return (
    <div>
      <Homepage/>
      
      
      {/* <Register></Register>
      <Login></Login> */}
    </div>
  )
}

export default App;
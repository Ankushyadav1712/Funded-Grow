import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Home/Homepage'
import Login from './assets/Pages/Login.jsx'
import Register from './assets/Pages/Register.jsx'
import About from './About/About.jsx'
import Pricing from './Pricing/Pricing.jsx'
import Support from './Support/Support.jsx'
import  Calculator  from './Calculator/Calculator.jsx'
import DashboardPage from './Dashboard/DashboardPage.jsx'
import Home from './Dashboard/Home.jsx'


createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/pricing' element={<Pricing />}></Route>
      <Route path='/support' element={<Support />}></Route>
      <Route path='/calculate' element={<Calculator />}></Route>
      <Route path='/' element={<DashboardPage/>}></Route>
      <Route path='/*' element={<Home/>}></Route>
      

    </Routes>
  </BrowserRouter>

  // <StrictMode>
  //   <App />

  // </StrictMode>,
)

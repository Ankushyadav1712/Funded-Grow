import React from 'react'
import Watchlist from './Watchlist'
import { Route, Routes } from 'react-router-dom'
import Summary from './Summary'
import Orders from './Orders'
import Holding from './Holding'
import Positions from './Positions'
import Funds from './Funds'
import Topbar from './Topbar'

const Dashboard = () => {
  return (
    <>
    <div className='dashboard-container'>
        <Watchlist/>
        <div className="content">
            <Routes>
                {/* <Route path='/sum' element={<Summary/>}/> */}
                <Route path='/orders' element={<Orders/>}/>
                <Route path='/holding' element={<Holding/>}/>
                <Route path='/positions' element={<Positions/>}/>
                <Route path='/funds' element={<Funds/>}/>
                <Route path='/summary' element={<Summary/>}/>

            </Routes>
        </div>
    </div>
    </>
  )
}

export default Dashboard
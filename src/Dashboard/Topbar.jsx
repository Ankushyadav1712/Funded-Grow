import Menu from './Menu'
import React from 'react'
// import './Topbar.css';

const Topbar = () => {
  return (
    <div className='topbar-container w-full'>
        {/* <div className="indicies-container">
            <div className="nifty">
                <p className='index'>Nifty 50</p>
                <p className='index-points'>{100.2}</p>
                <p className='percent'></p>
            </div>
            <div className="sensex">
                <p className='index'>Sensex</p>
                <p className='index-points'>{100.2}</p>
                <p className='percent'></p>
            </div>
        </div> */}
        <Menu/>
    </div>


    
  )
}

export default Topbar
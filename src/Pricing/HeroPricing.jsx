import React from 'react'
import img1 from '../assets/Equity Pricing.svg'
import img2 from '../assets/Intraday Trades.svg'

const HeroPricing = () => {
  return (
    <div className='container'>
        <div className="row mt-5 p-5 border-bottom text-center">
            <h1>Pricing</h1>
            <h3 className='fs-5 mt-3'>Free equity investments and flat ₹20 intraday and F&O trades</h3>
        </div>
        <div className="row p-5 mt-5 text-center">
            <div className="col-4 p-5">
                <img src={img1} alt="" />
                <h1>Free equity delivery</h1>
                <p>
                All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
                </p>
            </div>
            <div className="col-4 p-5">
            <img src={img2} alt="" />
                <h1>Intraday and F&O trades</h1>
                <p>
                Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
                </p>
            </div>
            <div className="col-4 p-5">
            <img src={img1} alt="" />
                <h1>Free direct MF</h1>
                <p>
                All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
                </p>
            </div>
        </div>
    </div>
  )
}

export default HeroPricing
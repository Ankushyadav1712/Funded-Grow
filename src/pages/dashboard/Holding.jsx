import React from 'react'

import { holdings1 } from '../../helper/data'
const Holding = () => {
  return (
    <>
        <h3 className="title">Holding ({holdings1.length})</h3>

        <div className="order-table">
            <table>
                <tr>
                    <th>Instrument</th>
                    <th>Qty.</th>
                    <th>Avg.cost</th>
                    <th>LTP</th>
                    <th>Cur. val</th>
                    <th>P&L</th>
                    <th>Net chg.</th>
                    <th>Daily chg.</th>
                </tr>
                {holdings1.map((stock,index)=>{
                    const curValue = stock.price*stock.qty;
                    const isProfit  = curValue - stock.avg * stock.qty>=0.0;
                    const porfClass = isProfit ? "profit": "loss";
                    const dayClass = stock.isLoss ? 'loss':'profit';

                    return(
                        <tr key={index}>
                        <td>{stock.name}</td>
                        <td>{stock.qty}</td>
                        <td>{stock.avg.toFixed(2)}</td>
                        <td>{stock.price.toFixed(2)}</td>
                        <td>{curValue.toFixed(2)}</td>
                        <td className={porfClass}>{(curValue-stock.qty*stock.price.toFixed(2))}</td>
                        <td className={porfClass}>{stock.net}</td>
                        <td className={porfClass}>{stock.day}</td>
                    </tr>
                    )
                })}
            </table>
        </div>

        <div className="row">
            <div className="col">
                <h5>
                    29,875.<span>55</span>{" "}
                </h5>
                <p>Total Investement</p>
            </div>
            <div className="col">
                <h5> 31,428.<span>95</span>{" "}</h5>
                <p>Current Value</p>
            </div>
            <div className="col">
                <h5>1,553.40 (+5.20%)</h5>
                <p>P&L</p>
            </div>
        </div>
    </>
  )
}

export default Holding
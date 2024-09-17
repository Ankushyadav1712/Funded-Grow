import React from "react";
import { positions } from "../Data/data";



const Positions = () => {
  return (
    <>
      <h3 className="title1">Positions ({positions.length}) </h3>
      {/* ({positions.length}) above use for position legth  */}
      <div className="order-table">
      <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {positions.map((stock,index)=>{
                    const curValue = stock.price*stock.qty;
                    const isProfit  = curValue - stock.avg * stock.qty>=0.0;
                    const porfClass = isProfit ? "profit": "loss";
                    const dayClass = stock.isLoss ? 'loss':'profit';

                    return(
                    <tr key={index}>
                        <td>{stock.product}</td>
                        <td>{stock.name}</td>
                        <td>{stock.qty}</td>
                        <td>{stock.avg.toFixed(2)}</td>
                        <td>{stock.price.toFixed(2)}</td>
                        <td className={porfClass}>{(curValue-stock.qty*stock.price.toFixed(2))}</td>

                        <td className={porfClass}>{stock.day}</td>
                    </tr>
                    )
                })}
        </table>
      </div>



        
    </>
  )
}

export default Positions;

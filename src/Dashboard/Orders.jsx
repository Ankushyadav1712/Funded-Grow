import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { stockData } from "../Data/data";

import Watchlist from "./Watchlist";

const Orders = ({ Orders }) => {
    const [orderData,setOrderData] = useState([]);
    useEffect(()=>{
        setOrderData(...stockData)
        console.log("orde",orderData)
    },stockData)

  return (
    <div className="table-container">
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-gray-300">Stocks</th>
            <th className="px-4 py-2 border border-gray-300">Qty</th>
            <th className="px-4 py-2 border border-gray-300">Order Type</th>
            <th className="px-4 py-2 border border-gray-300">Price</th>
          </tr>
        </thead>
        <tbody>
          {stockData.map((stock, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border border-gray-300">{stock.name}</td>
              <td className="px-4 py-2 border border-gray-300">{stock.qty}</td>
              <td className="px-4 py-2 border border-gray-300">{stock.orderType}</td>
              <td className="px-4 py-2 border border-gray-300">₹{stock.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;

// const buyData = document.querySelector('#addbuydata');

// buyData.addEventListener('Click',function(e){
//     e.preventDefault();
//     const element = e.target.element;
    // const formData = {
    //     name:element.name,
    //     qty: element.qty,
    //     orderType:element.orderType,
    //     price:element.price
    // }
//     stockData.push(formData)
// })



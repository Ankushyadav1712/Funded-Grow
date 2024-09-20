import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { stockData } from "../Data/data";

import Watchlist from "./Watchlist";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

const Orders = ({  }) => {
  const [orderData, setOrderData] = useState([]);
  useEffect(async () => {
    const user = auth.currentUser;
    const { email, uid } = user;
    console.log("this is user information : ", email, uid);
    const userDocRef = doc(db, "usersData", uid);
    const userDoc = await getDoc(userDocRef);
    const finalStock=userDoc._document.data.value.mapValue.fields.
    userStocks.arrayValue.values
    ;
    console.log(
      "get stocks data ->  ",
      finalStock
    );

    setOrderData(finalStock);
    console.log("order -> ", orderData);
  }, []);

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
          {orderData.map((stock, index) => {
            const field = stock.mapValue.fields;
            {console.log("this is field data nested  ->  ",field.stockName.stringValue)}
            return(
            <tr key={index}>
              {console.log(" this is my order data ",field)}
              <td className="px-4 py-2 border border-gray-300">{field.stockName.stringValue}</td>
              
              <td className="px-4 py-2 border border-gray-300">{+field.quantity.integerValue}</td>
              <td className="px-4 py-2 border border-gray-300">
                {field.orderType.stringValue}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                ₹{Number(field.price.doubleValue) * Number(field.quantity.integerValue)}
              </td>
            </tr>
            );
          })}
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

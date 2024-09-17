// import React, { useState, useContext } from 'react';
// import { Tooltip, Grow } from '@mui/material';
// import { watchlist } from '../Data/data';
// import {
//   BarChartOutlined,
//   KeyboardArrowDown,
//   KeyboardArrowUp,
//   MoreHoriz,
// } from '@mui/icons-material';

// const Watchlist = () => {
//   return (
//     <div className="watchlist-container">
//       <div className="search-container">
//         <input
//           type="text"
//           name="search"
//           id="search"
//           placeholder="Search Stocks"
//           className="search"
//         />
//       </div>
//       <ul className="list">
//         {watchlist.map((stock, index) => {
//           return <WatchListItem stock={stock} key={index} />;
//         })}
//       </ul>
//     </div>
//   );
// };

// export default Watchlist;

// const WatchListItem = ({ stock }) => {
//   const [showWatchlistActions, setShowWatchlistActions] = useState(false);

//   const handleMouseEnter = () => {
//     setShowWatchlistActions(true);
//   };

//   const handleMouseLeave = () => {
//     setShowWatchlistActions(false);
//   };

//   return (
//     <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//       <div className="item">
//         <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
//         <div className="itemInfo">
//           <span className="percent">{stock.percent}</span>
//           {stock.isDown ? (
//             <KeyboardArrowDown className="down" />
//           ) : (
//             <KeyboardArrowUp className="up" />
//           )}
//           <span className="price">{stock.price}</span>
//         </div>
//       </div>
//       {showWatchlistActions && <WatchListActions uid={stock.name} />}
//     </li>
//   );
// };

// const WatchListActions = ({ uid }) => {
//   return (
//     <span className="actions gap-3 rounded">
//       <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
//         <button className="buy">Buy</button>
//       </Tooltip>
//       <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
//         <button className="sell">Sell</button>
//       </Tooltip>
//       <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
//         <button className="action">
//           <BarChartOutlined className="icon" />
//         </button>
//       </Tooltip>
//       <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
//         <button className="action">
//           <MoreHoriz className="icon" />
//         </button>
//       </Tooltip>
//     </span>
//   );
// };






import React, { useState} from 'react';
import { Tooltip, Grow } from '@mui/material';
import { watchlist } from '../Data/data';
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from '@mui/icons-material';
import { stockData } from "../Data/data";

// import React, { useState } from 'react';

const Watchlist = () => {
  const [showBuyWindow, setShowBuyWindow] = useState(false);
  const [showSellWindow, setShowSellWindow] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);

  const handleBuyClick = (stock) => {
    setSelectedStock(stock);
    setShowBuyWindow(true);
    setShowSellWindow(false);
  };

  const handleSellClick = (stock) => {
    setSelectedStock(stock);
    setShowSellWindow(true);
    setShowBuyWindow(false);
  };

  const handleCancelClick = () => {
    setShowBuyWindow(false);
    setShowSellWindow(false);
    setSelectedStock(null);
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search Stocks"
          className="search"
        />
      </div>
      <ul className="list">
        {watchlist.map((stock, index) => {
          return (
            <WatchListItem
              stock={stock}
              key={index}
              handleBuyClick={handleBuyClick}
              handleSellClick={handleSellClick}
            />
          );
        })}
      </ul>

      {showBuyWindow && selectedStock && (
        <BuyWindow
          stock={selectedStock}
          handleCancelClick={handleCancelClick}
        />
      )}

      {showSellWindow && selectedStock && (
        <SellWindow
          stock={selectedStock}
          handleCancelClick={handleCancelClick}
        />
      )}
    </div>
  );
};

export default Watchlist;

const WatchListItem = ({ stock, handleBuyClick, handleSellClick }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = () => {
    setShowWatchlistActions(true);
  };

  const handleMouseLeave = () => {
    setShowWatchlistActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? 'down' : 'up'}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && (
        <WatchListActions
          uid={stock.name}
          handleBuyClick={() => handleBuyClick(stock)}
          handleSellClick={() => handleSellClick(stock)}
        />
      )}
    </li>
  );
};

// on hover effect on watchlist items 


const WatchListActions = ({ uid, handleBuyClick, handleSellClick }) => {
  return (
    <span className="actions gap-3 rounded">
      <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
        <button className="buy" onClick={handleBuyClick}>Buy</button>
      </Tooltip>
      <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
        <button className="sell" onClick={handleSellClick}>Sell</button>
      </Tooltip>
      <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
        <button className="action">
          <BarChartOutlined className="icon" />
        </button>
      </Tooltip>
      <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
        <button className="action">
          <MoreHoriz className="icon" />
        </button>
      </Tooltip>
    </span>
  );
};










// buy window for stocks to add in order section

const BuyWindow = ({ stock, handleCancelClick }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(stock.price);

  const handleBuyClick = () => {
    stockData.push({
        name:stock.name,
        qty: stockQuantity,
        orderType:'Buy',
        price:stockPrice
    })
    localStorage.setItem('updatedData',JSON.stringify(stockData))
    console.log({
        name:stock.name,
        qty: stockQuantity,
        orderType:stock.orderType,
        price:stockPrice
    })
    alert(`Buying ${stockQuantity} of ${stock.name} at ₹${stockPrice}`);
    handleCancelClick();  // Close window after buying
  };

  return (
    <div className="con fixed top-36  left-1/2 transform -translate-x-1/4 -translate-y-1/2 w-1/3 p-6 bg-gray-300 shadow-xl rounded">
      <div className="regular-order w-full">
        <h2 className="text-xl font-bold mb-4">Buy {stock.name}</h2>
        <div className="inputs grid grid-cols-2 gap-4 ">
          <fieldset className="border p-2 rounded w-1/2">
            <legend className="text-sm">Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
              className="w-full p-1 border rounded"
            />
          </fieldset>
          <fieldset className="border p-2 rounded w-1/2">
            <legend className="text-sm">Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
              className="w-full p-1 border rounded"
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons mt-4">
        <span className="text-lg">
          Margin required: ₹{(stockQuantity * stockPrice).toFixed(2)}
        </span>
        <div className="flex justify-end gap-4 mt-4">
          <button className="btn btn-orange bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 border-black" onClick={handleBuyClick} id='addbuydata'>
            Buy
          </button>
          <button className="btn btn-grey bg-gray-300 px-4 py-2 rounded hover:bg-gray-400" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};





// sell window for stocks to add in order seciton


const SellWindow = ({ stock, handleCancelClick }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(stock.price);

  const handleSellClick = () => {
        stockData.push({
            name:stock.name,
            qty: stockQuantity,
            orderType:'Sell',
            price:stockPrice
        })
        localStorage.setItem('updatedData',JSON.stringify(stockData))
        console.log({
            name:stock.name,
            qty: stockQuantity,
            orderType:stock.orderType,
            price:stockPrice
        })
    alert(`Selling ${stockQuantity} of ${stock.name} at ₹${stockPrice}`);
    handleCancelClick();  // Close window after selling
  };

  return (
    <div className="con fixed top-36  left-1/2 transform -translate-x-1/4 -translate-y-1/2 w-1/3 p-6 bg-gray-300 shadow-xl rounded">
      <div className="regular-order w-full">
        <h2 className="text-xl font-bold mb-4">Sell {stock.name}</h2>
        <div className="inputs grid grid-cols-2 gap-4 ">
          <fieldset className="border p-2 rounded w-1/2">
            <legend className="text-sm">Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
              className="w-full p-1 border rounded"
            />
          </fieldset>
          <fieldset className="border p-2 rounded w-1/2">
            <legend className="text-sm">Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stock.price}
              className="w-full p-1 border rounded"
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons mt-4">
        <span className="text-lg">
          Amount received: ₹{(stockQuantity * stockPrice).toFixed(2)}
        </span>
        <div className="flex justify-end gap-4 mt-4">
          <button className="btn btn-orange  text-red-500 px-4 py-2 rounded hover:bg-blue-700 border-black" onClick={handleSellClick}>
            Sell
          </button>
          <button className="btn btn-grey bg-gray-300 px-4 py-2 rounded hover:bg-gray-400" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};






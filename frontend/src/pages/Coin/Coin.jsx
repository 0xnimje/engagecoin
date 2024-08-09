import React, { useContext, useEffect, useState } from 'react';
import './Coin.css';
import { useParams } from 'react-router-dom';
import { CoinContext } from '../../context/CoinContext';
import coin from '../../assets/coin.png';
import data from '../../../../data.json'; // Assuming data.json is located in assets

const Coin = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState({});
  const { currency } = useContext(CoinContext);

  useEffect(() => {
    // Set the coin data from JSON
    setCoinData(data);
  }, [currency]);

  if (coinData) {
    return (
      <div className="coin">
        <div className="coin-name">
          <img src={coin} alt={coinData.channel_id || "Coin Image"} />
          <p>
            <b>EngageCoin (EGC)</b>
          </p>
        </div>
        <div className="coin-info">
          <ul>
            <li>Channel Id</li>
            <li>{coinData.channel_id || "N/A"}</li>
          </ul>
          <ul>
            <li>Subscribers</li>
            <li>{coinData.subscribers ? coinData.subscribers.toLocaleString() : "N/A"}</li>
          </ul>
          <ul>
            <li>Views</li>
            <li>{coinData.views ? coinData.views.toLocaleString() : "N/A"}</li>
          </ul>
          <ul>
            <li>Likes</li>
            <li>{coinData.likes ? coinData.likes.toLocaleString() : "N/A"}</li>
          </ul>
          <ul>
            <li>Comments</li>
            <li>{coinData.comments ? coinData.comments.toLocaleString() : "N/A"}</li>
          </ul>
          <div className="coin-buttons">
            <a href="https://pancakeswap.finance/swap?chain=sepolia&inputCurrency=0xAc0ec72e6FC42534D2D0fc750BD6B656B7972Fbb&outputCurrency=SEP" target="_blank" rel="noopener noreferrer" className="buy-button">
              Buy
            </a>
            <a href="https://pancakeswap.finance/swap?chain=sepolia&inputCurrency=0xAc0ec72e6FC42534D2D0fc750BD6B656B7972Fbb&outputCurrency=SEP" target="_blank" rel="noopener noreferrer" className="sell-button">
              Sell
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="spinner">
        <div className="spin"></div>
      </div>
    );
  }
};

export default Coin;

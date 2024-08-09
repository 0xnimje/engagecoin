import React, { useContext, useEffect, useState } from 'react';
import './home.css';
import { CoinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';
import coin from '../../assets/coin.png';
import data from '../../../../data.json'; // Assuming data.json is located in assets

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState('');
  const [channelData, setChannelData] = useState({});

  const inputHandler = (event) => {
    setInput(event.target.value);
    if (event.target.value === "") {
      setDisplayCoin(allCoin);
    }
  };

  const searchHandler = async (event) => {
    event.preventDefault();
    const coins = await allCoin.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });
    setDisplayCoin(coins);
  };

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  useEffect(() => {
    // Set the channel data from JSON
    setChannelData(data);
  }, []);

  return (
    <div className='home'>
      <div className='hero'>
        <h1>EngageCoin <br /> Dynamic token system</h1>
        <p>Welcome to EngageCoin 👋 marketplace.<br />Sign up to explore more s.</p>
        <form onSubmit={searchHandler}>
          <input onChange={inputHandler} list='coinlist' value={input} type="text" placeholder="Search crypto.." required />
          <datalist id='coinlist'>
            {allCoin.map((item, index) => (<option key={index} value={item.name} />))}
          </datalist>
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>Sr.no</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: "center" }}>Subscribers</p>
          <p className='market-cap'>Views</p>
        </div>
        {
          displayCoin.slice(0, 5).map((item, index) => (
            <Link to={`/coin/${item.id}`} className='table-layout' key={index}>
              <p>{index + 1}</p>
              <div>
                <img src={coin} alt="coin" />
                <p>{"EngageCoin - ETC"}</p>
              </div>
              <p>{currency.symbol}500 </p>
              <p>{channelData.subscribers.toLocaleString()}</p> {/* Using the subscribers data from JSON */}
              <p className='market-cap'>{channelData.views.toLocaleString()}</p> {/* Using the views data from JSON */}
            </Link>
          ))
        }
      </div>
    </div>
  );
}

export default Home
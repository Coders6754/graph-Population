import React, { useState, useEffect } from 'react';
import '../Components/CryptoCard.css';

const CryptoCard = () => {
  const [cryptoData, setCryptoData] = useState({bpi: null, time: {}, disclaimer: ''});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        const data = await response.json();
        setCryptoData({bpi: data.bpi, time: data.time, disclaimer: data.disclaimer});
      } catch (error) {
        console.error('Error fetching cryptocurrency data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="crypto-container">
      {cryptoData.bpi && Object.entries(cryptoData.bpi).map(([currency, info]) => (
        <div key={currency} className="crypto-card">
          <h3 className="crypto-name">Currency: {info.description}</h3>
          <p className="crypto-price">Current Price: {info.rate} {info.code}</p>
          <div className="tooltip">More Info
            <span className="tooltip-text">
              <strong>Last updated:</strong> {cryptoData.time.updated}<br />
              <strong>Last updated (ISO):</strong> {cryptoData.time.updatedISO}<br />
              <strong>Last updated (UK):</strong> {cryptoData.time.updateduk}<br />
              <em>{cryptoData.disclaimer}</em>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CryptoCard;

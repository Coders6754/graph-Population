import React, { useState, useEffect } from 'react';
import '../Components/CryptoCard.css';

const CryptoCard = () => {
  const [cryptoData, setCryptoData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        const data = await response.json();
        setCryptoData(data.bpi);
      } catch (error) {
        console.error('Error fetching cryptocurrency data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="crypto-container">
      {cryptoData && Object.entries(cryptoData).map(([currency, info]) => (
        <div key={currency} className="crypto-card">
          <h3 className="crypto-name">{info.description}</h3>
          <p className="crypto-price">{info.rate} {info.code}</p>
          {/* Example of adding a tooltip for more info */}
          <div className="tooltip">More Info
            <span className="tooltip-text">Last updated: {info.updated}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CryptoCard;
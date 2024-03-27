import React, { useState } from 'react';
import Sidebar from "./Components/Sidebar";
import PopulationGraph from "./Components/PopulationGraph";
import CryptoCard from "./Components/CryptoCard";
import './App.css';
import ConnectWallet from './Components/ConnectWallet.js';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={`app-container ${sidebarOpen ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="main-content">
        <h2><span className="white-text">Hello,</span> <span role="img" aria-label="hello"></span> <span className="traders-text">Traders!!</span>👋</h2>
        <h3><span className="white-text">Welcome to</span> <span className="spot-trading-text welcome-text">Spot Trading !</span></h3>

        <PopulationGraph />
        <CryptoCard />
        <ConnectWallet />
      </div>
    </div >
  );
}

export default App;

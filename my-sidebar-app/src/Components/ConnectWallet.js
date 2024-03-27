import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import '../Components/ConnectWallet.css';

const ConnectWallet = () => {
  const [account, setAccount] = useState('');
  const [web3, setWeb3] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [notification, setNotification] = useState(''); // New state for notifications
  const [showNotification, setShowNotification] = useState(false); // New state to control notification visibility

  // Show notification function
  const showNotificationForSeconds = (message, duration = 3000) => {
    setNotification(message);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, duration);
  };

  useEffect(() => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      setWeb3(new Web3(window.ethereum));
    } else {
      setErrorMsg('Please install MetaMask to use this feature.');
    }
  }, []);

  const connectWalletHandler = async () => {
    if (!web3) {
      setErrorMsg('Web3 not initialized. Make sure MetaMask is installed.');
      return;
    }

    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);
      showNotificationForSeconds('Wallet has successfully connected'); // Show success notification
      setErrorMsg('');
    } catch (error) {
      const errorMessage = 'Failed to connect the wallet. ' + error.message;
      setErrorMsg(errorMessage);
      showNotificationForSeconds(errorMessage); // Show error notification
    }
  };

  useEffect(() => {
    const handleAccountsChanged = (accounts) => {
      if (accounts.length === 0) {
        // MetaMask is locked or the user has not connected any accounts
        setErrorMsg('Please connect to MetaMask.');
        setAccount('');
      } else {
        setAccount(accounts[0]);
        showNotificationForSeconds('Account changed successfully.');
      }
    };

    window.ethereum?.on('accountsChanged', handleAccountsChanged);

    return () => {
      window.ethereum?.removeListener('accountsChanged', handleAccountsChanged);
    };
  }, []);


  return (
    <div className="connect-wallet-container">
      {!account ? (
        <button className="connect-wallet-btn" onClick={connectWalletHandler}>Connect Wallet</button>
      ) : (
        <div>
          <p className="connected-account">Connected Account: {account}</p>
          <button className="connect-wallet-btn" onClick={() => setAccount('')}>Disconnect</button>
        </div>
      )}
      {showNotification && <p className="notification-message">{notification}</p>}
    </div>
  );
};

export default ConnectWallet;

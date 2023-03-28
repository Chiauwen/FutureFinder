import React, { useState } from 'react';
import { Header } from '../components';
import './profile.css'

const Profile = () => {
  const [activeButton, setActiveButton] = useState('My Dashboard');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const renderContent = () => {
    switch (activeButton) {
      case 'My Dashboard':
        return (
          <div className='profileContent'>
            <h1>My Dashboard</h1>
            <p>This is the content for the My Dashboard button.</p>
          </div>
        );
      case 'My Profile':
        return (
          <div className='profileContent'>
            <h1>My Profile Content</h1>
            <p>This is the content for the My Profile button.</p>
          </div>
        );
      case 'My Orders':
        return (
          <div className='profileContent'>
            <h1>My Orders Content</h1>
            <p>This is the content for the My Orders button.</p>
          </div>
        );
      case 'Current Plan':
        return (
          <div className='profileContent'>
            <h1>Current Plan Content</h1>
            <p>This is the content for the Current Plan button.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="profile">
      <div className="profileNav">
        <button
          onClick={() => handleButtonClick('My Dashboard')}
          className={activeButton === 'My Dashboard' ? 'active' : ''}
        >
          My Dashboard
        </button>
        <button
          onClick={() => handleButtonClick('My Profile')}
          className={activeButton === 'My Profile' ? 'active' : ''}
        >
          My Profile
        </button>
        <button
          onClick={() => handleButtonClick('My Orders')}
          className={activeButton === 'My Orders' ? 'active' : ''}
        >
          My Orders
        </button>
        <button
          onClick={() => handleButtonClick('Current Plan')}
          className={activeButton === 'Current Plan' ? 'active' : ''}
        >
          Current Plan
        </button>
      </div>
      <div className="profileContent">{renderContent()}</div>
    </div>
  );
};

export default Profile;

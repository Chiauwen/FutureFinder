import React, { useState } from 'react'
import { Header } from '../components'
import './profile.css'
import {
  AiOutlineCreditCard,
  AiOutlineWallet,
  AiOutlineBank,
} from 'react-icons/ai'
import { RiSecurePaymentFill } from 'react-icons/ri'
import { GiKidneys } from 'react-icons/gi'
import profilePic from '../assets/profile1.png';

const Profile = () => {
  const [activeButton, setActiveButton] = useState('My Dashboard')

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName)
  }

  const renderContent = () => {
    switch (activeButton) {
      case 'My Dashboard':
        return (
          <div className="profileContent">
            <h1>My Dashboard</h1>
            <p>
              <strong>Name:</strong> Jane
            </p>
            <p>
              <strong>Role:</strong> Student
            </p>
            <p>
              <strong>University:</strong> Multimedia University
            </p>
            <p>
              <strong>Interested Field:</strong> Engineering
            </p>
          </div>
        )
      case 'My Profile':
        return (
          <div className="profileContent">
            <h1>My Profile</h1>
            <button>Change Profile Picture</button>
            <p>
              <strong>Name:</strong> Jane
            </p>
            <p>
              <strong>Role:</strong> Student
            </p>
            <p>
              <strong>University:</strong> Multimedia University
            </p>
            <p>
              <strong>Interested Field:</strong> Engineering
            </p>
            <p>
              <strong>Email:</strong> Jane
            </p>
            <p>
              <strong>Phone Number:</strong> Student
            </p>
            <p>
              <strong>Date of Birth:</strong> Multimedia University
            </p>
            <button>Change Password</button>
            <button id='delete'>DELETE ACCOUNT</button>
          </div>
        )
      case 'Payments':
        return (
          <div className="profileContent">
            <h1>Payments</h1>
            <h5>No Payments Method added...</h5>
            <h6>Add a new payment method +</h6>
            <AiOutlineCreditCard />
            <button>Credit Card</button>
            <AiOutlineWallet />
            <button>Ewallet</button>
            <AiOutlineBank />
            <button>Online Banking</button>
            <RiSecurePaymentFill />
            <button>FPX</button>
            <GiKidneys />
            <button>Kidney</button>
          </div>
        )
      case 'Current Plan':
        return (
          <div className="profileContent">
            <h1>Current Plan</h1>
            <p>Basic Plan</p>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="profile">
      <Header/>
      <div className="profileNav">
        <img src={profilePic} id='profilepic'></img>
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
          onClick={() => handleButtonClick('Payments')}
          className={activeButton === 'Payments' ? 'active' : ''}
        >
          Payments
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
  )
}

export default Profile

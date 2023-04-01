import React, { useState } from 'react'
import { Header, Footer } from '../components'
import './ProfileMentor.css'
import {
  AiOutlineWallet,
  AiOutlineBank,
} from 'react-icons/ai'
import { RiSecurePaymentFill } from 'react-icons/ri'
import profilePic from '../assets/profile2.png'
import { Link } from 'react-router-dom'

const Profile = () => {
  const [activeButton, setActiveButton] = useState('My Dashboard')

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName)
  }

  const course1 = () => {
    var x = document.getElementById('course1')
    if (x.style.display === 'none') {
      x.style.display = 'block'
    } else {
      x.style.display = 'none'
    }
  }

  const course2 = () => {}

  const renderContent = () => {
    switch (activeButton) {
      case 'My Dashboard':
        return (
          <div className="profileContent">
            <div className="dashboard">
              <h1>My Dashboard</h1>
              <p>
                <strong>Name:</strong> Faizal
              </p>
              <p>
                <strong>Role:</strong> Mentor
              </p>
              <p>
                <strong>Company:</strong> INC Technology Company
              </p>
              <p>
                <strong>Expert Field:</strong> IT, Artificial Intelligence,
                Machine Learning
              </p>

              <h5>Available tokens: 20</h5>

              <Link to="/Tokens">
                <button className="tokens">Get More Tokens Now! </button>
              </Link>
            </div>
          </div>
        )
      case 'My Profile':
        return (
          <div className="profileContent">
            <div className="myprofile">
              <h1>My Profile</h1>
              <button>Change Profile Picture</button>
              <p>
                <strong>Name:</strong> Faizal
              </p>
              <p>
                <strong>Role:</strong> Mentor
              </p>
              <p>
                <strong>Company:</strong> INC Technology Company
              </p>
              <p>
                <strong>Expert Field:</strong> IT, Artificial Intelligence,
                Machine Learning
              </p>
              <p>
                <strong>Email:</strong> faizal@gmail.com
              </p>
              <p>
                <strong>Phone Number:</strong> 0123456789
              </p>
              <p>
                <strong>Date of Birth:</strong> 01-01-1980
              </p>
              <button>Change Password</button>
              <button id="delete">DELETE ACCOUNT</button>
            </div>
          </div>
        )
      case 'wallet':
        return (
          <div className="profileContent">
            <div className="wallet">
              <h1>Wallet</h1>
              <p>No Withdrawal Method added...</p>
              <p>Add a new banking method +</p>
              <AiOutlineWallet />
              <button>Ewallet</button>
              <AiOutlineBank />
              <button>Online Banking</button>
              <RiSecurePaymentFill />
              <button>FPX</button>
            </div>
          </div>
        )
      case 'My Services':
        return (
          <div className="profileContent">
            <div className="services">
              <h1>Current Offered Services</h1>

              <h4>Professional Chat</h4>
              <p>
                <strong>Expert Field: </strong>IT/Software Engineering
              </p>
              <h4>Group Coaching</h4>
              <h5>Courses:</h5>

              <button onClick={course1}>
                Get yourself ready in real IT industry
              </button>
              <div id="course1">
                <h5>descriptions:</h5>
                <p></p>
              </div>

              <button onClick={course2}>AI Evolution</button>
              <div id='course2'>
                <h5>descriptions:</h5>
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="Page">
      <div className="profile">
        <Header />
        <div className="profileNav">
          <img src={profilePic} id="profilepic" alt="profile"></img>
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
            onClick={() => handleButtonClick('wallet')}
            className={activeButton === 'wallet' ? 'active' : ''}
          >
            Wallet
          </button>
          <button
            onClick={() => handleButtonClick('My Services')}
            className={activeButton === 'My Services' ? 'active' : ''}
          >
            My Services
          </button>
        </div>
        <div className="profileContent">{renderContent()}</div>
      </div>
      <Footer />
    </div>
  )
}

export default Profile

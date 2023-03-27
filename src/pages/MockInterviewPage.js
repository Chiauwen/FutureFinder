import React from 'react'
import { Header, PageTitle} from '../components';
import { Link } from "react-router-dom";
import './pages.css';
import './MockInterview.css'

import person from '../assets/character2.png';
import close from '../assets/close.png';

const MockInterviewPage = () => {
  return (
    <div className='Page'>
        <Header />
        <PageTitle title="Mock Interview"/>
        <div className='camscreen'>
        <img className='closeicon' src={close} alt="close"/>
        <img className='person' src={person} alt='person'/>
        <div className='qna'>
          <p>Question 1:</p>
          <p>Why do you want this job?</p>
          <br />
          <p>Question 2:</p>
          <p>What makes you the best person for this job?</p>
        </div>
      </div>
      <div className='timer'>
        <h4>15:00</h4>
        <Link to="/mockResult" style={{textDecoration:'none'}}>
          <button>Result</button>
        </Link>
      </div>
    </div>
  )
}

export default MockInterviewPage

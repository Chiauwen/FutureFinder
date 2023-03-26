import React from 'react'
import { Header, PageTitle} from '../components';

import './MockInterviewCover.css'
import './pages.css';

import puzzle from './assets/52782.png';

const App = () => {
  return (
    <div className="App">
      <Header />
      <PageTitle title='Mock Interview'/>
      <div className='mockinterview-how'>
        <p>How it works?</p>
        <div className='mockinterview-p'>
          <p>FutureFinder’s mock Interview is an AI based program, which all the marks are given by AI based on your facial expression and your answers.</p>
          <br />
          <p>The conversational exercise usually resembles a real interview as closely as possible, for the purpose of providing experience for a candidate.</p>
        </div>
      </div>
        <button className='startbtn'>Start Now</button>
        <img src={puzzle} alt='puzzle image'/>
    </div>
  )
}

export default App;

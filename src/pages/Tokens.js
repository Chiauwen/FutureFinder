import { Header } from '../components'
import './Token.css'
import chat from '../assets/mentorchat.png'
import gcoach from '../assets/groupcoach.jpg'

function Tokens() {
  return (
    <div className="token">
      <Header />
      <div className="token-title">
        <h1>Earn Anytime, Anywhere</h1>
        <h2>with your professional knowledge</h2>
        <h3>How it Works?</h3>
      </div>

      <div className="prof-container">
        <div className="prof-content">
          <h2>Professional Chat</h2>
          <p>Chat with students and share your professional opinion to them</p>
          <p>
            Sometimes peoples easy to get lost when choosing their university
            course and future careers
          </p>
          <p>share them the advice and bring them to the right path!</p>
          <h6>Chat 20 minutes</h6>
          <button>earn 4 tokens</button>
        </div>

        <img class="img" src={chat} width={500} height={500} />
      </div>

      <div className="coach-container">
        <img src={gcoach} width={500} height={300}></img>
        <div className="coach-content">
          <h2>Group Coaching</h2>
          <p>
            Sharing interview techniques? or ways to pick university courses?
          </p>
          <p>Share them now by offering it in your courses</p>
          <p>Group coaching can have up to 20 students in one class</p>
          <h6>for each student in one class</h6>
          <button>earn 7 tokens</button>
        </div>
      </div>

      <button className="start">Start Now</button>
    </div>
  )
}

export default Tokens

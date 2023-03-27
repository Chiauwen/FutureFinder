import Form from 'react-bootstrap/Form'
import './LoginPage.css'
import { Header } from '../components'
import { Link } from 'react-router-dom'

function LoginPage() {
  return (
    <div className="login">
      <Header />
      <Form className="login-input">
        <h2>Login</h2>

        <div className="login-content">
          <label>Email</label>
          <input type="email" placeholder="Enter your email"></input>

          <label>Password</label>
          <input type="password" placeholder="Enter your Password"></input>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </Form>

      <div className="register">
        <p>New to FutureFinder?</p>
        
        <Link to='/signup'>
          <button className="register">Join Now</button>
        </Link>
      </div>
    </div>
  )
}

export default LoginPage

import Form from 'react-bootstrap/Form'
import './SignUp.css'
import { Header } from '../components'
import { Link } from 'react-router-dom'

function LoginPage() {
  return (
    <div className="signup">
      <Header />
      <Form className="signup-input">
        <h2>Login</h2>

        <div className="signup-content">
          <input type="email" placeholder="Email"></input>

          <input type="password" placeholder="Password"></input>

          <Link to="/Profile">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </Link>
        </div>
      </Form>

      <div className="login">
        <p>New to FutureFinder?</p>

        <Link to="/SignUp">
          <button className="login">Join Now!</button>
        </Link>
      </div>
    </div>
  )
}

export default LoginPage

import Form from 'react-bootstrap/Form'
import './SignUp.css'
import { Header } from '../components'
import Theme from '../Theme'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className="signup">
      <Header />
      <Form className="signup-input">
        <h2>Sign Up</h2>

        <div className="signup-content">
          <input type="username" placeholder="Enter your username"></input>

          <input type="password" placeholder="Enter your email"></input>

          <label for="role">Your Role</label>
          <select name="role" id="role">
            <option value="student">student</option>
            <option value="professional">professional</option>
          </select>

          <input type="password" placeholder="Enter your email"></input>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </Form>

      <div className="login">
        <p>already have account?</p>

        <Link to="/login">
          <button className="login">Login</button>
        </Link>
      </div>
    </div>
  )
}

export default SignUp

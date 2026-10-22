import { Link } from 'react-router-dom'
import AuthHeader from '../components/AuthHeader'
import SocialAuthButtons from '../components/SocialAuthButtons'

const Signup = () => {
  return (
    <div className="page signup-page">
      <AuthHeader />

      <main className="signup-main">
        <h1 className="signup-title">Sign up</h1>
        <div className="signup-card">
          <input type="text" placeholder="First name..." />
          <input type="text" placeholder="Surname..." />
          <input type="email" placeholder="Email..." />
          <input type="password" placeholder="Password..." />
          <input type="password" placeholder="Confirm password..." />

          <button type="button" className="about-button">
            Join now
          </button>
        </div>
        <div className="signup-footer-links">
          <span>Already have an account?</span>
          <Link to="/login" className="signup-login">Log in</Link>
        </div>
        <SocialAuthButtons mode="signup" />
      </main>
    </div>
  )
}

export default Signup

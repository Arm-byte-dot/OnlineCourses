import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthHeader from '../components/AuthHeader'
import SocialAuthButtons from '../components/SocialAuthButtons'

const Login = () => {
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setMessage('Sign-in is not available yet. Please try again later.')
  }

  return (
    <div className="page login-page">
      <AuthHeader />

      <main className="login-main">
        <h1 className="login-title">Log in</h1>
        <form className="login-card" onSubmit={handleSubmit} onChange={() => setMessage('')}>
          <label className="login-label" htmlFor="login-email">Email</label>
          <input
            id="login-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Email..."
            required
          />
          <label className="login-label" htmlFor="login-password">Password</label>
          <input
            id="login-password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="Password..."
            required
          />
          <button className="login-submit" type="submit">Log in</button>
          {message && <p className="login-message" role="status">{message}</p>}
        </form>

        <div className="login-footer-links">
          <span>Don't have an account yet?</span>
          <Link className="login-signup" to="/signup">Sign up</Link>
        </div>

        <SocialAuthButtons />
      </main>
    </div>
  )
}

export default Login

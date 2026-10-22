import { Link } from 'react-router-dom'
import { AppIcon } from './Icons'

const AuthHeader = () => {
  return (
    <header className="auth-header">
      <div className="brand">
        <span className="icon" aria-hidden="true">
          <AppIcon name="book" size={22} />
        </span>
        <span className="brand-name">DevNest</span>
      </div>
      <nav className="auth-nav" aria-label="Account page navigation">
        <Link to="/home" className="auth-nav-link auth-nav-home" aria-label="Go to Home">
          <span aria-hidden="true"><AppIcon name="home" size={20} /></span>
        </Link>
      </nav>
    </header>
  )
}

export default AuthHeader

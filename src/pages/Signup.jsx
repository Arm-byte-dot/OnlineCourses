import { AppIcon } from '../components/Icons'
import Footer from '../components/Footer'
const Signup = () => {
  return (
    <div className="page page-with-footer signup-page">
      <div className="signup-top">
        <div className="brand">
          <span className="icon">
            <AppIcon name="book" size={22} />
          </span>
          <span className="brand-name">DevNest</span>
        </div>
        <nav className="signup-nav">
          <a href="/" className="signup-nav-link signup-nav-home" aria-label="Go to Home">
            <AppIcon name="home" size={20} />
          </a>
        </nav>
      </div>

      <main className="signup-main">
        <h1 className="signup-title">Sign up</h1>
        <div className="signup-card">
          <input type="text" placeholder="First name..." />
          <input type="text" placeholder="Surname..." />
          <input type="email" placeholder="Email..." />
          <input type="password" placeholder="Password..." />
          <button type="button" className="about-button">
            Join now
          </button>
        </div>
        <div className="signup-footer-links">
          <a href="#">Already got an Account</a>
          <button type="button" className="signup-login">
            log in
          </button>
        </div>
      </main>

      <Footer/>
    </div>
  )
}

export default Signup

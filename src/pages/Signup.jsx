import { AppIcon } from '../components/Icons'

const Signup = () => {
  return (
    <div className="page signup-page">
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

      <footer className="about-footer signup-footer">
        <div className="about-footer-brand">
          <span className="icon">
            <AppIcon name="book" size={22} />
          </span>
          <span className="brand-name">DevNest</span>
        </div>
        <div className="about-footer-columns">
          <div>
            <h4>Our mission</h4>
            <a href="/about">About us</a>
            <a href="#">Subscription</a>
          </div>
          <div>
            <h4>Help center</h4>
            <a href="#">Customer support</a>
            <a href="#">FAQs</a>
            <a href="#">Contact us</a>
          </div>
          <div>
            <h4>Join our forum</h4>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">X</a>
          </div>
          <div>
            <h4>Get the app</h4>
            <div className="about-store">App store</div>
            <div className="about-store">Google play</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Signup

import { useState } from 'react'
import { Link } from 'react-router-dom'

const HomeHeader = () => {
  const [isLoginNoticeOpen, setIsLoginNoticeOpen] = useState(false)

  return (
    <header
      className="home-header"
      onKeyDown={(event) => {
        if (event.key === 'Escape') setIsLoginNoticeOpen(false)
      }}
    >
      <div className="home-brand"  aria-label="DevNest home">
        <svg
          className="home-brand__icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 4.5C9.7 3 6.2 3 3 3v16c3.2 0 6.7 0 9 1.5C14.3 19 17.8 19 21 19V3c-3.2 0-6.7 0-9 1.5Z" />
          <path d="M12 4.5v16M3 5H1.5v17H9c1.3 0 2.2.2 3 .5.8-.3 1.7-.5 3-.5h7.5V5H21" />
        </svg>
        <span className="home-brand__name">DevNest</span>
      </div>

      <nav className="home-auth" aria-label="Account">
        <button
          className="home-auth__link"
          type="button"
          aria-expanded={isLoginNoticeOpen}
          aria-controls="home-login-notice"
          onClick={() => setIsLoginNoticeOpen(!isLoginNoticeOpen)}
        >
          Log in
        </button>
        <Link className="home-auth__link" to="/signup">Sign up</Link>
      </nav>
      <p className="home-auth-notice" id="home-login-notice" hidden={!isLoginNoticeOpen}>
        Sign-in is coming soon. You can browse courses without an account.
      </p>
    </header>
  )
}

export default HomeHeader

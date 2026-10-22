import { Link } from 'react-router-dom'

const HomeHeader = () => {
  return (
    <header className="home-header">
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
        <Link className="home-auth__link" to="/login">Log in</Link>
        <Link className="home-auth__link" to="/signup">Sign up</Link>
      </nav>
    </header>
  )
}

export default HomeHeader

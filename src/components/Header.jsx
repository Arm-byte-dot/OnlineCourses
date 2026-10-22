// Top navigation bar with brand and quick actions.
import { NavLink, useLocation } from 'react-router-dom'
import { AppIcon } from './Icons'

const Header = () => {
  const { pathname } = useLocation()
  const isAboutPage = pathname.toLowerCase().startsWith('/about')

  return (
    <div className="topbar">
      <div className="brand">
        <span className="icon">
          <AppIcon name="book" size={22} />
        </span>
        <span className="brand-name">DevNest</span>
      </div>
      <nav className={`nav${isAboutPage ? ' nav--about' : ''}`} aria-label="Main navigation">
        <span className="nav-slider" aria-hidden="true" />
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/about">
          About
        </NavLink>
      </nav>
      <div className="top-actions">
        <span className="icon">
          <AppIcon name="cap" size={22} />
        </span>
        <span className="icon">
          <AppIcon name="bell" size={22} />
        </span>
      </div>
    </div>
  )
}

export default Header

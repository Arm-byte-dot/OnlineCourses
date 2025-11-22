// Top navigation bar with brand and quick actions.
import { AppIcon } from './Icons'

const Header = () => {
  const normalizedPath = window.location.pathname.replace(/\/+$/, '') || '/'
  const isAboutPage = normalizedPath.toLowerCase().startsWith('/about')
  const isInstructorsPage = normalizedPath.toLowerCase().startsWith('/instructors')

  return (
    <div className="topbar">
      <div className="brand">
        <span className="icon">
          <AppIcon name="book" size={22} />
        </span>
        <span className="brand-name">DevNest</span>
      </div>
      <nav className="nav">
        <a className={!isAboutPage && !isInstructorsPage ? 'active' : ''} href="/">
          Home
        </a>
        <a className={isAboutPage ? 'active' : ''} href="/about">
          About
        </a>
        <a className={isInstructorsPage ? 'active' : ''} href="/instructors">
          Instructors
        </a>
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

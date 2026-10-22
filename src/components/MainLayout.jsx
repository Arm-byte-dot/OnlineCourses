import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'

const MainLayout = () => {
  const { pathname } = useLocation()
  const isAboutPage = pathname.toLowerCase().replace(/\/+$/, '') === '/about'

  return (
    <div className={isAboutPage ? 'page page-with-footer about-page' : 'page'}>
      <Header />
      <Outlet />
    </div>
  )
}

export default MainLayout

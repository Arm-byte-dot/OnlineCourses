// Footer links and brand.
import { AppIcon } from './Icons'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <div className="brand">
          <span className="icon">
            <AppIcon name="book" size={20} />
          </span>
          <span className="brand-name">DevNest</span>
        </div>
      </div>
      <div className="footer-columns">
        <div>
          <h4>Our mission</h4>
          <a href="/about">About us</a>
          <a href="/subscription">Subscription</a>
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
          <a href="#">App store</a>
          <a href="#">Google Play</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

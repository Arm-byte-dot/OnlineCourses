import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AppIcon } from '../components/Icons'
import Footer from '../components/Footer'
const proOptions = [
  { id: 'pro-monthly', term: 'monthly', label: 'Monthly', price: '49.99$' },
  { id: 'pro-yearly', term: 'yearly', label: 'Yearly', price: '589.99$' },
]

const plusOptions = [
  { id: 'plus-monthly', term: 'monthly', label: 'Monthly', price: '19.99$' },
  { id: 'plus-yearly', term: 'yearly', label: 'Yearly', price: '229.99$' },
]

const Subscription = () => {
  const location = useLocation()
  const [openPlan, setOpenPlan] = useState('pro')
  const [selectedPlan, setSelectedPlan] = useState('pro')
  const [billingChoice, setBillingChoice] = useState({ pro: 'monthly', plus: 'monthly' })

  const handleBillingChange = (plan, term) => {
    setSelectedPlan(plan)
    setBillingChoice((prev) => ({ ...prev, [plan]: term }))
  }

  const togglePlan = (plan) => {
    setOpenPlan(plan)
    setSelectedPlan(plan)
  }

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const planParam = params.get('plan')
    if (planParam === 'plus' || planParam === 'pro') {
      setOpenPlan(planParam)
      setSelectedPlan(planParam)
    }
  }, [location.search])

  const renderBillingOptions = (planKey, options) => (
    <div className="billing-options" role="radiogroup" aria-label={`${planKey} billing options`}>
      {options.map((option) => {
        const isActive = billingChoice[planKey] === option.term
        return (
          <button
            type="button"
            key={option.id}
            className={`billing-option ${isActive ? 'selected' : ''}`}
            onClick={() => handleBillingChange(planKey, option.term)}
            aria-pressed={isActive}
          >
            <span className="billing-label">{option.label}</span>
            <span className="billing-price">{option.price}</span>
            <span className={`option-indicator ${isActive ? 'active' : ''}`} aria-hidden="true" />
          </button>
        )
      })}
    </div>
  )

  return (
    <div className="page page-with-footer subscription-page">
      <div className="subscription-top">
        <div className="brand">
          <span className="icon">
            <AppIcon name="book" size={22} />
          </span>
          <span className="brand-name">DevNest</span>
        </div>
        <nav className="subscription-nav">
          <a href="/" className="subscription-nav-link subscription-nav-home" aria-label="Go to Home">
            <AppIcon name="home" size={20} />
          </a>
        </nav>
      </div>

      <main className="subscription-main">
        <div className="subscription-layout">
          <section className="subscription-payment" aria-label="Payment details">
            <h2>Card information</h2>
            <input type="text" placeholder="0000-0000-0000-0000" aria-label="Card number" />
            <div className="subscription-row">
              <input type="text" placeholder="MM/YY" aria-label="Expiration date" />
              <input type="text" placeholder="CVC" aria-label="CVC" />
            </div>
            <div className="subscription-country">
              <h3>Country</h3>
              <input type="text" placeholder="Country name" aria-label="Country" />
            </div>
            <button type="button" className="about-button">
              Join now
            </button>
          </section>

          <section className="subscription-plans" aria-label="Plan selection">
            <div
              className={`subscription-card subscription-plus ${openPlan === 'plus' ? 'open' : ''} ${
                selectedPlan === 'plus' ? 'active' : ''
              }`}
            >
              <button
                type="button"
                className="subscription-summary"
                onClick={() => togglePlan('plus')}
                aria-expanded={openPlan === 'plus'}
              >
                <div className="subscription-title">plus</div>
                <span className={`subscription-toggle ${openPlan === 'plus' ? 'rotated' : ''}`} aria-hidden="true">
                  +
                </span>
              </button>
              {openPlan === 'plus' && renderBillingOptions('plus', plusOptions)}
            </div>

            <div className={`subscription-card subscription-pro ${selectedPlan === 'pro' ? 'active' : ''}`}>
              <button
                type="button"
                className="subscription-summary"
                onClick={() => togglePlan('pro')}
                aria-expanded={openPlan === 'pro'}
              >
                <div className="subscription-title">pro</div>
                <span className={`subscription-toggle ${openPlan === 'pro' ? 'rotated' : ''}`} aria-hidden="true">
                  +
                </span>
              </button>
              {openPlan === 'pro' && renderBillingOptions('pro', proOptions)}
            </div>
          </section>
        </div>
      </main>

      <Footer/>
    </div>
  )
}

export default Subscription

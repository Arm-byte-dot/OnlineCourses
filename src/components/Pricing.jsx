import { Link } from 'react-router-dom'

// Pricing tiers cards.
const Pricing = ({ plans }) => {
  return (
    <section className="pricing">
      <h2>Choose your subscription</h2>
      <div className="pricing-grid">
        {plans.map((plan) => (
          <div className={`price-card ${plan.highlights ? 'highlight' : ''}`} key={plan.title}>
            <h3>{plan.title}</h3>
            <div className="price">
              <span className="amount">{plan.price}</span>
              {plan.period && <span className="period">{plan.period}</span>}
            </div>
            <ul>
              {plan.features.map((feat) => (
                <li key={feat}>
                  <span className="check">✓</span>
                  {feat}
                </li>
              ))}
            </ul>
            {(() => {
              const planKey = plan.title.toLowerCase().includes('plus')
                ? 'plus'
                : plan.title.toLowerCase().includes('pro')
                ? 'pro'
                : null

              if (!planKey) {
                return (
                  <button className="secondary" type="button">
                    {plan.cta}
                  </button>
                )
              }

              const href = `/subscription?plan=${planKey}`
              return (
                <Link to={href}>
                  <button className="secondary">{plan.cta}</button>
                </Link>
              )
            })()}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Pricing

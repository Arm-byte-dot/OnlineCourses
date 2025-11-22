// Feature highlight cards.
import { AppIcon } from './Icons'

const Features = ({ items }) => {
  return (
    <section className="features">
      {items.map((item) => (
        <div className="feature-card" key={item.title}>
          <div className="feature-icon">
            <AppIcon name={item.icon} />
          </div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </section>
  )
}

export default Features

// Student testimonials grid.
const Testimonials = ({ items }) => {
  return (
    <section className="testimonials">
      <h2>What our students say</h2>
      <div className="testimonial-grid">
        {items.map((item) => (
          <div className="testimonial-card" key={item.name}>
            <p className="quote">"{item.quote}"</p>
            <div className="student">
              <div className="avatar">
                {item.avatar ? <img src={item.avatar} alt={`${item.name} portrait`} /> : item.name[0]}
              </div>
              <div className="info">
                <span className="name">{item.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials

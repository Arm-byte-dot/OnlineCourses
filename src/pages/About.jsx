import Header from '../components/Header'
import Footer from '../components/Footer'
const differentiators = [
  'Real-world focused courses',
  'Expert-designed learning paths',
  'Community-driven support',
  'Flexible learning anytime, anywhere',
]

const About = () => {
  return (
    <div className="page page-with-footer about-page">
      <Header />
      <main className="about-wrapper">
        <section className="about-section">
          <h1 className="about-heading">About us</h1>
          <div className="about-panel">
            <p>We are building a modern learning platform designed to help students grow faster, learn smarter, and achieve real results.</p>
            <p>Our goal is to make high-quality education accessible, simple, and engaging for everyone.</p>
          </div>
        </section>

        <section className="about-section">
          <h2 className="about-heading">Our Mission</h2>
          <div className="about-panel">
            <p>
              Our mission is to empower learners around the world with practical skills, real-world knowledge, and confidence. We focus on clarity,
              quality, and innovation to make learning effective and enjoyable.
            </p>
          </div>
        </section>

        <section className="about-section">
          <h2 className="about-heading">Why we started</h2>
          <div className="about-panel">
            <p>
              We started this platform to solve one simple problem: learning should be simple, practical, and inspiring. Traditional education often
              feels slow and outdated, so we built something modern, fast, and focused on real growth.
            </p>
          </div>
        </section>

        <section className="about-section">
          <h2 className="about-heading">What makes us different</h2>
          <div className="about-panel">
            <ul className="about-list">
              {differentiators.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="about-cta">
          <h2 className="about-heading">Join our journey</h2>
          <p>Start learning today and become part of a growing community of motivated learners building a better future through education.</p>
          <a href='/signup'>
            <button className="about-button" type="button">
              Join now
            </button>
          </a>
        </section>
      </main>

     <Footer/>
    </div>
  )
}

export default About

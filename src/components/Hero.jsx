// Hero headline and CTA.
import { AppIcon } from './Icons'

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-content">
        <div className="hero-cap">
          <AppIcon name="cap" size={40} />
        </div>
        <h1>
          Enhance your skills
          <br />
          and achieve your goals
        </h1>
        <p className="sub">
          Join thousands of learners worldwide and access 
          <br />
          high-quality courses from top instructors.
          <br />
          Start your journey to success today.
        </p>
        <a href='/signup'>
          <button className="primary">Join now</button>
        </a>
      </div>
    </section>
  )
}

export default Hero

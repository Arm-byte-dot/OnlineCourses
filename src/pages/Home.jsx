import Courses from '../components/Courses'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Partners from '../components/Partners'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import { courses, features, institutions, plans, testimonials } from '../data/content'

const Home = () => {
  return (
    <>
      <div className="page">
      <Header />
        <Hero />
        <Features items={features} />
        <Testimonials items={testimonials} />
        <Courses items={courses} />
        <Partners institutions={institutions} />
        <Pricing plans={plans} />
        <Footer />
      </div>
    </>
  )
}

export default Home

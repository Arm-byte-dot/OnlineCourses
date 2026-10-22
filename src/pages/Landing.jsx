import Courses from '../components/Courses'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Partners from '../components/Partners'
import Testimonials from '../components/Testimonials'
import { courses, features, institutions, plans, testimonials } from '../data/content'

const Landing = () => {
  return (
    <>
      <Hero />
      <Features items={features} />
      <Testimonials items={testimonials} />
      <Courses items={courses} />
      <Partners institutions={institutions} />
      <Footer />
    </>
  )
}

export default Landing

import Header from '../components/Header'
import instructor3 from '../assets/instructors/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation.jpg'
import instructor2 from '../assets/instructors/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer.jpg'
import instructor1 from '../assets/instructors/portrait-beautiful-young-woman-standing-grey-wall.jpg'
import instructor9 from '../assets/instructors/michael-dam-mEZ3PoFGs_k-unsplash.jpg'
import instructor4 from '../assets/instructors/jurica-koletic-7YVZYZeITc8-unsplash.jpg'
import instructor6 from '../assets/instructors/sergio-de-paula-c_GmwfHBDzk-unsplash.jpg'
import instructor7 from '../assets/instructors/craig-mckay-jmURdhtm7Ng-unsplash.jpg'
import instructor5 from '../assets/instructors/jake-nackos-IF9TK5Uy-KI-unsplash.jpg'
import instructor8 from '../assets/instructors/philip-martin-5aGUyCW_PJw-unsplash.jpg'
import Footer from '../components/Footer'

const instructors = [
  { name: 'Lily Anderson', role: 'Web Development Coach', image: instructor1 },
  { name: 'Daniel Carter', role: 'UI/UX Design Specialist', image: instructor2 },
  { name: 'Emma Richardson', role: 'Lead UI/UX Instructor', image: instructor3 },
  { name: 'Micheal Thompson', role: 'Frontend Development', image: instructor4 },
  { name: 'Sophia Bennett', role: 'Data Analytics Mentor', image: instructor5 },
  { name: 'Alex Martinez', role: 'Web Application Designer', image: instructor6 },
  { name: 'Ryan Walker', role: 'Digital Product Designer', image: instructor7 },
  { name: 'Kevin Brooks', role: 'Mobile App Designer', image: instructor8 },
  { name: 'Isabella Clark', role: 'Cybersecurity Expert', image: instructor9 },
]

const Instructors = () => {
  return (
    <div className="page page-with-footer instructors-page">
      <Header />
      <main className="instructors-wrapper">
        <h1 className="about-heading">Meet Our Expert Instructors</h1>
        <div className="instructor-grid">
          {instructors.map((instructor) => (
            <article key={instructor.name} className="instructor-card">
              <div className="instructor-photo">
                <img src={instructor.image} alt={`${instructor.name} - ${instructor.role}`} />
              </div>
              <div className="instructor-info">
                <h3>{instructor.name}</h3>
                <p>{instructor.role}</p>
              </div>
            </article>
          ))}
        </div>
      </main>

     <Footer/>
    </div>
  )
}

export default Instructors

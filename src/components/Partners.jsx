
import harvardLogo from '../assets/partners/harvard_university_logo.svg.svg'
import mitLogo from '../assets/partners/mit_logo.svg.svg'
import groupTwo from '../assets/partners/Group 2.svg'
import groupThree from '../assets/partners/Group 3.svg'

const Partners = ({ institutions }) => {
  const logos = [harvardLogo, mitLogo, groupTwo, groupThree]

  return (
    <section className="partners">
      <h2>
        Learn with 100+ world-class institutions
        <br />
        and instructors
      </h2>
      <div className="logo-grid">
        {institutions.map((inst, index) => (
          <div className="logo" key={inst}>
            <img src={logos[index % logos.length]} alt={inst} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Partners

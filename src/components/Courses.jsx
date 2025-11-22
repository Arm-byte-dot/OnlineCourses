const Courses = ({ items }) => {
  return (
    <section className="courses">
      <h2>Our trending courses</h2>
      <div className="course-grid">
        {items.map((course) => (
          <div className={`course-card ${course.theme}`} key={course.title}>
            <div className="course-body">
              <div className="course-illustration">
                <img src={course.image} alt={`${course.title} cover`} />
              </div>
              <div className="course-rating">
                <span className="stars">★★★★★</span>
                <span className="count">
                  {course.rating} {course.badges[0]}
                </span>
              </div>
              <p className="course-title">{course.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Courses

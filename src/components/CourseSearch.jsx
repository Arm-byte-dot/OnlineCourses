import { useState } from 'react'
import { courses } from '../data/content'

const CourseSearch = () => {
  const [query, setQuery] = useState('')
  const [isResultsOpen, setIsResultsOpen] = useState(false)
  const searchQuery = query.trim()

  const matchingCourses = courses.filter((course) => (
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  ))

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsResultsOpen(true)
  }

  return (
    <div className="course-search-area">
      <form className="course-search" role="search" onSubmit={handleSubmit}>
        <label className="course-search__label" htmlFor="course-search">
          Search for courses
        </label>
        <input
          className="course-search__input"
          id="course-search"
          name="q"
          type="search"
          placeholder="Search for courses..."
          autoComplete="off"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value)
            setIsResultsOpen(event.target.value.trim().length > 0)
          }}
          onKeyDown={(event) => {
            if (event.key === 'Escape') setIsResultsOpen(false)
          }}
          aria-controls={isResultsOpen ? 'course-search-results' : undefined}
        />
        <button className="course-search__button" type="submit" aria-label="Search courses">
          <svg
            className="course-search__icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <circle cx="10.5" cy="10.5" r="6.5" />
            <path d="m16 16 6 6" />
          </svg>
        </button>
      </form>

      <div className="course-search__label" role="status">
        {isResultsOpen && `${matchingCourses.length} ${matchingCourses.length === 1 ? 'course' : 'courses'} found.`}
      </div>

      {isResultsOpen && (
        <section className="course-search-results" id="course-search-results" aria-labelledby="course-search-results-title">
          <h2 className="course-search-results__title" id="course-search-results-title">
            {searchQuery ? `Results for “${searchQuery}”` : 'All courses'}
          </h2>
          {matchingCourses.length > 0 ? (
            <ul className="course-search-results__list">
              {matchingCourses.map((course) => (
                <li className="course-search-results__item" key={course.title}>
                  <img className="course-search-results__image" src={course.image} alt="" />
                  <div>
                    <h3 className="course-search-results__name">{course.title}</h3>
                    <p className="course-search-results__rating">Rated {course.rating} out of 5</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="course-search-results__empty">
              No courses found. Try JavaScript, C++, or UI/UX.
            </p>
          )}
        </section>
      )}
    </div>
  )
}

export default CourseSearch

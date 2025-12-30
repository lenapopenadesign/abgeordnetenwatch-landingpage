import { useState } from 'react'
import searchBg from '../assets/search-bg.png'

function SearchSection() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Searching for:', searchQuery)
    // TODO: Implement search functionality
  }

  const handleLocationClick = () => {
    console.log('Using location')
    // TODO: Implement geolocation
  }

  return (
    <section className="search-section">
      <div className="search-background">
        <img src={searchBg} alt="" />
      </div>
      <div className="search-content">
        <h1>Politiker:innen<br/>in deiner Nähe entdecken:</h1>
        <p className="search-description">
          Erfahre mehr über Kandidierende und Abgeordnete, stelle ihnen Fragen und lies ihre Antworten.
        </p>

        <form className="search-form" onSubmit={handleSearch}>
          <div className="search-input-wrapper">
            <div className="input-field">
              <svg className="input-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 10A4.5 4.5 0 1 0 5.5 1a4.5 4.5 0 0 0 0 9zM11 11 8.4 8.4" stroke="#666" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input
                type="text"
                placeholder="PLZ oder Namen"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button type="submit" className="search-submit" aria-label="Suchen">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <button type="button" className="location-link" onClick={handleLocationClick}>
            <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.5 0C2.91 0 0 2.91 0 6.5 0 11.375 6.5 16 6.5 16s6.5-4.625 6.5-9.5C13 2.91 10.09 0 6.5 0zm0 8.75a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5z" fill="#fff"/>
            </svg>
            <span>Meine Location nutzen</span>
          </button>

          <div className="parliament-links">
            <a href="#">Bundestag</a>
            <a href="#">Europaparlament</a>
            <a href="#">Landtage</a>
          </div>
        </form>
      </div>
    </section>
  )
}

export default SearchSection

import { useState, useRef, useEffect } from 'react'
import bundestagBg from '../assets/bundestag-halftone.png'
import crowdVideo from '../assets/1106575_1080p_4k_3840x2160.mp4'

function SearchSection() {
  const [searchQuery, setSearchQuery] = useState('')
  const video1Ref = useRef(null)
  const video2Ref = useRef(null)

  useEffect(() => {
    const video1 = video1Ref.current
    const video2 = video2Ref.current
    if (!video1 || !video2) return

    const fadeDuration = 1
    video2.pause()
    video2.currentTime = 0
    video2.style.opacity = 0

    const handleTimeUpdate = () => {
      const timeLeft = video1.duration - video1.currentTime

      if (timeLeft <= fadeDuration) {
        // Start video2 when video1 is about to end
        if (video2.paused) {
          video2.currentTime = 0
          video2.play()
        }
        // Crossfade: video1 fades out, video2 fades in
        const progress = 1 - (timeLeft / fadeDuration)
        video1.style.opacity = 1 - progress
        video2.style.opacity = progress
      }
    }

    const handleEnded = () => {
      // Swap roles: video1 restarts and waits, video2 becomes primary
      video1.currentTime = 0
      video1.play()
      video2.style.opacity = 1
      video1.style.opacity = 0

      // Swap the event listeners
      video1.removeEventListener('timeupdate', handleTimeUpdate)
      video2.addEventListener('timeupdate', handleTimeUpdate2)
    }

    const handleTimeUpdate2 = () => {
      const timeLeft = video2.duration - video2.currentTime

      if (timeLeft <= fadeDuration) {
        if (video1.paused) {
          video1.currentTime = 0
          video1.play()
        }
        const progress = 1 - (timeLeft / fadeDuration)
        video2.style.opacity = 1 - progress
        video1.style.opacity = progress
      }
    }

    const handleEnded2 = () => {
      video2.currentTime = 0
      video2.play()
      video1.style.opacity = 1
      video2.style.opacity = 0

      video2.removeEventListener('timeupdate', handleTimeUpdate2)
      video1.addEventListener('timeupdate', handleTimeUpdate)
    }

    video1.addEventListener('timeupdate', handleTimeUpdate)
    video1.addEventListener('ended', handleEnded)
    video2.addEventListener('ended', handleEnded2)

    return () => {
      video1.removeEventListener('timeupdate', handleTimeUpdate)
      video1.removeEventListener('ended', handleEnded)
      video2.removeEventListener('timeupdate', handleTimeUpdate2)
      video2.removeEventListener('ended', handleEnded2)
    }
  }, [])

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
        <img src={bundestagBg} alt="" className="bg-bundestag" />
        <video
          ref={video1Ref}
          className="bg-video"
          autoPlay
          muted
          playsInline
        >
          <source src={crowdVideo} type="video/mp4" />
        </video>
        <video
          ref={video2Ref}
          className="bg-video"
          muted
          playsInline
        >
          <source src={crowdVideo} type="video/mp4" />
        </video>
      </div>
      <div className="search-inner">
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
      </div>
    </section>
  )
}

export default SearchSection

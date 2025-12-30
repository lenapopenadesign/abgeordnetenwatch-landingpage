import { useState } from 'react'
import sliderImage from '../assets/slider-image.jpg'

const slides = [
  {
    id: 1,
    image: sliderImage,
    title: 'Die neuen Jobs der Ampel-Minister:innen',
    description: 'Ein Jahr nach dem Ende der Ampelkoalition dürfen Christian Lindner und Marco Buschmann wieder beruflich aktiv werden',
    link: '#'
  }
]

function SliderSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <section className="slider-section">
      <div className="slider-image">
        <img src={slides[currentSlide].image} alt={slides[currentSlide].title} />
      </div>
      <div className="slider-content">
        <h2>{slides[currentSlide].title}</h2>
        <p>{slides[currentSlide].description}</p>
        <a href={slides[currentSlide].link} className="btn btn-primary">Zur Recherche</a>
        <div className="slider-controls">
          <div className="slider-dots">
            {[0, 1, 2].map(index => (
              <span
                key={index}
                className={`dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
          <button className="carousel-arrow" aria-label="Nächste" onClick={nextSlide}>
            <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2l7 7-7 7" stroke="#463D8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default SliderSection

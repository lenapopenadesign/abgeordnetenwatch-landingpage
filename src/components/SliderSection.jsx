import { useState } from 'react'
import sliderSpendenkampagne from '../assets/slider-spendenkampagne.png'
import sliderAntwortranking from '../assets/slider-antwortranking.png'
import sliderAmpel from '../assets/slider-ampel.png'

const slides = [
  {
    id: 1,
    image: sliderAmpel,
    title: 'Die neuen Jobs der Ampel-Minister:innen',
    description: 'Ein Jahr nach dem Ende der Ampelkoalition dürfen Christian Lindner und Marco Buschmann wieder beruflich aktiv werden.',
    buttonText: 'Zur Recherche',
    link: 'https://www.abgeordnetenwatch.de/recherchen/nebentaetigkeiten/die-neuen-jobs-der-ampel-ministerinnen'
  },
  {
    id: 2,
    image: sliderAntwortranking,
    title: 'Antwort-Ranking 2025: Wie antworten deine Abgeordneten?',
    description: 'Wie jedes Jahr haben wir das quantitative Antwortverhalten der Bundestagsabgeordneten analysiert und ein Ranking erstellt.',
    buttonText: 'Zum Antwort-Ranking',
    link: 'https://www.abgeordnetenwatch.de/bundestag/antwortranking'
  },
  {
    id: 3,
    image: sliderSpendenkampagne,
    title: '100.000 € für mehr Demokratie in 2026',
    description: "Gemeinsam schaffen wir's: Vom 1.–31. Dezember sammeln wir 100.000 €, um unsere Arbeit für 2026 zu finanzieren – unabhängig, kritisch, bürgernah.",
    buttonText: 'Jetzt Spenden',
    link: 'https://www.abgeordnetenwatch.de/spenden'
  }
]

function SliderSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <section className="slider-section">
      <div className="slider-wrapper">
        <div className="slider-inner">
          <div className="slider-image">
            <img src={slides[currentSlide].image} alt={slides[currentSlide].title} />
          </div>
          <div className="slider-content">
            <h2>{slides[currentSlide].title}</h2>
            <p>{slides[currentSlide].description}</p>
            <a href={slides[currentSlide].link} className="btn btn-primary">{slides[currentSlide].buttonText}</a>
          </div>
        </div>
        <div className="carousel-controls slider-carousel-controls">
          <button className="carousel-arrow carousel-arrow-prev" aria-label="Vorherige" onClick={prevSlide}>
            <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 2l-7 7 7 7" stroke="#463D8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="carousel-arrow carousel-arrow-next" aria-label="Nächste" onClick={nextSlide}>
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

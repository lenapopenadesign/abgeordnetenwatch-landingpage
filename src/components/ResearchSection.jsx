import { useState, useRef } from 'react'
import researchGraeff from '../assets/research-graeff.png'
import researchElnet from '../assets/research-elnet.png'
import researchAmpel from '../assets/research-ampel.png'
import researchAktien from '../assets/research-aktien.png'
import researchSeitenwechsler from '../assets/research-seitenwechsler.png'

const researchArticles = [
  {
    id: 1,
    image: researchGraeff,
    date: '17 Dez 2025',
    subtitle: 'Vier Firmen, ein Verein und Reisen nach Asien',
    title: 'Das Haus des Gräff',
    link: 'https://www.abgeordnetenwatch.de/recherchen/lobbyismus/das-haus-des-graeff'
  },
  {
    id: 2,
    image: researchElnet,
    date: '20 Nov 2025',
    subtitle: 'Reisen, Rüstung, Guttenberg',
    title: 'Wie Elnet Politik und Unternehmen zusammenbringt',
    link: 'https://www.abgeordnetenwatch.de/recherchen/lobbyismus/wie-elnet-politik-und-unternehmen-zusammenbringt'
  },
  {
    id: 3,
    image: researchAmpel,
    date: '6 Nov 2025',
    subtitle: 'Lindner, Habeck und Co.',
    title: 'Die neuen Jobs der Ampel-Minister:innen',
    link: 'https://www.abgeordnetenwatch.de/recherchen/nebentaetigkeiten/die-neuen-jobs-der-ampel-ministerinnen'
  },
  {
    id: 4,
    image: researchSeitenwechsler,
    date: '15 Jul 2025',
    subtitle: 'Spahn, Merz, Pistorius',
    title: 'Verdeckte Lobby-Verbindungen',
    link: 'https://www.abgeordnetenwatch.de/recherchen/lobbyismus/seitenwechsler'
  },
  {
    id: 5,
    image: researchAktien,
    date: '18 Jun 2025',
    subtitle: 'Mögliche Interessenkonflikte',
    title: 'Aktienbesitz im Kabinett',
    link: 'https://www.abgeordnetenwatch.de/recherchen/nebentaetigkeiten/aktienbesitz-kabinett'
  }
]

function ResearchCard({ article }) {
  return (
    <article className="research-card">
      <div className="research-image">
        <img src={article.image} alt={article.title} />
      </div>
      <div className="research-card-content">
        <span className="research-date">{article.date}</span>
        <span className="research-subtitle">{article.subtitle}</span>
        <h3>{article.title}</h3>
      </div>
    </article>
  )
}

function ResearchSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const carouselRef = useRef(null)
  const totalSlides = researchArticles.length

  const scrollToSlide = (index) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.querySelector('.research-card')?.offsetWidth || 312
      const gap = 16
      carouselRef.current.scrollTo({
        left: index * (cardWidth + gap),
        behavior: 'smooth'
      })
      setCurrentSlide(index)
    }
  }

  const goNext = () => {
    if (currentSlide < totalSlides - 1) {
      scrollToSlide(currentSlide + 1)
    }
  }

  const goPrev = () => {
    if (currentSlide > 0) {
      scrollToSlide(currentSlide - 1)
    }
  }

  return (
    <section className="research-section">
      <div className="research-inner">
        <div className="section-header">
          <h2>Unsere Recherchen</h2>
          <a href="https://www.abgeordnetenwatch.de/recherchen" className="btn btn-outline section-header-btn">Alle Recherchen</a>
        </div>
        <div className="research-carousel-container">
          <div className="research-carousel" ref={carouselRef}>
            <div className="research-cards-wrapper">
              {researchArticles.map(article => (
                <ResearchCard key={article.id} article={article} />
              ))}
            </div>
          </div>
          <div className="research-carousel-fade"></div>
        </div>
        <div className="carousel-controls">
          <button className="carousel-arrow carousel-arrow-prev" aria-label="Vorherige" onClick={goPrev}>
            <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 2l-7 7 7 7" stroke="#463D8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="carousel-dots">
            {researchArticles.map((_, index) => (
              <span
                key={index}
                className={`dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => scrollToSlide(index)}
              />
            ))}
          </div>
          <button className="carousel-arrow carousel-arrow-next" aria-label="Nächste" onClick={goNext}>
            <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2l7 7-7 7" stroke="#463D8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default ResearchSection

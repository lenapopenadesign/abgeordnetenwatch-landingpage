import { useState } from 'react'
import researchImage from '../assets/research-image.jpg'

const researchArticles = [
  {
    id: 1,
    image: researchImage,
    date: '17 Dez 2025',
    subtitle: 'Vier Firmen, ein Verein und Reisen nach Asien',
    title: 'Das Haus des Gräff',
    link: '#'
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

  return (
    <section className="research-section">
      <h2>Unsere Recherchen</h2>
      <div className="research-carousel">
        <div className="research-cards-wrapper">
          {researchArticles.map(article => (
            <ResearchCard key={article.id} article={article} />
          ))}
        </div>
      </div>
      <div className="carousel-controls">
        <div className="carousel-dots">
          {[0, 1, 2, 3, 4, 5].map(index => (
            <span
              key={index}
              className={`dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
        <a href="#" className="view-all-link">Alle sehen</a>
        <button className="carousel-arrow" aria-label="Nächste">
          <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2l7 7-7 7" stroke="#463D8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  )
}

export default ResearchSection

import { useState, useRef } from 'react'
import campaignKarenzzeit from '../assets/campaign-karenzzeit.png'
import campaignVermoegen from '../assets/campaign-vermoegen.png'
import campaignTransparenz from '../assets/campaign-transparenz.png'
import campaignFussabdruck from '../assets/campaign-fussabdruck.png'
import campaignLobbytransparenz from '../assets/campaign-lobbytransparenz.png'
import campaignParteispenden from '../assets/campaign-parteispenden.png'

const campaigns = [
  {
    id: 1,
    image: campaignKarenzzeit,
    title: 'Von der Macht zum Geld – Lobbysprünge stoppen!',
    supporters: 29746,
    goal: 35000,
    link: 'https://www.abgeordnetenwatch.de/kampagnen/karenzzeit'
  },
  {
    id: 2,
    image: campaignVermoegen,
    title: 'Vermögen offenlegen – Vertrauen zurückgewinnen!',
    supporters: 25208,
    goal: 30000,
    link: 'https://www.abgeordnetenwatch.de/kampagnen/vermoegen-offenlegen'
  },
  {
    id: 3,
    image: campaignTransparenz,
    title: 'Unabhängige Transparenz-Kontrolle jetzt!',
    supporters: 22804,
    goal: 30000,
    link: 'https://www.abgeordnetenwatch.de/kampagnen/transparenz-kontrolle'
  },
  {
    id: 4,
    image: campaignFussabdruck,
    title: 'Lobby-Fußabdruck – jetzt per Gesetz!',
    supporters: 25550,
    goal: 30000,
    link: 'https://www.abgeordnetenwatch.de/kampagnen/lobby-fussabdruck'
  },
  {
    id: 5,
    image: campaignLobbytransparenz,
    title: 'Volle Lobbytransparenz jetzt!',
    supporters: 54405,
    goal: 60000,
    link: 'https://www.abgeordnetenwatch.de/kampagnen/lobbytransparenz'
  },
  {
    id: 6,
    image: campaignParteispenden,
    title: 'Unternehmensspenden an Parteien verbieten!',
    supporters: 77058,
    goal: 80000,
    link: 'https://www.abgeordnetenwatch.de/kampagnen/parteispenden'
  }
]

function CampaignCard({ campaign }) {
  const progress = (campaign.supporters / campaign.goal) * 100

  return (
    <article className="campaign-card">
      <div className="campaign-image">
        <img src={campaign.image} alt={campaign.title} />
      </div>
      <div className="campaign-card-content">
        <h3>{campaign.title}</h3>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${Math.min(progress, 100)}%` }}></div>
        </div>
        <p className="supporters">{campaign.supporters.toLocaleString('de-DE')} Menschen unterstützen die Petition</p>
        <p className="goal">{campaign.goal.toLocaleString('de-DE')} Zeichnungen müssen erreicht werden</p>
        <a href={campaign.link} className="link-underline">Jetzt mitmachen!</a>
      </div>
    </article>
  )
}

function CampaignsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const carouselRef = useRef(null)
  const totalSlides = campaigns.length

  const scrollToSlide = (index) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.querySelector('.campaign-card')?.offsetWidth || 312
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
    <section className="campaigns-section">
      <div className="campaigns-inner">
        <div className="section-header">
          <h2>Unsere Kampagnen</h2>
          <a href="https://www.abgeordnetenwatch.de/kampagnen" className="btn btn-outline section-header-btn">Alle Kampagnen</a>
        </div>
        <div className="campaigns-carousel-container">
          <div className="campaigns-carousel" ref={carouselRef}>
            <div className="campaigns-cards-wrapper">
              {campaigns.map(campaign => (
                <CampaignCard key={campaign.id} campaign={campaign} />
              ))}
            </div>
          </div>
          <div className="campaigns-carousel-fade"></div>
        </div>
        <div className="carousel-controls">
          <button className="carousel-arrow carousel-arrow-prev" aria-label="Vorherige" onClick={goPrev}>
            <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 2l-7 7 7 7" stroke="#463D8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="carousel-dots">
            {campaigns.map((_, index) => (
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

export default CampaignsSection

import { useState } from 'react'
import campaignImage from '../assets/campaign-image.jpg'

const campaigns = [
  {
    id: 1,
    image: campaignImage,
    title: 'Von der Macht zum Geld – Lobbysprünge stoppen!',
    supporters: 29692,
    goal: 35000,
    link: '#'
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

  return (
    <section className="campaigns-section">
      <h2>Unsere Kampagnen</h2>
      <div className="campaigns-carousel">
        <div className="campaigns-cards-wrapper">
          {campaigns.map(campaign => (
            <CampaignCard key={campaign.id} campaign={campaign} />
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
        <button className="carousel-arrow" aria-label="Nächste">
          <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2l7 7-7 7" stroke="#463D8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  )
}

export default CampaignsSection

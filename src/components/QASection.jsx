import { useState } from 'react'
import avatarAli from '../assets/avatar-ali.png'
import topicsBg from '../assets/topics-bg.png'

const qaData = [
  {
    id: 1,
    asker: 'Markus M.',
    date: '19.07.2024',
    question: 'Sehr geehrte Frau Ali, welche konkreten Handlungsoptionen und diplomatischen Lösungswege werden beim BSW im Sinne einer schnellstmöglichen Beendigung des Ukrainekriegs diskutiert?',
    reactions: 7,
    politician: {
      name: 'Amira Mohamed Ali',
      avatar: avatarAli,
      party: 'BSW',
      partyColor: '#FF8040',
      answerPending: true
    },
    tags: ['Bundestag', 'Außenpolitik', 'Internationale Beziehungen']
  }
]

const popularTopics = [
  'Außenpolitik', 'Außenpolitik', 'Bundestag', 'Außenpolitik',
  'Internationale Beziehungen', 'Bundestag', 'Außenpolitik', 'Außenpolitik'
]

function QACard({ item }) {
  return (
    <article className="qa-card">
      <div className="qa-card-header">
        <div className="qa-meta">
          <span className="qa-label">Frage</span>
          <span>von</span>
          <span>{item.asker}</span>
          <span>•</span>
          <span>{item.date}</span>
        </div>
        <div className="qa-reactions">
          <span>{item.reactions}</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 9.5L8 13l3.5-3.5M8 3v10" stroke="#666" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      <p className="qa-question">{item.question}</p>
      <div className="qa-card-body">
        <div className="politician-info">
          <img src={item.politician.avatar} alt={item.politician.name} className="politician-avatar" />
          <div className="politician-details">
            <div className="answer-status">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="6" cy="6" r="5" stroke={item.politician.partyColor} strokeWidth="2"/>
              </svg>
              <span>Antwort ausstehend</span>
              <span>von</span>
            </div>
            <span className="politician-name">{item.politician.name}</span>
            <div className="party-info">
              <span className="party-dot" style={{ backgroundColor: item.politician.partyColor }}></span>
              <span>{item.politician.party}</span>
            </div>
          </div>
        </div>
        <div className="qa-tags">
          {item.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <div className="qa-card-footer">
          <div className="qa-actions">
            <button className="action-button" aria-label="Benachrichtigen">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5.333A4 4 0 0 0 4 5.333c0 4.667-2 6-2 6h12s-2-1.333-2-6zM9.153 13.333a1.333 1.333 0 0 1-2.306 0" stroke="#3D3D3D" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="action-button" aria-label="Teilen">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5.333a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM4 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM12 14.667a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM5.727 8.94l4.553 2.787M10.273 4.273 5.727 7.06" stroke="#3D3D3D" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <a href="#" className="details-link">
            Details
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12l4-4-4-4" stroke="#3D3D3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </article>
  )
}

function QASection() {
  const [activeTab, setActiveTab] = useState('fragen')
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <section className="qa-section">
      <div className="qa-tabs">
        <button
          className={`tab-button ${activeTab === 'fragen' ? 'active' : ''}`}
          onClick={() => setActiveTab('fragen')}
        >
          Fragen
        </button>
        <button
          className={`tab-button ${activeTab === 'antworten' ? 'active' : ''}`}
          onClick={() => setActiveTab('antworten')}
        >
          Antworten
        </button>
      </div>

      <div className="qa-carousel">
        <div className="qa-cards-wrapper">
          {qaData.map(item => (
            <QACard key={item.id} item={item} />
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

      <div className="popular-topics">
        <div className="popular-topics-bg">
          <img src={topicsBg} alt="" />
        </div>
        <h2>Beliebte Themen</h2>
        <div className="topics-tags">
          {popularTopics.map((topic, index) => (
            <span key={index} className="tag">{topic}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default QASection

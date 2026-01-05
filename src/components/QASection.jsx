import { useState, useRef, useEffect } from 'react'
import topicsBg from '../assets/topics-bg.png'
import avatarDemasi from '../assets/avatar-demasi.jpg'
import avatarFrei from '../assets/avatar-frei.jpg'
import avatarKiesewetter from '../assets/avatar-kiesewetter.jpg'
import avatarNotz from '../assets/avatar-notz.jpg'
import avatarHeiligenstadt from '../assets/avatar-heiligenstadt.jpg'
import avatarHardt from '../assets/avatar-hardt.jpg'
import avatarBrandner from '../assets/avatar-brandner.jpg'

// Unanswered questions
const questionsData = [
  {
    id: 1,
    asker: 'Bürger:in',
    date: '30.12.2025',
    question: 'Was halten Sie von einer Art "Roboter-Steuer" für Unternehmen, die massiv auf Automatisierung und KI setzen?',
    reactions: 3,
    politician: {
      name: 'Fabio De Masi',
      avatar: avatarDemasi,
      party: 'BSW',
      partyColor: '#FF8040',
      answerPending: true
    },
    tags: ['Künstliche Intelligenz', 'Steuersystem']
  },
  {
    id: 2,
    asker: 'Bürger:in',
    date: '30.12.2025',
    question: 'Thema Ghostjobs auf dem Arbeitsmarkt - wie kann so etwas rechtens sein?',
    reactions: 5,
    politician: {
      name: 'Thorsten Frei',
      avatar: avatarFrei,
      party: 'CDU',
      partyColor: '#000000',
      answerPending: true
    },
    tags: ['Arbeitsmarkt']
  },
  {
    id: 3,
    asker: 'Bürger:in',
    date: '30.12.2025',
    question: 'Sehr geehrter Herr Kiesewetter, halten Sie an Ihrer im September 2025 geäußerten Position zur Verteidigungspolitik fest?',
    reactions: 8,
    politician: {
      name: 'Roderich Kiesewetter',
      avatar: avatarKiesewetter,
      party: 'CDU',
      partyColor: '#000000',
      answerPending: true
    },
    tags: ['Verteidigungspolitik', 'Bundestag']
  },
  {
    id: 4,
    asker: 'Bürger:in',
    date: '30.12.2025',
    question: 'Was wurde aus der Klage vom 17.10.2023 vor dem Bundesverfassungsgericht?',
    reactions: 4,
    politician: {
      name: 'Konstantin von Notz',
      avatar: avatarNotz,
      party: 'GRÜNE',
      partyColor: '#46962B',
      answerPending: true
    },
    tags: ['Bundesverfassungsgericht', 'Rechtsstaat']
  },
  {
    id: 5,
    asker: 'Bürger:in',
    date: '30.12.2025',
    question: 'Warum verweigert die Regierung ihre Pflicht gegenüber den gesetzlichen Krankenkassen?',
    reactions: 6,
    politician: {
      name: 'Frauke Heiligenstadt',
      avatar: avatarHeiligenstadt,
      party: 'SPD',
      partyColor: '#E3000F',
      answerPending: true
    },
    tags: ['Krankenkasse', 'Bürgergeld']
  },
  {
    id: 6,
    asker: 'Bürger:in',
    date: '30.12.2025',
    question: 'Warum exportiert Deutschland noch immer Waffen an die Vereinigten Arabischen Emirate trotz deren Rolle im Sudan-Konflikt?',
    reactions: 1,
    politician: {
      name: 'Jürgen Hardt',
      avatar: avatarHardt,
      party: 'CDU',
      partyColor: '#000000',
      answerPending: true
    },
    tags: ['Sudan', 'Waffenexporte', 'Außenpolitik']
  }
]

// Answered questions
const answersData = [
  {
    id: 101,
    asker: 'Bürger:in',
    date: '30.12.2025',
    question: 'Was bedeutet für Sie das wichtigste Gebot von Jesus Christus "Liebe deinen Nächsten wie dich selbst"?',
    answer: 'Das Gebot der Nächstenliebe ist für mich ein zentraler Wert, der uns dazu aufruft, Verantwortung füreinander zu übernehmen.',
    reactions: 12,
    politician: {
      name: 'Thorsten Frei',
      avatar: avatarFrei,
      party: 'CDU',
      partyColor: '#000000',
      answerPending: false
    },
    tags: ['Christentum', 'Union']
  },
  {
    id: 102,
    asker: 'Bürger:in',
    date: '30.12.2025',
    question: 'Sollte der Staat nicht erst einmal seine "Schulden" bei den GKVs zahlen, bevor Beitragszahler mit Leistungskürzungen belastet werden?',
    answer: 'Die Frage nach der "richtigen" Finanzierung der GKV wird seit September in der "Finanzkommission Gesundheit" diskutiert.',
    reactions: 8,
    politician: {
      name: 'Thorsten Frei',
      avatar: avatarFrei,
      party: 'CDU',
      partyColor: '#000000',
      answerPending: false
    },
    tags: ['Gesetzliche Krankenversicherung']
  },
  {
    id: 103,
    asker: 'Bürger:in',
    date: '30.12.2025',
    question: 'Warum zuerst an Leistungsabbau denken und nicht zunächst mal Strukturveränderungen schaffen?',
    answer: 'Aus meiner Sicht schließt das Eine das Andere doch gar nicht aus.',
    reactions: 5,
    politician: {
      name: 'Thorsten Frei',
      avatar: avatarFrei,
      party: 'CDU',
      partyColor: '#000000',
      answerPending: false
    },
    tags: ['Gesundheitspolitik']
  },
  {
    id: 104,
    asker: 'Bürger:in',
    date: '30.12.2025',
    question: 'Ich habe eine Frage zur Kopplung des Renteneintrittsalters an die Zahl der geleisteten Arbeitsjahre.',
    answer: 'Vor Weihnachten haben wir die Rentenkommission eingesetzt, die schon in sechs Monaten ihren Bericht vorlegen soll.',
    reactions: 15,
    politician: {
      name: 'Thorsten Frei',
      avatar: avatarFrei,
      party: 'CDU',
      partyColor: '#000000',
      answerPending: false
    },
    tags: ['Rente']
  },
  {
    id: 105,
    asker: 'Bürger:in',
    date: '29.12.2025',
    question: 'Gibt es die AfD auch in meiner Stadt Neumünster?',
    answer: 'Natürlich gibt es die.',
    reactions: 3,
    politician: {
      name: 'Stephan Brandner',
      avatar: avatarBrandner,
      party: 'AfD',
      partyColor: '#009EE0',
      answerPending: false
    },
    tags: ['Kommunalpolitik', 'AfD']
  },
  {
    id: 106,
    asker: 'Bürger:in',
    date: '29.12.2025',
    question: 'Gesundheitssystem durch Wegfall von Leistungen günstiger machen - Was meinen Sie hier konkret?',
    answer: 'Bis Ende März 2026 erwarten wir von den zehn Expertinnen und Experten einen ersten Bericht mit kurzfristigen Maßnahmen.',
    reactions: 7,
    politician: {
      name: 'Thorsten Frei',
      avatar: avatarFrei,
      party: 'CDU',
      partyColor: '#000000',
      answerPending: false
    },
    tags: ['Gesundheitssystem']
  }
]

const popularTopics = [
  'Außenpolitik', 'Künstliche Intelligenz', 'Arbeitsmarkt', 'Verteidigungspolitik',
  'Waffenexporte', 'Krankenkasse', 'Bundestag', 'Steuersystem'
]

function QACard({ item }) {
  const hasAnswer = item.answer && !item.politician.answerPending

  return (
    <article className="qa-card">
      <div className="qa-card-purple">
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
              <path d="M12 5.333A4 4 0 0 0 4 5.333c0 4.667-2 6-2 6h12s-2-1.333-2-6zM9.153 13.333a1.333 1.333 0 0 1-2.306 0" stroke="#666" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <p className="qa-question">{item.question}</p>
      </div>
      <div className="qa-card-body">
        <div className="politician-info">
          <img src={item.politician.avatar} alt={item.politician.name} className="politician-avatar" />
          <div className="politician-details">
            <div className="answer-status">
              {hasAnswer ? (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="6" r="5" fill={item.politician.partyColor}/>
                  <path d="M4 6l1.5 1.5L8 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="6" r="5" stroke={item.politician.partyColor} strokeWidth="2"/>
                </svg>
              )}
              <span>{hasAnswer ? 'Antwort' : 'Antwort ausstehend'}</span>
              <span>von</span>
            </div>
            <span className="politician-name">{item.politician.name}</span>
            <div className="party-info">
              <span className="party-dot" style={{ backgroundColor: item.politician.partyColor }}></span>
              <span>{item.politician.party}</span>
            </div>
          </div>
        </div>
        {hasAnswer && (
          <div className="qa-answer">
            <p>{item.answer}</p>
          </div>
        )}
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
  const [currentSlide, setCurrentSlide] = useState(0)
  const carouselRef = useRef(null)

  const currentData = questionsData
  const totalSlides = currentData.length

  const scrollToSlide = (index) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.querySelector('.qa-card')?.offsetWidth || 312
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
    <section className="qa-section">
      <div className="qa-inner">
        <div className="qa-header">
          <h2>Ausgewählte Fragen & Antworten</h2>
          <a href="#" className="btn btn-outline qa-header-btn">Alle Fragen & Antworten</a>
        </div>

        <div className="qa-carousel-container">
          <div className="qa-carousel" ref={carouselRef}>
            <div className="qa-cards-wrapper">
              {currentData.map(item => (
                <QACard key={item.id} item={item} />
              ))}
            </div>
          </div>
          <div className="qa-carousel-fade"></div>
        </div>

        <div className="carousel-controls">
          <button className="carousel-arrow carousel-arrow-prev" aria-label="Vorherige" onClick={goPrev}>
            <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 2l-7 7 7 7" stroke="#463D8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="carousel-dots">
            {currentData.map((_, index) => (
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

        <div className="qa-footer-btn">
          <a href="#" className="btn btn-outline btn-full-width">Alle Fragen & Antworten</a>
        </div>
      </div>

      <div className="popular-topics">
        <div className="popular-topics-bg">
          <img src={topicsBg} alt="" />
        </div>
        <div className="popular-topics-inner">
          <h2>Beliebte Themen</h2>
          <div className="topics-tags">
            {popularTopics.map((topic, index) => (
              <a key={index} href="#" className="tag tag-clickable">{topic}</a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default QASection

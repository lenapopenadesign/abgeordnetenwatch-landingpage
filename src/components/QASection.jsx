import topicsBg from '../assets/topics-bg.png'
import avatarMerz from '../assets/avatar-merz.jpg'
import avatarHabeck from '../assets/avatar-habeck.jpg'
import avatarFrei from '../assets/avatar-frei.jpg'

// 3 static Q&A cards
const qaData = [
  {
    id: 1,
    asker: 'Bürger:in',
    date: '05.01.2026',
    question: 'Ist die gewaltsame Entführung des Präsidenten eines souveränen Staates Ihrer Meinung nach mit dem Völkerrecht vereinbar?',
    reactions: 12,
    politician: {
      name: 'Friedrich Merz',
      avatar: avatarMerz,
      party: 'CDU',
      partyColor: '#000000',
      answerPending: true
    },
    tags: ['Völkerrecht', 'Außenpolitik']
  },
  {
    id: 2,
    asker: 'Daniel W.',
    date: '11.02.2025',
    question: 'Warum laden wir nicht alle Superreichen ein, ihren Beitrag für unser Land zu leisten? Konkrete Projekte, für die sie sich mit Geld und Netzwerk uneigennützig engagieren?',
    answer: 'Insbesondere bei der Konzentration von sehr hohen Vermögen gibt es auch im internationalen Vergleich große Handlungsnotwendigkeit in Deutschland.',
    reactions: 8,
    politician: {
      name: 'Robert Habeck',
      avatar: avatarHabeck,
      party: 'GRÜNE',
      partyColor: '#46962B',
      answerPending: false
    },
    tags: ['Vermögenssteuer', 'Demokratie']
  },
  {
    id: 3,
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
                  <circle cx="6" cy="6" r="5" fill="#3D3D3D"/>
                  <path d="M4 6l1.5 1.5L8 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="6" r="5" stroke="#3D3D3D" strokeWidth="2"/>
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
  return (
    <section className="qa-section">
      <div className="qa-inner">
        <div className="qa-header">
          <h2>Ausgewählte Fragen & Antworten</h2>
          <a href="#" className="btn btn-outline qa-header-btn">Alle Fragen & Antworten</a>
        </div>

        <div className="qa-cards-grid">
          {qaData.map(item => (
            <QACard key={item.id} item={item} />
          ))}
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

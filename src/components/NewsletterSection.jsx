import { useState } from 'react'
import newsletterImage from '../assets/newsletter-image.jpg'

function NewsletterSection() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Newsletter signup:', email)
    // TODO: Implement newsletter signup
  }

  return (
    <section className="newsletter-section">
      <div className="newsletter-image">
        <img src={newsletterImage} alt="Werde Politikinsider:in" />
      </div>
      <div className="newsletter-content">
        <h2>Werde Politikinsider:in</h2>
        <ul className="newsletter-benefits">
          <li>Exklusive Recherchen zu Lobbyismus, Parteispenden und Nebeneinkünften</li>
          <li>Alles, was man über Großspenden an Parteien wissen muss</li>
          <li>Die wichtigsten Fragen und Antworten von Abgeordneten</li>
          <li>Der Newsletter erscheint wöchentlich und ist kostenlos</li>
        </ul>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <div className="input-field input-field-dark input-field-no-icon">
            <input
              type="email"
              placeholder="E-Mail-Adresse*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-orange">Newsletter abonnieren</button>
        </form>
      </div>
    </section>
  )
}

export default NewsletterSection

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
      <div className="newsletter-inner">
        <div className="newsletter-image">
          <img src={newsletterImage} alt="Werde Politikinsider:in" />
        </div>
        <div className="newsletter-content">
          <h2>Werde Politikinsider:in</h2>
          <ul className="newsletter-benefits">
            <li><strong>Exklusive Recherchen</strong> zu Lobbyismus, Parteispenden und Nebeneinkünften</li>
            <li>Alles, was man über <strong>Großspenden</strong> an Parteien wissen muss</li>
            <li>Die <strong>wichtigsten Fragen und Antworten</strong> von Abgeordneten</li>
            <li>Der Newsletter erscheint <strong>wöchentlich und ist kostenlos</strong></li>
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
      </div>
    </section>
  )
}

export default NewsletterSection

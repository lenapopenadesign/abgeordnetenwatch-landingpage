import donationImage from '../assets/donation-image.jpg'
import borisHekele from '../assets/boris-hekele.jpg'

function DonationSection() {
  return (
    <section className="donation-section">
      <div className="donation-inner">
        <div className="donation-image">
          <img src={donationImage} alt="Spenden" />
        </div>
        <div className="donation-content">
          <div className="quote-icon">
            <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.6 0v.1L5.3 19H0l3.4-10.2C1.4 7.7 0 5.7 0 3.4 0 1.5 1.5 0 3.4 0h7.2zM24 0v.1L18.7 19h-5.3l3.4-10.2c-2-1.1-3.4-3.1-3.4-5.4C13.4 1.5 14.9 0 16.8 0H24z" fill="#463D8A"/>
            </svg>
          </div>
          <p className="donation-quote">
            Unsere Recherchen decken Missstände auf. Bitte unterstützen Sie uns dabei mit einer Spende.
          </p>
          <div className="donor-info">
            <img src={borisHekele} alt="Boris Hekele" className="donor-avatar" />
            <div className="donor-details">
              <span className="donor-name">Boris Hekele</span>
              <span className="donor-title">Gründer von abgeordnetenwatch.de</span>
            </div>
          </div>
          <a href="#" className="btn btn-orange">Jetzt Förder:in werden</a>
        </div>
      </div>
    </section>
  )
}

export default DonationSection

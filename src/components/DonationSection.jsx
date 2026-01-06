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
              <path d="M6.49833 10.7809C11.7753 11.4734 11.0073 20.1258 4.30678 18.8231C1.75871 18.3281 0.647211 16.492 0.201561 14.1199C-1.06723 7.39331 3.85327 2.87988 9.36884 0L10.6271 2.05925C7.81955 3.39533 4.63709 5.66231 3.77462 8.7576C3.68287 9.08328 3.40762 10.2193 3.42597 10.4732C3.43383 10.5912 3.53345 10.7809 3.61471 10.7809C4.47456 10.7809 5.69616 10.6758 6.49833 10.7809Z" fill="#463D8A"/>
              <path d="M19.8712 10.7809C25.1482 11.4734 24.3802 20.1258 17.6797 18.8231C15.1316 18.3281 14.0201 16.492 13.5745 14.1199C12.3057 7.39331 18.2262 2.87988 23.7417 0L25 2.05925C22.1924 3.39533 19.01 5.66231 18.1475 8.7576C18.0558 9.08328 17.7805 10.2193 17.7989 10.4732C17.8067 10.5912 17.9064 10.7809 17.9876 10.7809C18.8475 10.7809 20.0691 10.6758 20.8712 10.7809Z" fill="#463D8A"/>
            </svg>
          </div>
          <p className="donation-quote">
            Mit deiner Spende können wir geheimen Lobbyismus zurückdrängen
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

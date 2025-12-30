import logoWhite from '../assets/logo-white.svg'

const footerLinks = {
  left: [
    { label: 'Newsletter', href: '#' },
    { label: 'Spenden', href: '#' },
    { label: 'Impressum', href: '#' },
    { label: 'Presse', href: '#' }
  ],
  right: [
    { label: 'Datenschutz', href: '#' },
    { label: 'API', href: '#' },
    { label: 'Jobs', href: '#' },
    { label: 'Kontakt', href: '#' }
  ]
}

const socialLinks = [
  { label: 'Facebook', icon: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z' },
  { label: 'Instagram', icon: 'instagram' },
  { label: 'Twitter', icon: 'M4 4l6.5 8L4 20h2l5.5-6.5L16 20h4l-7-8.5L19 4h-2l-5 6-4-6H4z' },
  { label: 'Mastodon', icon: 'mastodon' },
  { label: 'LinkedIn', icon: 'linkedin' },
  { label: 'YouTube', icon: 'youtube' }
]

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div className="footer-column">
          {footerLinks.left.map((link, index) => (
            <a key={index} href={link.href}>{link.label}</a>
          ))}
        </div>
        <div className="footer-column">
          {footerLinks.right.map((link, index) => (
            <a key={index} href={link.href}>{link.label}</a>
          ))}
        </div>
      </div>

      <a href="#" className="english-link">More Information in English</a>

      <div className="social-links">
        <a href="#" className="social-icon" aria-label="Facebook">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z" fill="#A3A3A3"/>
          </svg>
        </a>
        <a href="#" className="social-icon" aria-label="Instagram">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="20" height="20" rx="5" stroke="#A3A3A3" strokeWidth="2"/>
            <circle cx="12" cy="12" r="4" stroke="#A3A3A3" strokeWidth="2"/>
            <circle cx="18" cy="6" r="1" fill="#A3A3A3"/>
          </svg>
        </a>
        <a href="#" className="social-icon" aria-label="Twitter/X">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4l6.5 8L4 20h2l5.5-6.5L16 20h4l-7-8.5L19 4h-2l-5 6-4-6H4z" fill="#A3A3A3"/>
          </svg>
        </a>
        <a href="#" className="social-icon" aria-label="Mastodon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.327 8.566c0-4.339-2.843-5.61-2.843-5.61-1.433-.658-3.894-.935-6.451-.956h-.063c-2.557.021-5.016.298-6.45.956 0 0-2.843 1.272-2.843 5.61 0 .993-.019 2.181.012 3.441.103 4.243.778 8.425 4.701 9.463 1.809.479 3.362.579 4.612.51 2.268-.126 3.541-.809 3.541-.809l-.075-1.646s-1.621.511-3.441.449c-1.804-.062-3.707-.194-3.999-2.409a4.523 4.523 0 0 1-.04-.621s1.77.432 4.014.535c1.372.063 2.658-.08 3.965-.236 2.506-.299 4.688-1.843 4.962-3.254.434-2.223.398-5.424.398-5.424z" fill="#A3A3A3"/>
          </svg>
        </a>
        <a href="#" className="social-icon" aria-label="LinkedIn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="#A3A3A3"/>
          </svg>
        </a>
        <a href="#" className="social-icon" aria-label="YouTube">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" fill="#A3A3A3"/>
            <path d="M9.75 15.02l5.75-3.27-5.75-3.27v6.54z" fill="#3D3D3D"/>
          </svg>
        </a>
      </div>

      <div className="footer-logo">
        <img src={logoWhite} alt="abgeordnetenwatch.de" />
      </div>
    </footer>
  )
}

export default Footer

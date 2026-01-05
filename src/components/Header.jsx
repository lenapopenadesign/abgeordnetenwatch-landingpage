import { useState } from 'react'
import logo from '../assets/logo.svg'
import iconBundestag from '../assets/icon-bundestag.svg'
import iconEuropa from '../assets/icon-europa.svg'
import iconLandtage from '../assets/icon-landtage.svg'
import iconArchive from '../assets/icon-archive.svg'

const menuItems = [
  { label: 'Politiker:in befragen', href: 'https://www.abgeordnetenwatch.de/politiker-befragen' },
  { label: 'Recherchen', href: 'https://www.abgeordnetenwatch.de/recherchen' },
  { label: 'Kampagnen', href: 'https://www.abgeordnetenwatch.de/kampagnen' },
  { label: 'Parlamente', href: '#', hasDropdown: true },
  { label: 'Über uns', href: 'https://www.abgeordnetenwatch.de/ueber-uns' }
]

const mobileMenuItems = [
  { label: 'Politiker:in befragen', href: 'https://www.abgeordnetenwatch.de/politiker-befragen' },
  { label: 'Recherchen', href: 'https://www.abgeordnetenwatch.de/recherchen' },
  { label: 'Forderungen & Petitionen', href: 'https://www.abgeordnetenwatch.de/kampagnen' },
  { label: 'Parlamente', href: '#', hasDropdown: true },
  { label: 'Über uns', href: 'https://www.abgeordnetenwatch.de/ueber-uns' }
]

const parliamentItems = [
  {
    label: 'Bundestag 2025',
    href: 'https://www.abgeordnetenwatch.de/bundestag/wahl-2025',
    isElection: true
  },
  {
    label: 'Bundestag',
    href: 'https://www.abgeordnetenwatch.de/bundestag',
    icon: iconBundestag
  },
  {
    label: 'Europäisches Parlament',
    href: 'https://www.abgeordnetenwatch.de/eu',
    icon: iconEuropa
  },
  {
    label: 'Landtage',
    href: 'https://www.abgeordnetenwatch.de/landtage',
    icon: iconLandtage,
    hasSubmenu: true
  },
  {
    label: 'Archiv',
    href: 'https://www.abgeordnetenwatch.de/archiv',
    icon: iconArchive,
    isSmallIcon: true
  }
]

const landtageItems = [
  // Column 1
  [
    { label: 'Baden-Württemberg', href: 'https://www.abgeordnetenwatch.de/baden-wuerttemberg' },
    { label: 'Bayern', href: 'https://www.abgeordnetenwatch.de/bayern' },
    { label: 'Berlin', href: 'https://www.abgeordnetenwatch.de/berlin' },
    { label: 'Brandenburg', href: 'https://www.abgeordnetenwatch.de/brandenburg' }
  ],
  // Column 2
  [
    { label: 'Bremen', href: 'https://www.abgeordnetenwatch.de/bremen' },
    { label: 'Hamburg 2025', href: 'https://www.abgeordnetenwatch.de/hamburg/wahl-2025', isElection: true },
    { label: 'Hamburg', href: 'https://www.abgeordnetenwatch.de/hamburg' },
    { label: 'Hessen', href: 'https://www.abgeordnetenwatch.de/hessen' }
  ],
  // Column 3
  [
    { label: 'Mecklenburg-Vorpommern', href: 'https://www.abgeordnetenwatch.de/mecklenburg-vorpommern' },
    { label: 'Nordrhein-Westfalen', href: 'https://www.abgeordnetenwatch.de/nordrhein-westfalen' },
    { label: 'Schleswig-Holstein', href: 'https://www.abgeordnetenwatch.de/schleswig-holstein' },
    { label: 'Niedersachsen', href: 'https://www.abgeordnetenwatch.de/niedersachsen' }
  ],
  // Column 4
  [
    { label: 'Rheinland-Pfalz', href: 'https://www.abgeordnetenwatch.de/rheinland-pfalz' },
    { label: 'Thüringen', href: 'https://www.abgeordnetenwatch.de/thueringen' },
    { label: 'Saarland', href: 'https://www.abgeordnetenwatch.de/saarland' }
  ],
  // Column 5
  [
    { label: 'Sachsen-Anhalt', href: 'https://www.abgeordnetenwatch.de/sachsen-anhalt' },
    { label: 'Sachsen', href: 'https://www.abgeordnetenwatch.de/sachsen' }
  ]
]

// Mobile Landtage items (flat list for mobile)
const mobileLandtageItems = [
  { label: 'Baden-Württemberg', href: 'https://www.abgeordnetenwatch.de/baden-wuerttemberg' },
  { label: 'Bayern', href: 'https://www.abgeordnetenwatch.de/bayern' },
  { label: 'Berlin', href: 'https://www.abgeordnetenwatch.de/berlin' },
  { label: 'Brandenburg', href: 'https://www.abgeordnetenwatch.de/brandenburg' },
  { label: 'Bremen', href: 'https://www.abgeordnetenwatch.de/bremen' },
  { label: 'Hamburg 2025', href: 'https://www.abgeordnetenwatch.de/hamburg/wahl-2025', isElection: true },
  { label: 'Hamburg', href: 'https://www.abgeordnetenwatch.de/hamburg' },
  { label: 'Hessen', href: 'https://www.abgeordnetenwatch.de/hessen' },
  { label: 'Mecklenburg-Vorpommern', href: 'https://www.abgeordnetenwatch.de/mecklenburg-vorpommern' },
  { label: 'Niedersachsen', href: 'https://www.abgeordnetenwatch.de/niedersachsen' },
  { label: 'Nordrhein-Westfalen', href: 'https://www.abgeordnetenwatch.de/nordrhein-westfalen' },
  { label: 'Rheinland-Pfalz', href: 'https://www.abgeordnetenwatch.de/rheinland-pfalz' },
  { label: 'Saarland', href: 'https://www.abgeordnetenwatch.de/saarland' },
  { label: 'Sachsen', href: 'https://www.abgeordnetenwatch.de/sachsen' },
  { label: 'Sachsen-Anhalt', href: 'https://www.abgeordnetenwatch.de/sachsen-anhalt' },
  { label: 'Schleswig-Holstein', href: 'https://www.abgeordnetenwatch.de/schleswig-holstein' },
  { label: 'Thüringen', href: 'https://www.abgeordnetenwatch.de/thueringen' }
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [parliamentsOpen, setParliamentsOpen] = useState(false)
  const [landtageOpen, setLandtageOpen] = useState(false)
  const [mobileParliamentsOpen, setMobileParliamentsOpen] = useState(false)
  const [mobileLandtageOpen, setMobileLandtageOpen] = useState(false)

  const handleParliamentsClick = (e) => {
    e.preventDefault()
    setParliamentsOpen(!parliamentsOpen)
    if (parliamentsOpen) {
      setLandtageOpen(false)
    }
  }

  const handleMobileParliamentsClick = (e) => {
    e.preventDefault()
    setMobileParliamentsOpen(!mobileParliamentsOpen)
    if (mobileParliamentsOpen) {
      setMobileLandtageOpen(false)
    }
  }

  const handleMobileLandtageClick = (e) => {
    e.preventDefault()
    setMobileLandtageOpen(!mobileLandtageOpen)
  }

  const handleLandtageClick = (e) => {
    e.preventDefault()
    setLandtageOpen(!landtageOpen)
  }

  return (
    <header className={`header ${parliamentsOpen ? 'dropdown-open' : ''}`}>
      <div className="header-inner">
        <div className="header-logo">
          <a href="/">
            <img src={logo} alt="abgeordnetenwatch.de" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-menu">
            {menuItems.map((item, index) => (
              <li key={index} className="nav-item">
                {item.hasDropdown ? (
                  <button
                    className={`nav-link nav-link-button ${parliamentsOpen ? 'active' : ''}`}
                    onClick={handleParliamentsClick}
                  >
                    {item.label}
                    <svg className={`nav-chevron ${parliamentsOpen ? 'rotated' : ''}`} width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 2l6 4 6-4" stroke="#3D3D3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                ) : (
                  <a href={item.href} className="nav-link">
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <button className="icon-button" aria-label="Suche">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35" stroke="#3D3D3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="icon-button" aria-label="Konto">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.667 17.5v-1.667a3.333 3.333 0 0 0-3.334-3.333H6.667a3.333 3.333 0 0 0-3.334 3.333V17.5M10 9.167a3.333 3.333 0 1 0 0-6.667 3.333 3.333 0 0 0 0 6.667z" stroke="#3D3D3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <a href="https://www.abgeordnetenwatch.de/spenden" className="btn btn-orange btn-nav">Spenden</a>
          </div>
        </nav>

        {/* Mobile Actions */}
        <div className="header-actions mobile-only">
          <button className="icon-button" aria-label="Suche">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35" stroke="#3D3D3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="icon-button" aria-label="Konto">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.667 17.5v-1.667a3.333 3.333 0 0 0-3.334-3.333H6.667a3.333 3.333 0 0 0-3.334 3.333V17.5M10 9.167a3.333 3.333 0 1 0 0-6.667 3.333 3.333 0 0 0 0 6.667z" stroke="#3D3D3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            className={`icon-button burger-menu ${menuOpen ? 'active' : ''}`}
            aria-label="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-menu-nav">
            {mobileMenuItems.map((item, index) => (
              item.hasDropdown ? (
                <div key={index} className="mobile-menu-parlamente-wrapper">
                  <button
                    className="mobile-menu-item mobile-menu-item-button"
                    onClick={handleMobileParliamentsClick}
                  >
                    <span>{item.label}</span>
                    <svg className={`mobile-menu-chevron ${mobileParliamentsOpen ? 'rotated' : ''}`} width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 2l6 4 6-4" stroke="#3D3D3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  {/* Parliament Submenu */}
                  {mobileParliamentsOpen && (
                    <div className="mobile-parliament-submenu">
                      {/* Bundestag 2025 with Election Tag */}
                      <a href="https://www.abgeordnetenwatch.de/bundestag/wahl-2025" className="mobile-parliament-item">
                        <span className="mobile-election-tag">Wahl</span>
                        <span>Bundestag 2025</span>
                      </a>

                      {/* Bundestag */}
                      <a href="https://www.abgeordnetenwatch.de/bundestag" className="mobile-parliament-item">
                        <img src={iconBundestag} alt="" className="mobile-parliament-icon" />
                        <span>Bundestag</span>
                      </a>

                      {/* Europäisches Parlament */}
                      <a href="https://www.abgeordnetenwatch.de/eu" className="mobile-parliament-item">
                        <img src={iconEuropa} alt="" className="mobile-parliament-icon" />
                        <span>Europäisches Parlament</span>
                      </a>

                      {/* Landtage */}
                      <div className="mobile-landtage-wrapper">
                        <button
                          className="mobile-parliament-item mobile-parliament-item-button"
                          onClick={handleMobileLandtageClick}
                        >
                          <img src={iconLandtage} alt="" className="mobile-parliament-icon" />
                          <span>Landtage</span>
                          <svg className={`mobile-menu-chevron ${mobileLandtageOpen ? 'rotated' : ''}`} width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2l6 4 6-4" stroke="#3D3D3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>

                        {/* Landtage List */}
                        {mobileLandtageOpen && (
                          <div className="mobile-landtage-list">
                            {mobileLandtageItems.map((state, index) => (
                              <a key={index} href={state.href} className="mobile-landtage-item">
                                {state.isElection && <span className="mobile-landtage-election-tag">Wahl</span>}
                                <span>{state.label}</span>
                              </a>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Archiv */}
                      <a href="https://www.abgeordnetenwatch.de/archiv" className="mobile-parliament-item">
                        <img src={iconArchive} alt="" className="mobile-parliament-icon mobile-parliament-icon-small" />
                        <span>Archiv</span>
                      </a>
                    </div>
                  )}
                </div>
              ) : (
                <a key={index} href={item.href} className="mobile-menu-item">
                  {item.label}
                </a>
              )
            ))}
          </nav>
          <div className="mobile-menu-footer">
            <a href="https://www.abgeordnetenwatch.de/spenden" className="btn btn-orange">Spenden</a>
          </div>
        </div>
      )}

      {/* Parlamente Dropdown */}
      {parliamentsOpen && (
        <div className={`parliament-dropdown ${landtageOpen ? 'landtage-expanded' : ''}`}>
          <div className="parliament-dropdown-inner">
            <div className="parliament-items">
              {parliamentItems.map((item, index) => (
                item.hasSubmenu ? (
                  <button
                    key={index}
                    className="parliament-item parliament-item-button"
                    onClick={handleLandtageClick}
                  >
                    {item.icon && <img src={item.icon} alt="" className="parliament-icon" />}
                    <span className="parliament-label">{item.label}</span>
                    <svg className={`nav-chevron ${landtageOpen ? 'rotated' : ''}`} width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 2l6 4 6-4" stroke="#3D3D3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                ) : (
                  <a key={index} href={item.href} className="parliament-item">
                    {item.isElection && <span className="election-tag">Wahl</span>}
                    {item.icon && <img src={item.icon} alt="" className={`parliament-icon ${item.isSmallIcon ? 'parliament-icon-small' : ''}`} />}
                    <span className="parliament-label">{item.label}</span>
                  </a>
                )
              ))}
            </div>
          </div>

          {/* Landtage Submenu */}
          {landtageOpen && (
            <div className="landtage-submenu">
              <div className="landtage-submenu-inner">
                {landtageItems.map((column, colIndex) => (
                  <div key={colIndex} className="landtage-column">
                    {column.map((state, stateIndex) => (
                      <a key={stateIndex} href={state.href} className="landtage-link">
                        {state.label}
                        {state.isElection && <span className="election-tag election-tag-small">Wahl</span>}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </header>
  )
}

export default Header

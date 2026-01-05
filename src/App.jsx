import Header from './components/Header'
import SearchSection from './components/SearchSection'
import QASection from './components/QASection'
import SliderSection from './components/SliderSection'
import NewsletterSection from './components/NewsletterSection'
import ResearchSection from './components/ResearchSection'
import CampaignsSection from './components/CampaignsSection'
import DonationSection from './components/DonationSection'
import ValuesSection from './components/ValuesSection'
import Footer from './components/Footer'
import './styles.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <SearchSection />
        <SliderSection />
        <QASection />
        <NewsletterSection />
        <ResearchSection />
        <CampaignsSection />
        <DonationSection />
        <ValuesSection />
      </main>
      <Footer />
    </div>
  )
}

export default App

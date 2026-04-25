import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsStrip from './components/StatsStrip'
import ImpactBand from './components/ImpactBand'
import TechMarquee from './components/TechMarquee'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Dashboards from './components/Dashboards'
import Leadership from './components/Leadership'
import RoleFit from './components/RoleFit'
import Achievements from './components/Achievements'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import CommandPalette from './components/CommandPalette'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <ImpactBand />
        <TechMarquee />
        <About />
        <Experience />
        <Projects />
        <Dashboards />
        <RoleFit />
        <Leadership />
        <Achievements />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <CommandPalette />
    </>
  )
}

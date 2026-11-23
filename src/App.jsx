import Architecture from './components/Architecture'
import Features from './components/Features'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Overview from './components/Overview'
import Roles from './components/Roles'
import StrReport from './components/StrReport'
import Team from './components/Team'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Overview />
        <Features />
        <StrReport />
        <Roles />
        <Architecture />
        <Team />
      </main>
      <Footer />
    </>
  )
}

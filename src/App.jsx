import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Footer from './components/Footer'
import GitHubProjectsGrid from './components/GithubProjectsGrid'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
    <Navbar />
    <main id="home" className="pt-24">
      <Profile />
    </main>


      <section id="projects" className="min-h-screen pt-24">
        <h2 className="text-4xl">Projects</h2>
        <GitHubProjectsGrid />
      </section>

      


      <section id="experience" className="min-h-screen pt-24">
        <h2 className="text-4xl">Experience</h2>
      </section>

      <section id="contact" className="min-h-screen pt-24">
        <h2 className="text-4xl">Contact</h2>
      </section>

      <Footer />
    </>
      
      
    
  )
}

export default App

import Hero from '@/app/sections/hero'
import About from '@/app/sections/about'
import Education from '@/app/sections/education'
// import Projects from './sections/Projects'
// import Skills from './sections/Skills'
import Contact from '@/app/sections/contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      {/* <Skills />
      <Projects /> */}
      <Contact />
    </>
  )
}
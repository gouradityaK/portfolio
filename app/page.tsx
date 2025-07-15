import Hero from '@/app/sections/hero'
import About from '@/app/sections/about'
import Education from '@/app/sections/education'
import Projects from '@/app/sections/projects'
import Skills from '@/app/sections/skills'
import Contact from '@/app/sections/contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}
import React,{useState} from 'react'
import Projects from './components/Projects'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Contacts from './components/Contacts'

const App = () => {
 
  return (
    <div className='container'  >

     <Navbar name = "Home" about =" About" skills = "Skills" projects = "Projects" contacts ="Contacts"    />
     <Hero/>
     <Skills/>
      <Projects/>
      <Contacts/>
      
    </div>
  )
}

export default App
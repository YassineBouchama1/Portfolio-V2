import { useState , useContext } from 'react'

import './App.css'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Experience from './Components/Experience/Experience'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import NavBar from './Components/NavBar/NavBar'
import OtherProjects from './Components/OtherProjects/OtherProjects'
import Projects from './Components/Projects/Projects'
import { ThemeContext } from './Context/theme'
import {BrowserRouter,Route,Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
const [{themename , setthemename}] = useContext(ThemeContext)

// setthemename('hool')
  return (
    <div className="App">
    <BrowserRouter>
    <NavBar/>
<Routes>
<Route path="/" element={<>
  <main>

  <Hero/>
  <About/>
  <Experience/>
  <Projects/>
  <OtherProjects/>
  <Contact/>
  
  </main>
  <Footer/>
  {/* */}
  <div className="slide-side">
  <div class="email__StyledLinkWrapper-left">
  <a target='_blank' href="https://github.com/SiskoWeb"><i class="fa-brands fa-github-alt"></i></a>
  <a target='_blank' href="https://www.linkedin.com/in/yassinebouchama/"><i class="fa-brands fa-linkedin"></i></a>
  <a target='_blank' href="https://www.instagram.com/siskoweb"><i class="fa-brands fa-instagram"></i></a>
  </div>
  </div>
  
  
  <div className="slide-side">
  <div class="email__StyledLinkWrapper-right">
  <a target='_blank' href="mailto:brittany.chiang@gmail.com">sisko4dev@gmail.com</a>
  </div>
  </div>
  </>}/>

  <Route path="*" element={<p className='error404'>  there is no page with this link  back to yassine.info</p>} />


</Routes>
</BrowserRouter>
  




    </div>
  )
}

export default App

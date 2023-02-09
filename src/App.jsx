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
function App() {
  const [count, setCount] = useState(0)
const [{themename , setthemename}] = useContext(ThemeContext)

// setthemename('hool')
  return (
    <div className="App">
    <NavBar/>
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
<a><i class="fa-brands fa-github-alt"></i></a>
<a><i class="fa-brands fa-linkedin"></i></a>
<a><i class="fa-brands fa-instagram"></i></a>
</div>
</div>


<div className="slide-side">
<div class="email__StyledLinkWrapper-right">
<a href="mailto:brittany.chiang@gmail.com">sisko4dev@gmail.com</a>
</div>
</div>



    </div>
  )
}

export default App

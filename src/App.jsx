import { useState , useContext } from 'react'

import './App.css'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
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
<Hero/>
<About/>
<Experience/>
<Projects/>
<OtherProjects/>
    </div>
  )
}

export default App

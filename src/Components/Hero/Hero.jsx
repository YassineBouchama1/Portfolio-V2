import React from 'react'
import './Hero.scss'
export default function Hero() {
  return (
    <section className='hero'>


      <div className='text-hero1'>
        <p >Hi, my name is</p>
      </div>


      <div className='text-hero2'>
        <h2>Yassine Bouchama.</h2>
      </div>


      <div className='text-hero3'>
        <h3>I build things for the web. </h3>
      </div>



      <div className='text-hero4'>
        <p>I’m a software engineer passionate about creating exceptional digital experiences and tools that help people and automate tasks. I specialize in building (and occasionally designing) web applications with a focus on accessible, human-centered products. Currently, I’m focused on delivering impactful solutions at Upstatement.</p>
      </div>

      <div class="check-my-projects" ><a class="email-link" href="#projects" >Check out my Projects!</a></div>
    </section>
  )
}

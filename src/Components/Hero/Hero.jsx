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
    <p>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</p>
    </div>

    <div class="check-my-projects" ><a class="email-link" href="#projects" >Check out my Projects!</a></div>
    </section>
  )
}

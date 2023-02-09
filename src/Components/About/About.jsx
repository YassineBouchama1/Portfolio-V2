import React from 'react'
import './About.scss'
import me from '../../assets/me.jpeg'
import TitleSection from '../TitleSection/TitleSection'
export default function About() {
    return (
        <section>
            <div className='about'>
                <div className='text-about'>
                  <TitleSection title={'About Me'}/>

                    <div>
                        <p>Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!

                        </p>
                        <p>Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>



                        <p>Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>
                    </div>
                    <div><ul className="skills-list">
                    <li>JavaScript (ES6+)</li>
                    <li>TypeScript</li>
                    <li>React</li>
                    <li>Eleventy</li>
                    <li>Node.js</li>
                    <li>WordPress</li>
                    </ul></div>
                </div>





                <div className='img-about'>
                    <img src={me}></img>
                </div>
            </div>
        </section>
    )
}

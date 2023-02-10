import React from 'react'
import './About.scss'
import me from '../../assets/me.jpeg'
import TitleSection from '../TitleSection/TitleSection'
export default function About() {
    return (
        <section id='about'>
            <div className='about'>
                <div className='text-about'>
                  <TitleSection title={'About Me'}/>

                    <div>
                        <p>Hello, my name is Yassine and I have a passion for creating things that exist on the internet. My interest in web development began in the year 2022, when I decided to assist a friend of mine in building his website for a personal project.
                        </p>
                        <p>As a self-taught developer, I have a strong passion for React and web development. With a focus on continual learning and improvement, I have dedicated numerous hours to expanding my knowledge and honing my skills in this field.  I have already created several projects and have demonstrated a keen ability to tackle complex problems and turn them into functional and visually appealing solutions.
                        </p>



                        <p>My determination and drive to succeed as a developer has been evident in my self-motivated approach to learning and my commitment to continuously building and expanding my portfolio. This, coupled with my ability to learn quickly and effectively, has allowed me to make rapid progress in my development journey.</p>
                        <p>I am confident that my passion for React and my ability to learn and adapt quickly will allow me to make a valuable contribution to any development team. I am eager to bring my skills and enthusiasm to a new opportunity and continue to grow and develop as a React developer.</p>
                    </div>
                    <div><ul className="skills-list">
                    <li>JavaScript (ES6+)</li>
                    <li>Reactjs</li>
                    <li>Firebase</li>
                    <li>Sass</li>
                    <li>Bootstrap</li>
                    <li>Redux</li>
                    <li>Design to WordPress</li>
                    </ul></div>
                </div>





                <div className='img-about'>
                    <img src={me}></img>


                </div>
            </div>
        </section>
    )
}

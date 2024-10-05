import React from 'react'
import './About.scss'
// import me from '../../assets/me.jpeg'
import me from '../../assets/me2.png'
import TitleSection from '../TitleSection/TitleSection'
export default function About() {
    return (
        <section id='about'>
            <div className='about'>
                <div className='text-about'>
                    <TitleSection title={'About Me'} />

                    <div>
                        <p>Hello! I'm Yassine Bouchama, a passionate Full-Stack Developer with a strong foundation in both front-end and back-end technologies.
                        </p>
                        <p> Currently, I am honing my skills at YouCode and UM6P, where I specialize in modern frameworks such as React.js, Next.js, and React Native, alongside back-end technologies like Express.js, Laravel, and NestJS.
                        </p>



                        {/* <p>My determination and drive to succeed as a developer has been evident in my self-motivated approach to learning and my commitment to continuously building and expanding my portfolio. This, coupled with my ability to learn quickly and effectively, has allowed me to make rapid progress in my development journey.</p>
                        <p>I am confident that my passion for React and my ability to learn and adapt quickly will allow me to make a valuable contribution to any development team. I am eager to bring my skills and enthusiasm to a new opportunity and continue to grow and develop as a React developer.</p> */}
                    </div>
                    <div><ul className="skills-list">
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>PHP</li>
                        <li>Reactjs</li>
                        <li>Next.js</li>
                        <li>React Native</li>
                        <li>Nest.js</li>
                        <li>Express.js</li>
                        <li>Firebase</li>
                        <li>Sass</li>
                        <li>Tailwind css</li>
                        <li>Redux</li>
                        <li>React Query</li>
                        <li>Design to WordPress</li>
                    </ul></div>
                </div>





                <div

                    className='img-about'>
                    <img src={me}></img>


                </div>
            </div>
        </section>
    )
}

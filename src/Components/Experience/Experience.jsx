import React, { useState } from 'react'
import TitleSection from '../TitleSection/TitleSection'
import './Experience.scss'
export default function Experience() {

  const [toggleExperience, setToggleExperience] = useState(1)

  const ActiveExperience = (id) => {
    setToggleExperience(id)

    // Clear all active states first
    for (let i = 1; i <= 5; i++) {
      document.getElementById(`${i}btn`)?.classList.remove("active");
      document.getElementById(i)?.classList.remove("visible");
    }
    
    // Set active state for selected item
    document.getElementById(`${id}btn`)?.classList.add("active");
    document.getElementById(id)?.classList.add("visible");
  }
  const closeSorry = () => {
    document.getElementById('sorry').classList.toggle("sorryHide");
    document.getElementById('list-experience').classList.toggle("list-no-blury");
  }

  <div id='sorry' className='sorry'>
    <i onClick={closeSorry} class="fa-regular fa-circle-xmark"></i>
    <p>I am an enthusiastic learner of programming and have been teaching myself through various online resources and projects. I am currently working on improving my skills and expanding my knowledge in FrontEnd. Although I do not have any professional experience, I am confident in my ability to pick up new technologies quickly and eager to apply my skills in a real-world setting.</p>

    <div class="check-my-projects sorry-btn" ><a class="email-link" href="#projects" >Check out my Projects!</a></div>
  </div>

  return (
    <section id='Experience'>

      <div className='experience'>

        <TitleSection className='title-experience' title={'Where I’ve Worked'} />


        <div className='list-experience' id='list-experience'>



          <div className='list-btn'>
            <button id='1btn' className='active' onClick={() => ActiveExperience(1)}><span>SMVALLEY</span></button>
            <button id='2btn' onClick={() => ActiveExperience(2)}><span>PROMETI</span></button>
            <button id='3btn' onClick={() => ActiveExperience(3)}><span>ENJAY SOFTWARE</span></button>
            <button id='4btn' onClick={() => ActiveExperience(4)}><span>Freelance</span></button>
            <button id='5btn' onClick={() => ActiveExperience(5)}><span>YouCode Student</span></button>
          </div>

          <div className='contanet-experience'>
            <div className='visible contenct-item' id='1'>
              <h3 className='compamy'>Full-Stack Developer <span className='compamy'>@ SMVALLEY</span></h3>
              <p className="range">Jan 2025 - Present</p>
              <div><ul>
                <li>Develop and maintain mobile applications using React Native for iOS and Android platforms</li>
                <li>Build responsive web applications with React.js, Next.js, and modern JavaScript frameworks</li>
                <li>Collaborate with cross-functional teams to design and implement new features</li>
                <li>Troubleshoot and resolve technical issues, improving application performance and user experience</li>
                <li>Participate in code reviews and maintain high code quality standards</li>
                <li>Work with backend APIs and databases to ensure seamless data integration</li>
              </ul></div>
            </div>

            <div className='contenct-item' id='2'>
              <h3 className='compamy'>Full-Stack Developer Intern <span className='compamy'>@ PROMETI</span></h3>
              <p className="range">May 2024</p>
              <div><ul>
                <li>Developed a comprehensive payment management system using Next.js and NestJS</li>
                <li>Implemented secure payment processing and transaction handling features</li>
                <li>Created a modern, responsive portfolio website for the company using Laravel and Vue.js</li>
                <li>Designed and implemented RESTful APIs for seamless frontend-backend communication</li>
                <li>Collaborated with senior developers to learn best practices and coding standards</li>
                <li>Participated in daily standups and sprint planning meetings</li>
              </ul></div>
            </div>

            <div className='contenct-item' id='3'>
              <h3 className='compamy'>Freelance Developer <span className='compamy'>@ ENJAY SOFTWARE LLC</span></h3>
              <p className="range">2022 - May 2024</p>
              <div><ul>
                <li>Developed native Android applications using Java and Kotlin for various client requirements</li>
                <li>Built custom portfolio websites and business websites using modern web technologies</li>
                <li>Created automation tools and scripts to streamline business processes</li>
                <li>Worked directly with clients to gather requirements and deliver tailored solutions</li>
                <li>Managed project timelines and deliverables while maintaining high quality standards</li>
                <li>Provided ongoing maintenance and support for deployed applications</li>
              </ul></div>
            </div>

            <div className='contenct-item' id='4'>
              <h3 className='compamy'>Full Stack Developer</h3>
              <p className="range">Oct 2022- Present</p>
              <div><ul>
                <li>Freelancing for local businesses, utilizing React JS and WordPress as primary tools, with Firebase as the backend solution for robust, scalable, and secure websites.</li>
                <li>Specializing in SEO best practices to enhance search engine visibility and ranking.</li>
                <li>Writing modern, performant, and maintainable code for a diverse array of client and internal projects.</li>
                <li>Implementing responsive design principles to ensure optimal user experience across all devices</li>
                <li>Integrating third-party APIs and services to extend website functionality</li>
                <li>Providing technical consultation and digital strategy advice to small business owners</li>
              </ul></div>
            </div>

            <div className='contenct-item' id='5'>
              <h3 className='compamy'>Web & Mobile Developer Student <span className='compamy'>@ YouCode</span></h3>
              <p className="range">Sept 2023- Present</p>
              <div><ul>
                <li>Intensive training program at YouCode.ma in partnership with UM6P university</li>
                <li>Learning advanced full-stack development methodologies and best practices</li>
                <li>Working on collaborative projects to simulate real-world development environments</li>
                <li>Mastering modern frameworks including React, Next.js, NestJS, and Laravel</li>
                <li>Participating in code reviews and pair programming sessions</li>
                <li>Developing soft skills including project management and team collaboration</li>
              </ul></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

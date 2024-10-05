import React, { useState } from 'react'
import TitleSection from '../TitleSection/TitleSection'
import './Experience.scss'
export default function Experience() {

  const [toggleExperience, setToggleExperience] = useState(1)

  const ActiveExperience = (id) => {
    setToggleExperience(id)

    document.getElementById('1btn').classList.toggle("active", id === 1);
    document.getElementById(1).classList.toggle("visible", id === 1);

    document.getElementById('2btn').classList.toggle("active", id === 2);
    document.getElementById(2).classList.toggle("visible", id === 2);







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
            <button id='1btn' className='active' onClick={() => ActiveExperience(1)}><span>Freelance</span></button>
            <button id='2btn' onClick={() => ActiveExperience(2)}><span>Full-stack developers</span></button>


          </div>


          <div className='contanet-experience'>


            <div className='visible contenct-item' id='1'>
              <h3 className='compamy'>Full Stack Developer Internship</h3>
              <p class="range">May 2024 - Jul 2024</p>
              <div><ul>

              <li>Built a payment system using Next.js and NestJS.</li>
              <li>Created a company website with Laravel and Vue.js.</li>
              </ul></div>
            </div>
            <div className=' contenct-item' id='2'>
              <h3 className='compamy'>Full Stack Developer</h3>
              <p class="range">Oct 2022- Present</p>
              <div><ul>

              <li>Freelancing for local businesses, utilizing React JS and WordPress as primary tools, with Firebase as the backend solution for robust, scalable, and secure websites.</li>
        <li>Specializing in SEO best practices to enhance search engine visibility and ranking.</li>
        <li>Writing modern, performant, and maintainable code for a diverse array of client and internal projects.</li>
              </ul></div>
            </div>

            <div className='contenct-item' id='3'>
              <h3 className='compamy'>Web & Mobile developers Student</h3>
              <p class="range">Sept 2023- Present</p>
              <div><ul>

                <li>Student on  youcode.ma "Um6p"</li>
                <li>we are study how to become a good devloper </li>
                <li>how to deal with big projects</li>
              </ul></div>
            </div>








          </div>
        </div>
      </div>
    </section>
  )
}

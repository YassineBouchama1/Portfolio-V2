import React ,{useState }from 'react'
import TitleSection from '../TitleSection/TitleSection'
import './Experience.scss'
export default function Experience() {

    const [toggleExperience,setToggleExperience]= useState(1)

    const ActiveExperience = (id)=>{
        setToggleExperience(id)

    document.getElementById('1btn').classList.toggle("active" , id === 1);
    document.getElementById(1).classList.toggle("visible" , id === 1);
    
    document.getElementById('2btn').classList.toggle("active" , id === 2);
    document.getElementById(2).classList.toggle("visible" , id === 2);

    document.getElementById('3btn').classList.toggle("active" , id === 3);
    document.getElementById(3).classList.toggle("visible" , id === 3);



    document.getElementById('4btn').classList.toggle("active" , id === 4);
    document.getElementById(4).classList.toggle("visible" , id === 4);
    document.getElementById('5btn').classList.toggle("active" , id === 5);
    document.getElementById(5).classList.toggle("visible" , id === 5);

    }
  return (
    <section>
    
    <div className='experience'>
    <TitleSection title={'Where I’ve Worked'}/>



    <div className='list-experience'>



    <div className='list-btn'>
  <button id='1btn' className='active' onClick={()=>ActiveExperience(1)}><span>Upstatement</span></button>
  <button id='2btn' onClick={()=>ActiveExperience(2)}><span>Scout</span></button>
  <button id='3btn' onClick={()=>ActiveExperience(3)}><span>Apple</span></button>
  <button id='4btn' onClick={()=>ActiveExperience(4)}><span>Starry</span></button>
  <button id='5btn' onClick={()=>ActiveExperience(5)}><span>MullenLowe</span></button>
    </div>


    <div className='contanet-experience'>


<div className='visible contenct-item' id='1'>
<h3>Sgit oftware Engineer<a href='' className='compamy'>@ Apple</a></h3>
<p class="range">May 2023- Present</p>
<div><ul>
<li>Write modern, performant, maintainable code for a diverse array of client and internal projects</li>
<li>Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify</li>
<li>Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</li>
</ul></div>
</div>


<div className='contenct-item'  id='2'>
<h3>Mearn Stack <a href='' className='compamy'>@ Google</a></h3>
<p class="range">May 2018 - Present</p>
<div><ul>
<li>Write modern, performant, maintainable code for a diverse array of client and internal projects</li>
<li>Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify</li>
<li>Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</li>
</ul></div>
</div>


<div className=' contenct-item' id='3'>
<h3>Engineer <a href='' className='compamy'>@ Upstatement</a></h3>
<p class="range">May 2015 - Present</p>
<div><ul>
<li>Write modern, performant, maintainable code for a diverse array of client and internal projects</li>
<li>Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify</li>
<li>Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</li>
</ul></div>
</div>

<div className=' contenct-item' id='4'>
<h3>ReactJs <a href='' className='compamy'>@ Amazon</a></h3>
<p class="range">May 2014 - Present</p>
<div><ul>
<li>Write modern, performant, maintainable code for a diverse array of client and internal projects</li>
<li>Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify</li>
<li>Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</li>
</ul></div>

</div>


<div className=' contenct-item' id='5'>
<h3>JavaScript <a href='' className='compamy'>@ Spotify</a></h3>
<p class="range">May 2012 - Present</p>
<div><ul>
<li>Write modern, performant, maintainable code for a diverse array of client and internal projects</li>
<li>Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify</li>
<li>Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</li>
</ul></div>
</div>

</div>
    </div>
    </div>
    </section>
  )
}

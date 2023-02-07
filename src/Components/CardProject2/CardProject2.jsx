import React from 'react'
import './CardProject2.scss'
// import p from '../../assets/p1.png'
export default function CardProject2({imgDirection,pimg,title}) {


   //props is class for if you want img in right or left 
    return (
        <div className={`card-project ${imgDirection}`}>
      

            <div className='text-card'>
                <p className='project-overline'>Featured Project</p>
                <h2 className='project-title'>{title}</h2>
                <div className='sub-card-profject'>
                    <p>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                    </div>
                    <div className='list-tools-used'>

                        <ul>
                            <li>Vs Code</li>
                            <li>react</li>
                            <li>redux</li>
                            <li>axios</li>
                            <li>firebase</li>
                        </ul>
                        <div className='project-links'>
                      <a><i class="fa-brands fa-github-alt"></i></a>
                       <a><i class="fa-solid fa-up-right-from-square"></i></a>
                     
                      
                    </div>
                    </div>
                </div>
          
       
                <div className='card-img'><a><div className='img-filter'><img src={pimg}></img></div></a></div>

        
        </div>
    )
}

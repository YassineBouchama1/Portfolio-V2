import React from 'react'
import './CardProject2.scss'
// import p from '../../assets/p1.png'
export default function CardProject2({data}) {


   //props is class for if you want img in right or left 
    return (
        <div className={`card-project ${data.directionCard}`}>
      
      
            <div className='text-card'>
  
                <p className='project-overline'>Featured Project</p>
                <h2 className='project-title'>{data.title}</h2>
                <div className='sub-card-profject'>
                    <p>{data.description}</p>
                    </div>

                    <div className='list-tools-used'>

                        <ul>
                        {data?.tools?.map((i)=>  <li>{i}</li>)}
                     
                        </ul>
                        <div className='project-links'>
                      <a target='_blank' href={data.repos}><i class="fa-brands fa-github-alt"></i></a>
                       <a target='_blank' href={data.demo}><i class="fa-solid fa-up-right-from-square"></i></a>

                      
                    </div>
                    </div>
                  
                </div>
              
                <div className='card-img-mobile'><img src={data.image}></img></div>
                <div className='card-img'><a><img src={data.image}></img></a></div>

        
        </div>
    )
}

import React from 'react'
import './OtherProjects.scss'
import dataAnotherPorjects  from '../../data/anotherPorjects';
export default function OtherProjects() {
    return (
        <section>
            <div className='other-projects'>
                <div>
                    <h2 className='title-other-project'>Other Noteworthy Projects</h2>
                </div>
<div className='list-other-projects'>
{dataAnotherPorjects?.map((i)=><MiniCard  data={i}/>)}
    

</div>
            </div>

        </section>
    )
}



function MiniCard({data}) {
    return (
        <div className='mini-card-other-project'>
            <div className='other-projet-top'>
                <div class="folder"><i class="fa-regular fa-folder"></i></div>
                <div class="other-project-link"><a target='_blank' href={data.repos}><i class="fa-brands fa-github-alt">
                </i></a> <a target='_blank' href={data.demo}><i class="fa-solid fa-arrow-up-right-from-square"></i></a></div>

            </div>
            <div className='other-projet-bottom'>
            <h2>{data.title}</h2>
           
   <p>{data.description}</p>
   <ul>
   {data?.tools?.map((i)=>   <li>{i}</li>)}

   </ul>
           
            </div>
        </div>
    )
}
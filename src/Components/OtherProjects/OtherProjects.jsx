import React from 'react'
import './OtherProjects.scss'

export default function OtherProjects() {
    return (
        <section>
            <div className='other-projects'>
                <div>
                    <h2 className='title-other-project'>Other Noteworthy Projects</h2>
                </div>
<div className='list-other-projects'>
<MiniCard text={'nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size.'}/>
<MiniCard text={'nides data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size.'}/>
<MiniCard text={'nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size.'}/>
<MiniCard text={'nides data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size.'}/>


</div>
            </div>

        </section>
    )
}



function MiniCard({text}) {
    return (
        <div className='mini-card-other-project'>
            <div className='other-projet-top'>
                <div class="folder"><i class="fa-regular fa-folder"></i></div>
                <div class="other-project-link"><i class="fa-brands fa-github-alt"></i><i class="fa-solid fa-arrow-up-right-from-square"></i></div>

            </div>
            <div className='other-projet-bottom'>
            <h2>Integrating Algolia Search with Woite </h2>
           
   <p>{text}</p>
   <ul>
   <li>Algoli</li>
   <li>WordPress</li>
   <li>PHP</li>
   </ul>
           
            </div>
        </div>
    )
}
import React from 'react'
import data  from '../../data/MainProjects';

import CardProject2 from '../CardProject2/CardProject2'
import TitleSection from '../TitleSection/TitleSection'
import './Projects.scss'
import p1 from '../../assets/p1.png'
import p2 from '../../assets/p2.png'
import { useState } from 'react';
import { useEffect } from 'react';
// import CardProject from '../CardProject/CardProject'
export default function Projects() {
const [direaction,setDireaction]=useState(false)

useEffect(() => {
  setDireaction(!direaction)
}, [data]);

  return (
    <section id='projects'>
    <div className='projects'>
    <TitleSection title={'Some Things I’ve Built'}/>
    
    <div className='list-Projects'>
    {data?.map((i)=>   
      {
  
        return(
  
<CardProject2 key={i.id} data={i} />

       
        )
      
      })}

    </div>
    </div>
    
    </section>
  )
}

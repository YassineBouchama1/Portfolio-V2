import React from 'react'

import CardProject2 from '../CardProject2/CardProject2'
import TitleSection from '../TitleSection/TitleSection'
import './Projects.scss'
import p1 from '../../assets/p1.png'
import p2 from '../../assets/p2.png'
// import CardProject from '../CardProject/CardProject'
export default function Projects() {
  return (
    <section id='projects'>
    <div className='projects'>
    <TitleSection title={'Some Things I’ve Built'}/>
    
    <div className='list-Projects'>

    <CardProject2 imgDirection={'right'} pimg={p1} title={'Social Media'}/>
    <CardProject2 imgDirection={'left'}  pimg={p2} title={'Pyxel'}/>
    <CardProject2 imgDirection={'right'} pimg={p1} title={'Social Media'}/>
    <CardProject2 imgDirection={'left'}  pimg={p2} title={'Pyxel'}/>
    </div>
    </div>
    
    </section>
  )
}

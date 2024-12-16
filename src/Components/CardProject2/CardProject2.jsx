import React from 'react'
import './CardProject2.scss'
// import p from '../../assets/p1.png'
import {
    motion,
    useMotionValue,
    useTransform,
} from "framer-motion"
import { useRef } from 'react';
export default function CardProject2({ data }) {


    //props is class for if you want img in right or left 
    return (
      <motion.div
        className={`card-project ${data.directionCard}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 0.2, ease: "linear" }}
      >
        <div className="text-card">
          <p className="project-overline">Featured Project</p>
          <h2 className="project-title">{data.title}</h2>
          <div className="sub-card-profject">
            <p>{data.description}</p>
          </div>

          <div className="list-tools-used">
            <ul>
              {data?.tools?.map((i) => (
                <li>{i}</li>
              ))}
            </ul>
            <div className="project-links">
              <a target="_blank" href={data.repos}>
                <i class="fa-brands fa-github-alt"></i>
              </a>
              <a target="_blank" href={data.demo}>
                <i class="fa-solid fa-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2, ease: "linear" }}
          className="card-img-mobile"
        >
          <img
            src={`https://raw.githubusercontent.com/SiskoWeb/Portfolio-V2/main/src${data.image}`}
            alt={data.title}
          ></img>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2, ease: "linear" }}
          className="card-img"
        >
          <a>
            <img
              src={`https://raw.githubusercontent.com/SiskoWeb/Portfolio-V2/main/src${data.image}`}
              alt={data.title}
            ></img>
          </a>
        </motion.div>
      </motion.div>
    );
}

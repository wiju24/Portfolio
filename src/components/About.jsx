import React from 'react'
import Tilt from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn ("right", "spring", 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div
         options= {{
          max: 45,
          scale: 1,
          speed: 450
         }}
         className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"         
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>

      </motion.div>
      
    </Tilt>
  )
}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)}
         className="mt=4 text-secondary text-[17px] max-w-3xl leading-[30px]" 
      >
        A graduate from the University of Toronto School of Continuing Studies Full Stack Bootcamp, Chemical Laboratory Technology program from Seneca College as well as the Biotechnology program from Centennial College. I am a Full Stack Developer, with expertise in problem-solving and developing applications using multiple languages. I have also attained knowledge, deigned, developed, enhanced, modified and maintained MERN stack projects according to the client's specific requirements. I able to perform chemical analysis, biotechnological, and microbial experiments by utilizing diverse databases and technologies. I possess the ability to create research papers, documentations, and presentations tailored to the targeted audience.

        My goal is to use my attention to detail and technical skills to create effective applications by designing, creating and maintaining highly scalable and reliable software.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key= {service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper (About, "about")
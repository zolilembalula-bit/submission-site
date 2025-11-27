import React from 'react';
import { motion } from 'framer-motion';

export default function Home(){
  return (
    <section className='hero'>
      <div className='container'>
        <motion.h1 
  initial={{ opacity: 0, y: -10 }} 
  animate={{ opacity: 1, y: 0 }}
>
  Albert Zolile Mbalula
</motion.h1>

        <p className='lead'>Educator · Physics Teacher · Curriculum Developer</p>
        <div className='home-grid'>
          <div className='card'>
            <h3>About Me</h3>
            <p>Experienced Physical Sciences teacher focusing on practicals, assessments, and student success.</p>
          </div>
          <div className='card'>
            <h3>Latest Project</h3>
            <p>Submission portal for managing class submissions and marking workflows.</p>
          </div>
          <div className='card'>
            <h3>Contact</h3>
            <p>Use the contact page to reach out for resources or collaboration.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import { ResumeCard } from './ResumeCard'
import './resume.css';

export const Education = () => {
  return (
    
    <div className='eduHeading'>
            Education Quality
        
        <div className='card'>
          
            <ResumeCard
                title="Computer Science in Information Technology"
                subTitle="Sacred Heart University (2022- 2023)"
                result="3.78/4"
                des="Acquired advanced full-stack skills in Java and React, specializing in dynamic web applications. Experienced in deploying scalable solutions on AWS, integrating RESTful APIs, and managing databases (MySQL, MongoDB). Implemented security best practices to protect user data and collaborated with teams to deliver high-quality, user-focused software solutions."
            />
            <ResumeCard
                title="Electronics and Communication Engineering"
                subTitle="Guru Nanak Institute of Technology (2016- 2020)"
                result="7.4/10"
                des="Developed a strong foundation in Java, C++, and Python with practical experience in agile web development. Worked closely with diverse teams to solve complex problems and deliver impactful solutions. Acquired hands-on knowledge in database management and applied it to real-world scenarios, while staying updated on industry trends to adapt to new technologies and enhance project contributions."
            />
        </div>
        
    </div>
  )
}

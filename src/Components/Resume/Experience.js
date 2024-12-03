import React from 'react'
import { ExpeCard } from './ExpeCard'
import './resume.css';

export const Experience = () => {
  return (
    <div className='eduHeading'>
            Professional Experience
        
        <div className='card'>
          
            <ExpeCard
                title="Java Full Stack Developer"
                subTitle="Elite Exceed"
                date="(Jan 2024-Present)"
                address = "Irving,TX"
                des="Currently serving as a Java Full Stack Developer, focusing on building scalable web applications using Java and Spring Boot for backend development and React for the frontend. Engaged in the complete software development lifecycle, from requirements gathering to deployment. Collaborate closely with cross-functional teams to implement microservices architecture on AWS, ensuring high availability and performance. Utilize RESTful APIs for seamless integration with databases, while actively participating in code reviews to uphold coding standards and best practices for robust and efficient applications."
            />
            <ExpeCard
                title="Java Developer"
                subTitle="Congruex Asia Pacific LLC"
                date=" (Jun 2021-July 2022)"
                address="Punjab,India"
                des="Worked as a Java Developer, contributing to the design and development of robust applications using Java, Spring, and Hibernate frameworks. Gained hands-on experience in database management with MySQL and implemented RESTful services for efficient data handling. Involved in debugging and performance tuning of applications, resulting in improved response times and user satisfaction."
            />
        </div>
    </div>
  )
}

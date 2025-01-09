import React from 'react'
import './skills.css'
import UIDesign from '../../Assets/frontenedicon.png'
import AppDesign from '../../Assets/backendicon.png';
import DBDesign from '../../Assets/databaseicon.png';

export const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle1'>What I do</span>
        <span className='skillDesc'>I am a Full Stack Developer with 3+ years of experience delivering scalable applications in Banking and Healthcare. Proficient in Java, Spring Boot, React, Angular, and Node.js, with expertise in RESTful APIs, cloud deployments (AWS, GCP, Azure), and microservices using Docker and Kubernetes. Skilled in database management, CI/CD pipelines, and Agile development.</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt='UIDesign' className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h2>Front-end Development</h2>
                    <p>I create intuitive, responsive, and dynamic user interfaces. With expertise in HTML, CSS, and JavaScript, I ensure that web applications are visually appealing and user-friendly. I also have experience working with modern frameworks like React to build component-based, scalable front-end solutions.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={AppDesign} alt='AppDesign' className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h2>Back-end Developmnet</h2>
                    <p>I specialize in developing robust and efficient back-end systems using Java and Spring Boot. My focus is on building scalable, secure, and maintainable APIs that ensure smooth communication between the front-end and back-end. I follow best practices for RESTful API design and continuously optimize application performance.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={DBDesign} alt='DBDesign' className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h2>Database Management</h2>
                    <p>With a solid understanding of both relational and NoSQL databases, I efficiently manage and structure data. I work with databases like MySQL, PostgreSQL, and MongoDB, designing effective schemas, writing complex queries, and ensuring data integrity and security in all my applications.</p>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Skills;

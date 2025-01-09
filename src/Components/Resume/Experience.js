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
                subTitle="Citi Group"
                date="(Feb 2024-Present)"
                address = "USA"
                des="Currently working on developing a scalable Banking Transaction Management System using Java, Spring Boot, and React to enable real-time financial transaction tracking and reporting. Designing and optimizing RESTful APIs to improve system responsiveness and performance. Implementing a microservices architecture with Docker and Kubernetes on AWS for enhanced scalability and high availability. Automating ETL processes using AWS Lambda to streamline data ingestion. Building CI/CD pipelines with Jenkins to ensure faster and reliable deployments while conducting performance optimization using Grafana and JMeter to handle high transaction volumes effectively."
            />
            <ExpeCard
                title="Full Stack Developer"
                subTitle="Philips Healthcare"
                date=" (Aug 2020-July 2022)"
                address="India"
                des="Worked on developing a Patient Monitoring and Management System (PMMS) using Java, Spring Boot, Hibernate, and React.js to enable real-time patient monitoring and hospital resource management. Designed RESTful APIs, integrated MongoDB for handling large healthcare datasets, and implemented role-based access control for secure data access."
            />
        </div>
    </div>
  )
}

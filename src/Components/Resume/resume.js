import React, { useState } from 'react';
import './resume.css';
import { Education } from './Education';
import { Experience } from './Experience';
import { SkillList } from './SkillList';

const Resume = () => {
    const [educationData, setEducationData] = useState(true);
    const [skillData, setSkillData] = useState(false);
    const [experienceData, setExperienceData] = useState(false);

     // Function to dynamically assign classes
     const getClassName = (isActive) => {
        return isActive ? 'resumeLi active' : 'resumeLi';
    };
  return (
    <section id='resume'>
        <div className='title1'>My Resume</div>
        <div>
            <ul className='listHeading'>
                <li onClick = {() => {
                    setEducationData(true);
                    setSkillData(false);
                    setExperienceData(false)}}
                className={getClassName(educationData)}
                >
                    Education
                </li>
                <li onClick = {() => {
                    setEducationData(false);
                    setSkillData(true);
                    setExperienceData(false)}}
                className={getClassName(skillData)}
                >
                    Professional Skills
                </li>
                
                <li onClick = {() => {
                    setEducationData(false);
                    setSkillData(false);
                    setExperienceData(true)}}
                className={getClassName(experienceData)}
                >
                    Experience
                    </li>
               
            </ul>
        </div>
        {
            educationData && <Education />
        }
        {
            skillData && <SkillList/>
        }
        {
            experienceData && <Experience/>
        }
        {/* {<Education/>} */}
        {/* { <ProfSkills/>} */}
        {/* {<Experience/>} */}
    </section>
  )
}

export default Resume;

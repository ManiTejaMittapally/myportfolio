import React from 'react'
import { ProfSkills } from './ProfSkills';

export const SkillList = () => {

    const skills = [
        { skill: 'React', percentage: 80 },
        { skill: 'JavaScript', percentage: 85 },
        { skill: 'CSS', percentage: 85 },
        { skill: 'java', percentage: 80 },
        { skill: 'SQL', percentage: 80 },
        { skill: 'AWS', percentage: 75 }
      ];

  return (
    <div>
      <h2 style={{
        marginLeft:'10rem',
        paddingTop:'0.5rem',
        fontSize:'2rem'
      }}>My Skills</h2>
      <div style={{
        marginLeft:'-3rem'
      }}>
        {skills.map((skill, index) => (
          <ProfSkills key={index} skill={skill.skill} percentage={skill.percentage} />
        ))}
      </div>
    </div>
  )
}

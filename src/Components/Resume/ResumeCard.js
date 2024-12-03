import React from 'react';
import './resume.css';

export const ResumeCard = ({ title, subTitle, result, des }) => {
  return (
    <div className="resumeCard">
        <div className='line'>
            <div className='round'></div>
            <div className='insideCircle'></div>
            
        </div>
        <div>
            <h3 className='header'>{title}</h3>
            <p className='subt'>{subTitle}</p>
            <p className='result'>{result}</p>
            <p className='des'>{des}</p>
        </div>
    </div>
  )
}

import React from 'react'
import './resume.css';

export const ExpeCard = ({ title, subTitle,address, des,date }) => {
  return (
    <div className="resumeCard">
        <div className='line'>
            <span className='round'>
                <span className='insideCircle'></span>
            </span>
        </div>
        <div>
            <h3 className='header'>{title}</h3>
            <p className='subt'>{subTitle}</p>
            <p className='date'>{date}</p>
            <p className='address'>{address}</p>
            <p className='des'>{des}</p>
        </div>
    </div>
  )
}

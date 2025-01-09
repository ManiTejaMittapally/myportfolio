import React from 'react'
import './intro.css'
import bg from '../../Assets/myImage1.png'
import btnImg from '../../Assets/hireme.png'
import { Link } from 'react-scroll'

export const Intro = () => {
  return (
    <section id = "intro">
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'> I'm <span className='introName'>Mani Teja</span><br/>Full Stack Developer</span>
            <p className='introPara'> I am a skilled software developer with over 3 years <br/>of experience in full-stack development</p>
            <Link><button className='btn'><img src={btnImg} alt='Hire Me' className='btnImg'></img>Hire Me</button></Link>
        </div>
        <img src={bg} alt='Profile' className='bg'></img>

    </section>
  )
}
export default Intro;
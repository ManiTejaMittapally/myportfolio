import React, { useState } from 'react'
import  './navbar.css'
import logo from '../../Assets/user-info.png';
import contactImg from '../../Assets/contact.png'
import {Link } from 'react-scroll';
import menu from '../../Assets/menu.png';

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
      <img src={logo} alt='logo' className='logo' />
      <div className='desktopMenu'>
        <Link activeClass='active' to ='intro' spy = {true} smooth={true} offset={-100} duration= {500} className='desktopMenuListItem'>Home</Link>
        <Link activeClass='active' to ='skills' spy = {true} smooth={true} offset={-50} duration= {500}className='desktopMenuListItem'>About</Link>
        <Link activeClass='active' to ='resume' spy = {true} smooth={true} offset={-100} duration= {500}className='desktopMenuListItem'>My Resume</Link>
      </div>
      <button className='desktopMenuBtn' onClick={()=>{
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
      }}>
        <img src={contactImg} alt='' className='desktopMenuImg'/>
        Contact Me
      </button>
      <img src={menu} alt='Menu' className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
      <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
        <Link activeClass='active' to ='intro' spy = {true} smooth={true} offset={-100} duration= {500} className='listItem' onClick={()=>setShowMenu(false)} >Home</Link>
        <Link activeClass='active' to ='skills' spy = {true} smooth={true} offset={-50} duration= {500}className='listItem' onClick={()=>setShowMenu(false)}>About</Link>
        <Link activeClass='active' to ='resume' spy = {true} smooth={true} offset={-100} duration= {500}className='listItem' onClick={()=>setShowMenu(false)}>My Resume</Link>
        <Link activeClass='active' to ='contact' spy = {true} smooth={true} offset={-100} duration= {500}className='listItem' onClick={()=>setShowMenu(false)}>Contact</Link>
      </div>
    </nav>
  )
}

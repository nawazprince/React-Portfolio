import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <section id='header'>
      <div className="container header_container">
        <h5>Hello, I'm</h5>
        <h1>SYED NAWAZ PRINCE</h1>
        <h5 className="text-light">.NET Developer</h5>
        <CTA/>
        <HeaderSocial/>
        
        <div className="me">
          <img src={ME} alt="Me" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll down</a>
      </div>
    </section>
  )
}

export default Header
import React from 'react'
import './footer.css'

const Footer = () =>
{
  return (
    <footer>
      <div className="container footer_container">
        <ul className='page_links'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experince</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
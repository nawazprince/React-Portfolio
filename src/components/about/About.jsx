import React from 'react'
import './about.css'
import ME from '../../assets/me.png'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img src={ME} alt="Me" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>30+</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti accusantium facilis ducimus nemo magnam praesentium eum tenetur aliquam qui asperiores aut enim nobis corrupti, dolor est obcaecati perspiciatis doloremque illum!</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
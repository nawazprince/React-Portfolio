import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h2>My Skills</h2>

      <div className="container experience_container">
        <div className="experience_content">
          <article className="experience_details">
            <BsPatchCheckFill className='skill-icon'/>
            <h4>MS SQL</h4>
          </article>
          <article className="experience_details">
            <BsPatchCheckFill className='skill-icon'/>
            <h4>ADO.NET</h4>
          </article>
          <article className="experience_details">
            <BsPatchCheckFill className='skill-icon'/>
            <h4>ASP.NET Web Form</h4>
          </article>
          <article className="experience_details">
            <BsPatchCheckFill className='skill-icon'/>
            <h4>ASP.NET MVC</h4>
          </article>
          <article className="experience_details">
            <BsPatchCheckFill className='skill-icon'/>
            <h4>Web API</h4>
          </article>
          <article className="experience_details">
            <BsPatchCheckFill className='skill-icon'/>
            <h4>ASP.NET Core</h4>
          </article>
          <article className="experience_details">
            <BsPatchCheckFill className='skill-icon'/>
            <h4>Entity Framework</h4>
          </article>
          <article className="experience_details">
            <BsPatchCheckFill className='skill-icon'/>
            <h4>Dapper ORM</h4>
          </article>
          <article className="experience_details">
            <BsPatchCheckFill className='skill-icon'/>
            <h4>JavaScript</h4>
          </article>
          <article className="experience_details">
            <BsPatchCheckFill className='skill-icon'/>
            <h4>Angular JS</h4>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Experience
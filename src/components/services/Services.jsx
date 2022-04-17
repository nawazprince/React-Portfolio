import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () =>
{
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className='service'>
          <div className="service_head">
            <h3>Web Application Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='serice_list_icon' />
              <p>Database design with MS SQL</p>
            </li>
            <li>
              <BiCheck className='serice_list_icon' />
              <p>Develop Web application with ASP.NET Web Form</p>
            </li>
            <li>
              <BiCheck className='serice_list_icon' />
              <p>Develop Web application with ASP.NET MVC</p>
            </li>
            <li>
              <BiCheck className='serice_list_icon' />
              <p>Build Web API</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
import React from 'react'
import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () =>
{
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container contact_container">
        {/* Contact Options starts */}
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMail className='contact_icon' />
            <h4>E-mail</h4>
            <h5>nawazprince2510@gmail.com</h5>
            <a href="mailto:nawazprince2510@gmail.com">Send a message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_icon' />
            <h4>WhatsApp</h4>
            <h5>+8801521-222253</h5>
            <a href="https://api.whatsapp.com/send/?phone=8801521222253" target="_new">Send a message</a>
          </article>
        </div>
        {/* Contact Options End */}

        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="text" name='email' placeholder='Your E-mail Address' required />
          <textarea type="text" rows="7" name='message' placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send E-mail</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
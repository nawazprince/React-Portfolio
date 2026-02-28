import React from 'react';
import './contact.css';
import { MdOutlineMail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';

const Contact = () => {
  return (
    <section id='contact'>
      <div className="container">
        <p className="section_label">Get In Touch</p>

        <div className="contact_container">
          <div className="contact_info fade-up">
            <h2 className="contact_headline">Let's work<br />together.</h2>

            <div className="contact_channels">
              <a
                href="mailto:nawazprince2510@gmail.com"
                className="contact_channel"
              >
                <MdOutlineMail className="contact_channel-icon" />
                <div>
                  <span className="contact_channel-label">Email</span>
                  <span className="contact_channel-value">nawazprince2510@gmail.com</span>
                </div>
              </a>

              <a
                href="https://api.whatsapp.com/send/?phone=8801521222253"
                target="_blank"
                rel="noreferrer"
                className="contact_channel"
              >
                <BsWhatsapp className="contact_channel-icon" />
                <div>
                  <span className="contact_channel-label">WhatsApp</span>
                  <span className="contact_channel-value">+8801521-222253</span>
                </div>
              </a>
            </div>
          </div>

          <form className="contact_form fade-up" action="">
            <div className="form_field">
              <input type="text" id="name" name="name" required placeholder=" " />
              <label htmlFor="name">Full Name</label>
            </div>

            <div className="form_field">
              <input type="email" id="email" name="email" required placeholder=" " />
              <label htmlFor="email">Email Address</label>
            </div>

            <div className="form_field">
              <textarea id="message" name="message" rows="5" required placeholder=" " />
              <label htmlFor="message">Message</label>
            </div>

            <button type="submit" className="btn btn-primary contact_submit">
              Send Message <span className="submit_arrow">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { React, useRef } from 'react';
import './contact.css';
import { MdEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { FaWhatsapp } from 'react-icons/fa';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kg7eyzh', 'template_jx46idh', form.current, '32cqWYG50pkq3Sx8Q')
      .then((result) => {
        // eslint-disable-next-line no-console
        console.log(result.text);
      }, (error) => {
        // eslint-disable-next-line no-console
        console.log(error.text);
      });
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__option__icon" />
            <h4>Email</h4>
            <h5>ujvari65@gmail.com</h5>
            <a href="mailto:ujvari65@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option__icon" />
            <h4>Messenger</h4>
            <h5>aleksandra ujvari</h5>
            <a href="https://m.me/aleksandra.ujvari" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className="contact__option__icon" />
            <h4>WhatsApp</h4>
            <h5>Aleksandra Ujvari</h5>
            <a href="https://web.whatsapp.com/send?phone=3810616483485" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Your Full Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required />
          <button type="submit" name="submit" value="send" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

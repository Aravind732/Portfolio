import './contact.css';
import Github from '../../assets/Github.jpg'
import Linkedin from '../../assets/Linkedin.jpg';
import Leetcode from '../../assets/Leetcode.jpg';
import Facebook from '../../assets/facebook.png';
import facebookIcon from '../../assets/facebook.png';
import twitterIcon from '../../assets/twitter.png';
import youtubeIcon from '../../assets/youtube.png';
import instagramIcon from '../../assets/instagram.png';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    'service_rdgot79',         
    'template_1ltxi4d',        
    form.current,              
    'R_mSgZuDQxDzGsJwZ'        
  )
  .then((result) => {
    console.log(result.text);
    e.target.reset();
    alert('Email Sent!');
  }, (error) => {
    console.log(error.text);
  });
};
 
    
    return (
        <div id='contactPage'>
            <div id="clients">
                <h1 className="contactPageTitle">Where You’ll Find Me</h1>
                <span className="clientDesc">
                   Check out my code, projects, and professional updates
                </span>
                <div className="clientImgs">
                <a href="https://github.com/Aravind732" target="_blank" rel="noopener noreferrer">
                    <img src={Github} alt="Client" className="clientImg" />
                </a>

                <a href="https://www.linkedin.com/in/aravindasamy-v-18293334a/" target="_blank" rel="noopener noreferrer">
                    <img src={Linkedin} alt="Client" className="clientImg" />
                </a>

                <a href="https://leetcode.com/u/Aravind222/" target="_blank" rel="noopener noreferrer">
                    <img src={Leetcode} alt="Client" className="clientImg" />
                </a>

                <a href="https://www.facebook.com/share/1N7ug9k23r/" target="_blank" rel="noopener noreferrer">
                    <img src={Facebook} alt="Client" className="clientImg" />  
                </a>
                 
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your name' name='from_name' />
                    <input type="text" className="email" placeholder='Your Email' name='from_email' />
                    <textarea name="message" placeholder='Your Message' rows={5} className='msg' ></textarea>
                    <button type="submit" value="Send" className='submitBtn'>Submit</button>
                    <div className="links">
                        <img src={facebookIcon} alt="Facebook" className="link" />
                        <img src={twitterIcon} alt="Twitter" className="link" />
                        <img src={youtubeIcon} alt="YouTube" className="link" />
                        <img src={instagramIcon} alt="Instagram" className="link" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
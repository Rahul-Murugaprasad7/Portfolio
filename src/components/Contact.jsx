import React, { useState } from 'react';

const Contact = () => {
  const [msg, setMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMsg('Message sent successfully!');
    setTimeout(() => setMsg(''), 5000);
  };

  return (
    <div id="Contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Contact Me</h1>
            <p><i className="fa-solid fa-paper-plane"></i> contact@example.com</p>
            <p><i className="fa-solid fa-phone"></i> 0123456789</p>
            <div className="social-icons">
              <a href="https://facebook.com/"><i className="fa-brands fa-facebook"></i></a>
              <a href="https://twitter.com/"><i className="fa-brands fa-twitter-square"></i></a>
              <a href="https://instagram.com/"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://linkedin.com/"><i className="fa-brands fa-linkedin"></i></a>
            </div>
            <a href="/image/Rahul Resume.pdf" download className="btn btn2">Download CV</a>
          </div>

          <div className="contact-right">
            <form onSubmit={handleSubmit}>
              <input type="text" name="Name" placeholder="Your Name" required />
              <input type="email" name="Email" placeholder="Your Email" required />
              <textarea name="Message" rows="10" placeholder="Your Message"></textarea>
              <button type="submit" className="btn btn2">Submit</button>
            </form>
            <span id="msg">{msg}</span>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © Rahul. Made with <i className="fa-solid fa-heart"></i> by Easy Tutorials</p>
      </div>
    </div>
  );
};

export default Contact;

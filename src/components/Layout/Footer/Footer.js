import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer>
    <div>
      <h4>BANKA</h4>
      <ul>
        <li>(BCC) Blog</li>
        <li>Corporate Services</li>
        <li>FAQs &amp; Contact</li>
      </ul>
    </div>
    <div>
      <h4>GET INVOLVED</h4>
      <ul>
        <li>Investment Options</li>
        <li>Careers</li>
        <li>Brand Ambassadors</li>
      </ul>
    </div>
    <div className="social-container">
      <h4>STAY CONNECTED</h4>
      <div className="social">
        <i className="fab fa-facebook-f" />
        <i className="fab fa-twitter" />
        <i className="fab fa-instagram" />
      </div>
    </div>
    <div>
      <h4>SUBSCRIBE TO OUR MONTHLY NEWSLETTER</h4>
      <form className="news-letter">
        <input type="email" placeholder="Enter your email address" />
        <button type="submit">Join</button>
      </form>
    </div>
  </footer>
);

export default Footer;

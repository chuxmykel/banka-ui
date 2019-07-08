import React from 'react';
import FooterGroup from './FooterGroup/FooterGroup';
import './Footer.css';

const Footer = () => (
  <footer>
    <FooterGroup
      title="BANKA"
      item={{ a: '(BCC) Blog', b: 'Corporate Services', c: 'FAQs &amp; Contact' }}
    />
    <FooterGroup
      title="GET INVOLVED"
      item={{ a: 'Investment Options', b: 'Careers', c: 'Brand Ambassadors' }}
    />
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

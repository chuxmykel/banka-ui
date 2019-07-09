import React from 'react';
import Header from '../../Layout/Header/Header';
import Footer from '../../Layout/Footer/Footer';
import TitledText from '../../common/TitledText/TitledText';
import text from '../../../utils/text';
import Cards from '../../../images/cards.png';
import Family from '../../../images/family.png';
import './LandingPage.css';

const LandingPage = () => (
  <div>
    <Header />
    <main>
      <section className="hero-container">
        <div className="text-container">
          <TitledText
            title="The Thinking Behind the Money"
            cta="Get Started"
            text={text[0]}
          />
        </div>
      </section>
      <section className="section">
        <div className="image-container">
          <img src={Cards} alt="debit cards" />
        </div>
        <div className="text-container">
          <TitledText
            title="Banka Black & Platinum Card"
            cta="Order Now"
            text={text[1]}
          />
        </div>
      </section>
      <section className="section">
        <div className="text-container">
          <TitledText
            title="Quick Loans for Young Families"
            cta="Apply Now"
            text={text[2]}
          />
        </div>
        <div className="image-container round">
          <img src={Family} alt="A family" />
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default LandingPage;

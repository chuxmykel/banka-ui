import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from '@Layout/Header/Header';
import Footer from '@Layout/Footer/Footer';
import TitledText from '@Common/TitledText/TitledText';
import SignUp from '@Components/Forms/SignUp/SignUp';
import SignIn from '@Components/Forms/SignIn/SignIn';
import { openModal } from '@Actions/uiActions';
import text from '@Utilities/text';
import Cards from '@Images/cards.png';
import Family from '@Images/family.png';
import './LandingPage.css';

class LandingPage extends Component {
  componentDidMount = () => {
    const { isAuthenticated, history } = this.props;
    if (isAuthenticated) {
      history.push('/dashboard');
    }
  };

  render = () => {
    const { open } = this.props;
    return (
      <div>
        <Header />
        <main>
          <section className="hero-container">
            <div className="text-container">
              <TitledText
                title="The Thinking Behind the Money"
                cta="Get Started"
                text={text[0]}
                open={() => open('signup')}
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
        <SignUp />
        <SignIn />
      </div>
    );
  }
}

LandingPage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
  open: PropTypes.func,
};

LandingPage.defaultProps = {
  open: null,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
  open: modal => dispatch(openModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LandingPage));

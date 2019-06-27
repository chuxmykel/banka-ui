import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from './components/Button';
import Display from './components/Display';
import { increment, decrement } from './actions/counterActions';
import './app.css';

class App extends Component {
  render = () => {
    const { count, increase, decrease } = this.props;
    return (
      <div className="App">
        <div>
          <div className="display-container">
            <Display text={count} />
          </div>
          <div className="operators">
            <Button symbol="-" handleClick={decrease} />
            <Button symbol="+" handleClick={increase} />
          </div>
        </div>
      </div>
    );
  };
}

App.propTypes = {
  count: PropTypes.number.isRequired,
  increase: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  count: state.counter.count,
});

const mapDispatchToProps = dispatch => ({
  increase: () => dispatch(increment()),
  decrease: () => dispatch(decrement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

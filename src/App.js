import React, { Component } from 'react';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import './app.css';

class App extends Component {
  render = () => (
    <div>
      <Header />
      <Footer />
    </div>
  );
}

export default App;

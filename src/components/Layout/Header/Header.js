import React from 'react';
import Nav from './Nav/Nav';
import './Header.css';

const Header = () => (
  <header>
    <div className="logo-container">
      <h3 className="logo">Banka</h3>
    </div>
    <div className="nav-container">
      <Nav />
    </div>
  </header>
);

export default Header;

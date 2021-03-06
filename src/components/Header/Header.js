import React from 'react';
import Navbar from './Navbar';
import logo from './logo.png';
import './header.css';

function Header() {
  return (
    <header>
      <div className="logo-div">
        <img className="logo" src={logo} alt="logo" />
        <h1>Space traveler hub</h1>
      </div>
      <Navbar />
    </header>
  );
}
export default Header;

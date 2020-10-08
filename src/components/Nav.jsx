import React, { Component } from 'react';
import '../styles/_nav.scss';
import logo from '../img/logo.svg'

class Nav extends Component {
  render() {
    return (
      <div className="nav"><img className="headerMain" src={logo} alt="rpgbackstory"/></div>
    );
  }
}

export default Nav;
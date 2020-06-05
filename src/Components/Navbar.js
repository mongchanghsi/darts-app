import React, { Component } from 'react';
import DartsLogo from '../img/dartsmainlogowhite.png';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render(){
    return(
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark sticky-top'>
        <a className='navbar-brand' href='/'><img src={DartsLogo} alt='dartslogo' className='logo-resize'/> </a>
        <button className='navbar-toggler' type='button' data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className='navbar-toggler-icon'/>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <Link to='/setup' className='remove-deco'><li className='nav-item'><a className='nav-link'> Let's Play! </a></li></Link>
            <Link to='/instructions' className='remove-deco'><li className='nav-item'><a className='nav-link'> Instructions </a></li></Link>
            <Link to='/feedback' className='remove-deco'><li className='nav-item'><a className='nav-link'> Feedback </a></li></Link>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;

import React from 'react';
import Logo from '../logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <a className="navbar-brand" href="#">
        <img className='logo' src={Logo} alt="logo.."></img>
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={faBars} color='white'/>
    </button>

    <div className="navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
        <li className="nav-item active" >
            <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">about me</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">services</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">work</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">contacts</a>
        </li>
        </ul> 
    </div>
</nav>
  )
} 

export default Navbar

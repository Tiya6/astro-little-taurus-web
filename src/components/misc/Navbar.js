import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.css';

const navbar = () => {
  return (
        <nav className="navbar navbar-dark bg">
            <ul className="navbar-nav list-group list-group-horizontal-xl">
                <li><Link to='/' className="link ">Home</Link></li>
                <li><Link to='/about' className="link">About</Link></li>
                <li><Link to='/calendar' className="link">Calendar</Link></li>
                <li><Link to='/login' className="link">Login</Link></li>
                <li><Link to='/register' className="link">Register</Link></li>
                
        </ul>
        </nav>
  )
}

export default navbar;
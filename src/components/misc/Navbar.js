import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.css';

const navbar = () => {
  return (
        <nav className="navbar navbar-dark bg navbar-inverse">
            <ul className="nav navbar-nav list-group list-group-horizontal-xl">
                <li><Link to='/' className="link">HOME</Link></li>
                <li><Link to='/learn' className="link">LEARN</Link></li>
                <li><Link to='/calendar' className="link">CALENDAR</Link></li>
                <li><Link to='/meetup' className="link">MEET UP</Link></li>
            </ul>
            <ul className="navbar navbar-nav list-group list-group-horizontal-xl navbar-right">
                <li><Link to='/login' className="link">LOGIN</Link></li>
                <li><Link to='/register' className="link">REGISTER</Link></li>          
            </ul>
        </nav>
  )
}

export default navbar;
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.css';
import Logout from '../../users/Logout';
import { Button, Nav } from 'react-bootstrap'
import { WithAuthConsumer } from '../../../contexts/AuthContext';

class navbar extends Component {

    render() {
        let login
        let profile
        let register
        let redirect
        if(this.props.currentUser) {
            profile = <Link to="/user" className="link" >PROFILE</Link>
            login = <Logout/>            
        } else {
            login = <Link to="/login" className="link" variant="primary">LOGIN</Link>
            register = <Link to="/signup" className="link" variant="primary">SIGN UP</Link>
            redirect = <Redirect to="/"/>
        }
        return (
        <nav className="navbar navbar-dark bg navbar-inverse">
            <ul className="nav navbar-nav list-group list-group-horizontal-xl">
                <li><Link to='/learn' className="link">LEARN</Link></li>
                <li><Link to='/calendar' className="link">CALENDAR</Link></li>
                <li><Link to='/meetup' className="link">MEET UP</Link></li>
            </ul>
            <ul className="nav navbar-nav list-group list-group-horizontal-xl home">
                <li><Link to='/' className='link'>ASTRO LITTLE TAURUS</Link></li>
            </ul>
            <ul className="navbar navbar-nav list-group list-group-horizontal-xl navbar-right">
                <li className="link">{profile}</li>
                <li className="link">{login}</li>
                <li className="link">{register}</li>  
                <li className="link">{redirect}</li>    
            </ul>
        </nav>
  )
}
}
export default WithAuthConsumer(navbar) ;
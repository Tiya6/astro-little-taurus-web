import React, { Component } from 'react'
import AuthContext, { WithAuthConsumer } from '../../contexts/AuthContext'
import { Button } from 'react-bootstrap'
import './Logout.css'

class Logout extends Component {
    
    state = {
        error: false, 
        loading: false
      }

    handleClick = (event) => {
        event.preventDefault()    
        this.setState({ loading: true, error: false }, () => {
            this.props.logout()
        });        
    }
    
    render() {
        return (
           <ul className="nav navbar-nav list-group list-group-horizontal-xl home">
            <li onClick={this.handleClick} className="loginout" type="submit" disabled={this.state.loading}>LOGOUT</li>
          </ul>
        )        
    }
    }

export default WithAuthConsumer(Logout)
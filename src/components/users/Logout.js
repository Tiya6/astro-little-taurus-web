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
           <Button onClick={this.handleClick} className="logout-button" type="submit" disabled={this.state.loading}>LOGOUT</Button>
            
        )
        
    }
    }

export default WithAuthConsumer(Logout)
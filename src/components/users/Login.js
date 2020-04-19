import React, { useState, useContext } from 'react'
import LoginService from  '../../services/LoginService'
import { Link, Redirect } from 'react-router-dom';
import AuthContext, { WithAuthConsumer } from '../../contexts/AuthContext'
import 'font-awesome/css/font-awesome.min.css';
import './Login.css'


class Login extends React.Component {
  state = {
    data: {
      email: '',
      password: '',
    },
    error: false, 
    loading: false
  }

  handleChange = (event) => {
    const { name, value } = event.target

    this.setState({
      data: {
        ...this.state.data,
        [name]: value
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.setState({ loading: true, error: false }, () => {
      LoginService.login({ ...this.state.data })
        .then(
          (user) => {
            this.props.setUser(user)
          },
          () => {
            this.setState({ error: true, loading: false })
          }
        )
    })
  }

  render() {
    const errorClassName = this.state.error ? 'is-invalid' : ''

    if (this.props.currentUser) {
      return <Redirect to="/user"/>
    }

    return (
      <div className="login">
        <div className="head">                     
            <h3 className="my-3">
              <i className="fa fa-sign-in"></i> Login
            </h3>              
        </div>              
        <div>
          { errorClassName && <span>Ups! Invalid email or password</span>}
          <form action="/login" method="POST" onSubmit={this.handleSubmit}>
            <div className="input">
              <input type="text" className="form-control" name="email" placeholder="Enter email" value={this.state.email}  onChange={this.handleChange}/>
            </div>
            <div className="input">
              <input type="password" className="form-control" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
            </div>
            <button type="submit" className="btn" disabled={this.state.loading}>SUBMIT</button>
          </form>
        </div>
        <div className="font-weight-light">
                  <p>Not a member? <Link to="/signup">Register</Link></p>                  
        </div>      
      </div>

    )
  }
}

  export default WithAuthConsumer(Login)

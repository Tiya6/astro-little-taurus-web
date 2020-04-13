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
              <input type="text" className="form-control" name="email" placeholder="Enter email" value={this.email}  onChange={this.handleChange}/>
            </div>
            <div className="input">
              <input type="password" className="form-control" name="password" placeholder="Password" value={this.password} onChange={this.handleChange} />
            </div>
            <button type="submit" className="btn">SUBMIT</button>
          </form>
        </div>
        <div className="font-weight-light">
                  <p>Not a member? <Link to="/register">Register</Link></p>                  
        </div>      
      </div>


/*
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>

            <input
              value={this.state.data.email}
              onChange={this.handleChange}
              autoComplete="off"
              name="email"
              type="email"
              className={`form-control ${errorClassName}`}
              id="email"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group mb-5">
            <label htmlFor="password">Password</label>

            <input
              value={this.state.data.password}
              onChange={this.handleChange}
              name="password"
              type="password"
              className={`form-control ${errorClassName}`}
              id="password"
              placeholder="Password"
            />
          </div>
              
          <button
            type="submit"
            className="btn btn-block btn-primary mb-3"
            disabled={this.state.loading}
          >
            Log in
          </button>

          <Link to="/signup">Register</Link>
        </form>
      </div>*/
    )
  }
}

/*
const Login = () => {

    const [data, setData] = useState({
      email: '',
      password: '',
      error: false,
    });
    
    const { localSetUser } = useContext(AuthContext)
    
    const { email, password, error } = data
  
    const handleChange = (e) => {
      const { name, value } = e.target
      setData({
        ...data,
        [name]: value
      })
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
  
    LoginService.login({ email, password })
        .then(
          user => {
            localSetUser(user)
          },
          error => {
            setData({
              ...data,
              error: true
            })
          }
        )      
    }
  
    return ( 
      <div className="login">
        <div className="head">                     
            <h3 className="my-3">
              <i className="fa fa-sign-in"></i> Login
            </h3>              
        </div>              
        <div>
          { error && <span>Ups! Invalid email or password</span>}
          <form action="/login" method="POST" onSubmit={handleSubmit}>
            <div className="input">
              <input type="text" className="form-control" name="email" placeholder="Enter email" value={email}  onChange={handleChange}/>
            </div>
            <div className="input">
              <input type="password" className="form-control" name="password" placeholder="Password" value={password} onChange={handleChange} />
            </div>
            <button type="submit" className="btn">SUBMIT</button>
          </form>
        </div>
        <div className="font-weight-light">
                  <p>Not a member? Register</p>                  
        </div>      
      </div>
    )
  }*/

  //export default Login

  export default WithAuthConsumer(Login)

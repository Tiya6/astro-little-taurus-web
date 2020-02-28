import React, { useState, useContext } from 'react'
import LoginService from  '../../services/LoginService'
import AuthContext from '../../contexts/AuthContext'
import 'font-awesome/css/font-awesome.min.css';
import './Login.css'

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
              <i class="fa fa-sign-in"></i> Login
            </h3>              
        </div>              
        <div>
          { error && <span>Ups! Invalid email or password</span>}
          <form onSubmit={handleSubmit}>
            <div className="input">
              <input type="text" className="form-control" name="email" placeholder="Enter email" value={email}  onChange={handleChange}/>
            </div>
            <div className="input">
              <input type="password" className="form-control" name="password" placeholder="Password" value={password} onChange={handleChange} />
            </div>
            <button type="submit" className="btn ">SUBMIT</button>
          </form>
        </div>
        <div className="font-weight-light">
                  <p>Not a member? Sign Up</p>                  
        </div>      
      </div>
    )
  }

  export default Login
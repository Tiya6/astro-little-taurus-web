import React, { useState, useContext } from 'react'
import LoginService from  '../../services/LoginService'
import AuthContext from '../../contexts/AuthContext'
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
      <div className="card formu">
        <div className="formul">
        { error && <span>Ups! Invalid email or password</span>}
          <form onSubmit={handleSubmit}>
            <div className="input">
              <input type="text" className="form-control" name="email" placeholder="Enter email" value={email}  onChange={handleChange}/>
            </div>
            <div className="input">
              <input type="password" className="form-control" name="password" placeholder="Password" value={password} onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-warning">Log in</button>
          </form>
        </div>      
      </div>
    )
  }

  export default Login
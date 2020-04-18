import React, { useState, useContext } from 'react'
import AuthContext from '../../contexts/AuthContext'
import LoginService from '../../services/LoginService'
import './Register.css'

const Register = () => {

  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    gender: '',
    image: '',
    description: '',
    error: false,
  });

  const { localSetUser } = useContext(AuthContext)
  
  const { name, email, username, image, password, description, error } = data
  
  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = Object.keys(data).reduce((acc, k) => {
      acc.append(k, data[k])
      return acc
    }, new FormData())

    //console.log(formData)

    LoginService.register(formData)
      .then(
        user => {
          localSetUser(user)
        },
        error => {
          console.log(error)
        }
      )
  }

  const handleChange = (e) => {
    const { name, value, files } = e.target
    setData({
      ...data,
      [name]: files ? files[0] : value
    })
  }

  return (
      <div className="register">
        <div className="head">                     
                <h3 className="my-3">
                  Sign in
                </h3>              
        </div>
        <form action="/register" method="POST" onSubmit={handleSubmit}>
            <input type="text" className="form-control" name="name" placeholder="Enter name" value={name} onChange={handleChange} />
            <input type="text" className="form-control" name="email" placeholder="Enter email" value={email} onChange={handleChange} />
            <input type="password" className="form-control" name="password" placeholder="Enter password" value={password} onChange={handleChange} />
            <input type="text" className="form-control" name="username" placeholder="Enter username" value={username} onChange={handleChange} />
            <div className="input-group mb-3 ml-3 mt-4">
              <div className="input-group-prepend">
                <span className="input-group-text">Avatar</span>
              </div>
              <div className="custom-file">
                <input type="file" className="custom-file-input" name="image" onChange={handleChange} id="inputGroupFile01"/>
                <label className="custom-file-label" /*for="inputGroupFile01"*/>Choose image profile file</label>
              </div>
            </div>
            <div className="input-group">
              <div className="input-group-prepend ml-3">
                <span className="input-group-text">Bio</span>
              </div>
              <textarea className="form-control" name="description" value={description} onChange={handleChange}></textarea>
            </div>
        </form>
        <button type="submit" className="btn">SUMBIT</button>
      </div>
   
  )
}

export default Register
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import LoginService from  '../../services/LoginService'
import './Register.css'

class Register extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        image: '',
        gender: '',
        description: '',
        age: 0,
        error: false,
        loading: false,
        success: false
    }

    handleChange = (event) => {
        const { name, value, files } = event.target

        this.setState({ [name]: files ? files[0] : value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
    
        const {name, email, password, image, age, gender, description} = this.state
    
        const formData = new FormData()
        formData.append('description', description)
        formData.append('name', name)
        formData.append('email', email)
        formData.append('password', password)
        formData.append('image', image)
        formData.append('age', age)
        
    
        this.setState({ loading: true, error: false }, () => {
            LoginService.register(formData)
            .then(() => {
              this.setState({ success: true })
            })
            .catch(() => {
              this.setState({ error: true, loading: false })
            })
        })
      }

    render() {
        const errorClassName = this.state.error ? 'is-invalid' : ''

        if (this.state.success) {
          return <Redirect to="/login"/>
        }
        return ( 
            <div className="register">
                <div className="head">                     
                    <h3 className="my-3">
                      Sign in
                    </h3>              
                </div>
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                      
                      <input
                      value={this.state.name}
                      onChange={this.handleChange}
                      autoComplete="off"
                      name="name"
                      type="text"
                      className={`form-control ${errorClassName}`}
                      id="name"
                      placeholder="Enter name"
                      />
                  </div>

                  <div className="form-group">
                      
                      <input
                      value={this.state.email}
                      onChange={this.handleChange}
                      autoComplete="off"
                      name="email"
                      type="text"
                      className={`form-control ${errorClassName}`}
                      id="email"
                      placeholder="Enter email"
                      />
                  </div>

                  <div className="form-group mb-5">
                    
                      <input
                      value={this.state.password}
                      onChange={this.handleChange}
                      name="password"
                      type="password"
                      className={`form-control ${errorClassName}`}
                      id="password"
                      placeholder="Enter password"
                      />
                  </div>

                  <div className="form-group input-group mb-3 ml-3 mt-4">
                      <div className="input-group-prepend">
                        <span className="input-group-text">Age</span>
                      </div>
                      <div className="custom-file">
                        <input
                        value={this.state.age}
                        onChange={this.handleChange}
                        name="age"
                        type="number"
                        className={`form-control ${errorClassName}`}
                        id="age"
                        min="16"
                        max="100"
                        placeholder="Age"
                        />
                      </div>
                  </div>

                   <div className="form-group input-group mb-3 ml-1 mt-4">
                      <div className="input-group-prepend ml-3">
                        <span className="input-group-text">Bio</span>
                      </div>
                      <textarea
                      value={this.state.description}
                      onChange={this.handleChange}
                      autoComplete="off"
                      name="description"
                      type="text"
                      className={`form-control ${errorClassName}`}
                      id="description"
                      placeholder="Enter description"
                      />
                  </div>

                  <button type="submit" className="btn" disabled={this.state.loading}>SUBMIT</button>

                </form>
            </div>
        )
    }
}

export default Register

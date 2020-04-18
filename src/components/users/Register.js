/*import React, { Component } from 'react'
import AuthContext from '../../contexts/AuthContext'
import LoginService from '../../services/LoginService'
import './Register.css'
import { Link, Redirect } from 'react-router-dom';

class Register extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    age: '',
    gender: '',
    image: '',
    description: '',
    error: false,
  };

  handleChange = (e) => {
    const { name, value, files } = e.target
    
    this.setState({ [name]: files ? files[0] : value })
  }
 
  handleSubmit = (e) => {
    e.preventDefault()

    const {name,email,password,age,gender,image,description} = this.state

    const formData = new FormData()
    formData.append('name',name)
    formData.append('email',email)
    formData.append('password',password)
    formData.append('age',age)
    formData.append('gender',gender)
    formData.append('image',image)
    formData.append('description',description)

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

  render(){
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
            <input type="text" className="form-control" name="name" placeholder="Enter name" value={this.state.name} onChange={this.handleChange} />
            <input type="text" className="form-control" name="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChange} />
            <input type="password" className="form-control" name="password" placeholder="Enter password" value={this.state.password} onChange={this.handleChange} />
            <input type="text" className="form-control" name="username" placeholder="Enter username" value={this.state.username} onChange={this.handleChange} />
            <div className="input-group mb-3 ml-3 mt-4">
              <div className="input-group-prepend">
                <span className="input-group-text">Avatar</span>
              </div>
              <div className="custom-file">
                <input type="file" className="custom-file-input" name="image" onChange={this.handleChange} id="inputGroupFile01"/>
                <label className="custom-file-label" /*for="inputGroupFile01"*//*>Choose image profile file</label>
             /* </div>
            </div>
            <div className="input-group">
              <div className="input-group-prepend ml-3">
                <span className="input-group-text">Bio</span>
              </div>
              <textarea className="form-control" name="description" value={this.state.description} onChange={this.handleChange}></textarea>
            </div>
        </form>
        <button type="submit" className="btn" disabled={this.state.loading}>SUMBIT </button>
      </div>  
    )
  }  
}

export default Register
/*
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import LoginService from '../../services/LoginService'
import './Register.css'

class Register extends Component {
    state = {
        username:'',
        name: '',
        email: '',
        password: '',
        image: '',
        description: '',
        age: '',
        gender: '',
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
    
        const {
            username, name, email, password, image, description, age, gender
        } = this.state
    
        const formData = new FormData()
        formData.append('username', username)
        formData.append('name', name)
        formData.append('email', email)
        formData.append('password', password)
        formData.append('image', image)
        formData.append('description', description)
        formData.append('age', age)
        formData.append('gender', gender)
    
        this.setState({ loading: true, error: false }, () => {
          console.log(formData)
            LoginService.register(formData)
            .then(() => {
              console.log("success true")
              this.setState({ success: true })
            })
            .catch(() => {
              console.log("error catch ")
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
            <form action="/register" method="POST" onSubmit={this.handleSubmit}>
                <input type="text" className="form-control" name="name" placeholder="Enter name" value={this.state.name} onChange={this.handleChange} />
                <input type="text" className="form-control" name="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChange} />
                <input type="password" className="form-control" name="password" placeholder="Enter password" value={this.state.password} onChange={this.handleChange} />
                <input type="text" className="form-control" name="username" placeholder="Enter username" value={this.state.username} onChange={this.handleChange} />
                <div className="input-group mb-3 ml-3 mt-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Avatar</span>
                  </div>
                  <div className="custom-file">
                    <input type="file" className="custom-file-input" name="image" onChange={this.handleChange} id="inputGroupFile01"/>
                    <label className="custom-file-label" /*for="inputGroupFile01"*//*>Choose image profile file</label>
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-prepend ml-3">
                    <span className="input-group-text">Bio</span>
                  </div>
                  <textarea className="form-control" name="description" value={this.state.description} onChange={this.handleChange}></textarea>
                </div>
            </form>
            <button type="submit" className="btn">SUMBIT </button>
          </div>
        )
    }
}

export default Register*/

import React, { Component } from 'react'
import LoginService from  '../../services/LoginService'
import { Link, Redirect } from 'react-router-dom';
import './Register.css'


class Register extends Component {

  constructor(props){
    super(props);

    this.state = {
      data: {
        name:'',
        email: '',
        password: '',
        username:'',
        image:'',
        description:''
      },
      error: false, 
      loading: false,
      success: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      LoginService.register({ ...this.state.data })
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

    if (this.props.currentUser) {
      return <Redirect to="/user"/>
    }

    return (
      <div className="register">
            <div className="head">                     
                    <h3 className="my-3">
                      Sign in
                    </h3>              
            </div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" className="form-control" name="name" placeholder="Enter name" value={this.state.name} onChange={this.handleChange} />
                <input type="text" className="form-control" name="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChange} />
                <input type="password" className="form-control" name="password" placeholder="Enter password" value={this.state.password} onChange={this.handleChange} />
                <input type="text" className="form-control" name="username" placeholder="Enter username" value={this.state.username} onChange={this.handleChange} />
                <div className="input-group mb-3 ml-3 mt-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Avatar</span>
                  </div>
                  <div className="custom-file">
                    <input type="file" className="custom-file-input" name="image" onChange={this.handleChange} id="inputGroupFile01"/>
                    <label className="custom-file-label" /*for="inputGroupFile01"*/>Choose image profile file</label>
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-prepend ml-3">
                    <span className="input-group-text">Bio</span>
                  </div>
                  <textarea className="form-control" name="description" value={this.state.description} onChange={this.handleChange}></textarea>
                </div>
            </form>
            <button type="submit" value="Submit" className="btn">SUMBIT </button>
          </div>
    )
  }
}

  export default Register

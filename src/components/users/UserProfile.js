import React, { Component } from 'react'
import profile from '../misc/images/myAvatar.png'
import solar from '../misc/images/solar.png'
import './UserProfile.css'
import LoginService from '../../services/LoginService'

class User extends Component {

  state = {
    id: '',
    name: '',
    age: 0,
    description: '',
    image:'',
  }

  componentDidMount() {
      LoginService.user('5e9d7cb084a52800170f1b26')
        .then(user => {
            this.setState({
                id: user.id,
                name:user.name,
                age: user.age,
                description: user.description,
                image: user.image
            })              
        })
        console.log(this.state.id)
    }

  render(){
    return (
    <div className="container container-ml d-flex marg-top">
        <div className="card flex-row flex-wrap profile-card">
            <div className="card-header border-0 profile-cont">
                <img src={profile} className="profile mt-3" alt="profile"></img>
            </div>
            <div className="card-block px-2 text-center profile-text mt-5">
                <h4 className="card-title">Name : {this.state.name}</h4>
                <h4 className="card-title">Age : {this.state.age}</h4>
                <h4 className="card-title">Bio </h4>
                <p className="card-text">{this.state.description}</p>
            </div>
            <div className="w-100"></div>
        </div>
        <div className="card flex-row flex-wrap solardiv">
                <img src={solar} className="solar" alt="solar"></img>
        </div>
    </div>
    )
  }
  }
  
  export default User
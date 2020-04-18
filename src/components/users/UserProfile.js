import React, { Component } from 'react'
import profile from '../misc/images/myAvatar.png'
import './UserProfile.css'
import LoginService from '../../services/LoginService'

class User extends Component {

  state = {
    userid: '',
    username: '',
    name: '',
    description: ''
  }

  componentDidMount() {

      LoginService.user(this.props.match.params.id)
      .then(user => {
          this.setState({
              userid: user.id,
              username: user.username,
              name: user.name,
              description: user.description
          })
          return user
      })
    }

  render(){

    return (
      <div className="card mt-5">
          <img src={profile} className="profile" alt="profile"></img>
    <h4>Name: Peter</h4>
      </div>
    )
  }

  }
  
  export default User
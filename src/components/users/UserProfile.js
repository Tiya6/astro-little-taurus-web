import React from 'react'
import profile from '../misc/images/myAvatar.png'
import './UserProfile.css'

const User = (props) => {

    return (
      <div className="card mt-5">
          <img src={profile} className="profile" alt="profile"></img>
    <h4>Name: Peter</h4>
      </div>
    )
  }
  
  export default User
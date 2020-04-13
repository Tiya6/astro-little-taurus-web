import React, { createContext, useState } from 'react'
import LoginService from '../services/LoginService';

const AuthContext = createContext();

export class AuthContextProvider extends React.Component {
  state = {
    user: JSON.parse(localStorage.getItem('user'))
  }

  setUser = (user) => {
    localStorage.setItem('user', user ? JSON.stringify(user) : null)
    this.setState({ user })
  }

  logout = () => {
    LoginService.logout()
      .then(() => {
        localStorage.clear()
        this.setUser({})
      })
  }

  render() {
    const value = {
      currentUser: this.state.user,
      setUser: this.setUser,
      logout: this.logout
    }

    return (
      <AuthContext.Provider value={value}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
};

export const WithAuthConsumer = (WrappedComponent) => (props) => (
  <AuthContext.Consumer>
    {(authProps) => (<WrappedComponent {...props} {...authProps} />)}
  </AuthContext.Consumer>
)

/*
const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

  const localSetUser = (currentUser) => {
    localStorage.setItem('user', currentUser ? JSON.stringify(currentUser) : null )
    setUser(currentUser)
  }

  const value = {
    currentUser: user,
    localSetUser: localSetUser
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
*/



export default AuthContext
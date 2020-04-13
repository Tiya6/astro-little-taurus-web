/*import User from '../data/user.json'*/
import axios from 'axios'
/*
const login = ({ email, password }) => (
    new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(User)
      }, 500);
    })
  )

const register = (body) => (
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(User)
      }, 500);
    })
)*/


const http =  axios.create({
  baseURL: 'https://astro-little-taurus.herokuapp.com/',
  withCredentials: true
})

http.interceptors.response.use(
  response => response.data,
  error => {
    if (error.response && error.response.status === 401) {
      localStorage.clear()
      window.location.assign('/login')
    }

    return Promise.reject(error)
  }
)

const login = ({ email, password }) =>
 http.post('/login', { email, password })

const logout = () => http.post('/logout')

const register = (body) => 
http.post('/register', body)


export default {
    login,
    register,
    logout
}
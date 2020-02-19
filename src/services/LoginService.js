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
  baseURL: 'https://https://astro-little-taurus.herokuapp.com/',
  withCredentials: true
})

const login = ({ email, password }) =>
 http.post('/login', { email, password })

const register = (body) => 
http.post('/register', body)


export default {
    login,
    register
}
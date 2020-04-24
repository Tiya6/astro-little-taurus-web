import axios from 'axios'

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

//API

const login = ({ email, password }) => http.post('/login', { email, password })

const logout = () => http.post('/logout')

const register = (body) => http.post('/user', body)

const user = (id) => http.get(`/user/${id}`)

export default {
    login,
    register,
    logout,
    user
}
import User from '../data/user.json'

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
)

export default {
    login,
    register
}
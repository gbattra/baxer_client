import '../config/auth-config.yml'


const Auth = require('j-toker')

export const getAuth = () => {
  Auth.configure({
    apiUrl: ''
  })

  return Auth
}

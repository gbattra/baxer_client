import '../config/auth-config.yml'


const Auth = require('j-toker')

export const getAuth = () => {
  Auth.configure({
    apiUrl: 'http://localhost:3000'
  })

  return Auth
}

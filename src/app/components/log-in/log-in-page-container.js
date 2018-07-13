import './log-in.scss'
import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid
} from 'semantic-ui-react'
import LogInForm from './log-in-form'
import { getAuth } from '../../../auth/j-toker'


const Auth = getAuth()

class LogInPageContainer extends React.Component {

  loginUser = (form) => {
    Auth.emailSignIn({
      email: form.email,
      password: form.password,
      config: 'default'
    })
  }

  render() {
    return (
      <LogInForm logInClicked={this.loginUser}/>
    )
  }
}

export default LogInPageContainer

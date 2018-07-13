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

  componentWillMount() {
    Auth.validateToken()
      .then((user) => {
        debugger
      })
      .fail((resp) => {
        console.log(resp);
      })
  }

  onSuccess = (resp) => {

  }

  loginUser = (form) => {
    Auth.emailSignIn({
      email: form.email,
      password: form.password,
      config: 'default'
    }).then(function(user) {
      console.log(resp);
    }.bind(this)).fail(function(resp) {
      console.log(resp);
    })
  }

  render() {
    return (
      <LogInForm logInClicked={this.loginUser}/>
    )
  }
}

export default LogInPageContainer

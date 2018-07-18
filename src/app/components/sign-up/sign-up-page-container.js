import './sign-up.scss'
import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid
} from 'semantic-ui-react'
import SignUpForm from './sign-up-form'
import { getAuth } from '../../../auth/j-toker'


const Auth = getAuth()

class SignUpPageContainer extends React.Component {

  registerUser = (form) => {
    Auth.emailSignUp({
      email: form.email,
      password: form.password,
      password_confirmation: form.confirmPassword,
      confirm_success_url: 'http://localhost:8080/home',
      config: 'default'
    })
  }

  render() {
    return (
      <SignUpForm signUpClicked={this.registerUser}/>
    )
  }
}

export default SignUpPageContainer

import './sign-up.scss'
import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid
} from 'semantic-ui-react'
import SignUpForm from './sign-up-form'


class SignUpPageContainer extends React.Component {

  render() {
    return (
      <SignUpForm signUp={this.signUp}/>
    )
  }
}

export default SignUpPageContainer

import './log-in.scss'
import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid
} from 'semantic-ui-react'
import LogInForm from './log-in-form'
import { getAuth } from '../../../auth/j-toker'
import { Redirect } from 'react-router-dom'


const Auth = getAuth()

class LogInPageContainer extends React.Component {

  static props = {
    user: PropTypes.shape
  }

  state = {
    user: this.props.user
  }

  constructor(props) {
    super(props)
  }

  loginUser = (form) => {
    Auth.emailSignIn({
      email: form.email,
      password: form.password,
      config: 'default'
    }).fail((resp) => {
      console.log(resp)
    })
  }

  render() {
    return (
      <div>
        {this.state.user.signedIn ? (
            <Redirect to='/home'  />
          ) : (
            <LogInForm logInClicked={this.loginUser}/>
          )
        }
      </div>
    )
  }
}

export default LogInPageContainer

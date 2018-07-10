import './log-in.scss'
import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid
} from 'semantic-ui-react'
import LogInForm from './log-in-form'


class LogInPageContainer extends React.Component {

  render() {
    return (
      <LogInForm />
    )
  }
}

export default LogInPageContainer

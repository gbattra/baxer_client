import './app-container.scss'
import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import HomePageContainer from '../home/home-page-container'
import { getAuth } from '../../../auth/j-toker'


const Auth = getAuth()

class AppContainer extends React.Component {

  static props = {
    user: PropTypes.shape
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {this.props.user.signedIn ? (
          <Route path='/home' render={() => {
            return (
              <HomePageContainer />
            )
          }} />
        ) : (
          <Redirect to='/log-in'  />
        )}
      </div>
    )
  }
}

export default AppContainer

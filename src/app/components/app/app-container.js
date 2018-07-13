import './app-container.scss'
import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import HomePageContainer from '../home/home-page-container'
import { getAuth } from '../../../auth/j-toker'


const Auth = getAuth()

class AppContainer extends React.Component {

  state = {
    loggedIn: false
  }

  componentWillMount() {
    Auth.validateToken()
      .then((user) => {
        this.setState({
          loggedIn: true
        })
      })
      .fail(() => {
        return <Redirect to='/log-in' />
      })
  }

  render() {
    return (
      <div>
        {this.state.loggedIn ? (
          <BrowserRouter>
            <Route path='/home' render={() => {
              return (
                <HomePageContainer />
              )
            }} />
          </BrowserRouter>
        ) : (
          <Redirect
            to='/log-in'/>
        )}
      </div>
    )
  }
}

export default AppContainer

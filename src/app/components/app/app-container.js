import './app-container.scss'
import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Route } from 'react-router-dom'
import HomePageContainer from '../home/home-page-container'


class AppContainer extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Route path='/home' render={() => {
          return (
            <HomePageContainer />
          )
        }} />
      </BrowserRouter>
    )
  }
}

export default AppContainer

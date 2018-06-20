import React from 'react'
import PropTypes from 'prop-types'
import FeedPageContainer from './routes/feed/feed-page-container'


class AppContainer extends React.Component {

  style = {
    container: {
      height: '100vh',
      width: '100vw'
    }
  }
  
  render() {
    return (
      <div style={this.style.container}>
        <FeedPageContainer />
      </div>
    )
  }
}

export default AppContainer

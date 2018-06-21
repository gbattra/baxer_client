import React from 'react'
import PropTypes from 'prop-types'
import FeedPageContainer from './routes/feed/feed-page-container'
import PlayerBarContainer from './routes/player-bar-container'


class AppContainer extends React.Component {

  style = {
    container: {
      height: '95vh',
      width: '100vw'
    }
  }

  render() {
    return (
      <div style={this.style.container}>
        <FeedPageContainer />
        <PlayerBarContainer />
      </div>
    )
  }
}

export default AppContainer

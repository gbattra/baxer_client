import React from 'react'
import PropTypes from 'prop-types'
import FeedPageContainer from './feed/feed-page-container'


class AppContainer extends React.Component {
  render() {
    return (
      <div>
        <FeedPageContainer />
      </div>
    )
  }
}

export default AppContainer

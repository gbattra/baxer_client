import React from 'react'
import PropTypes from 'prop-types'


class FeedDashboardContainer extends React.Component {

  style = {
    feedContainer: {
      height: '100%',
      background: 'white'
    }
  }

  render() {
    return (
      <div style={this.style.feedContainer}>
        Feed
      </div>
    )
  }
}

export default FeedDashboardContainer

import React from 'react'
import PropTypes from 'prop-types'


class FeedDashboardContainer extends React.Component {

  static props = {
    feedTrack: PropTypes.shape({
      id: PropTypes.int,
      title: PropTypes.string,
      author: PropTypes.string,
      runtime: PropTypes.int,
      album_art_url: PropTypes.string
    }).isRequired
  }

  constructor(props, defaultProps) {
    super(props, defaultProps);
  }

  render() {
    return (
      <div></div>
    )
  }
}

export default FeedDashboardContainer

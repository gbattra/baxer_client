import React from 'react'
import PropTypes from 'prop-types'
import {Grid, Row, Col} from 'react-flexbox-grid'


class FeedQueueContainer extends React.Component {

  style = {
    upcomingTrackContainer: {
      'background': 'purple',
      'padding': '1em'
    }
  }

  static props = {
    upcomingTracks: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.int,
      title: PropTypes.string,
      author: PropTypes.string,
      runtime: PropTypes.int,
      album_art_url: PropTypes.string
    }))
  }

  static defaultProps = {
    upcomingTracks: [
      {
        id: 1,
        title: 'Create',
        author: 'Overwerk',
        runtime: 120,
        album_art_url: ''
      },
      {
        id: 1,
        title: 'Wont Stop Rocking',
        author: 'R3hab',
        runtime: 120,
        album_art_url: ''
      },
      {
        id: 1,
        title: 'Create',
        author: 'Overwerk',
        runtime: 120,
        album_art_url: ''
      },
      {
        id: 1,
        title: 'Wont Stop Rocking',
        author: 'R3hab',
        runtime: 120,
        album_art_url: ''
      },
      {
        id: 1,
        title: 'Create',
        author: 'Overwerk',
        runtime: 120,
        album_art_url: ''
      },
      {
        id: 1,
        title: 'Wont Stop Rocking',
        author: 'R3hab',
        runtime: 120,
        album_art_url: ''
      }
    ]
  }

  constructor(props, defaultProps) {
    super(props, defaultProps)
  }

  render() {
    return (
      <Row>
        {this.props.upcomingTracks.map((track) => {
          return (
            <Col sm={12} md={12} style={this.style.upcomingTrackContainer}>
              {track.title}
            </Col>
          )
        })}
      </Row>
    )
  }
}

export default FeedQueueContainer

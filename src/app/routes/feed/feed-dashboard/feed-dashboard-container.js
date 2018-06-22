import React from 'react'
import PropTypes from 'prop-types'
import {Grid, Row, Col} from 'react-flexbox-grid'
import TrackWaveform from './track-waveform'
import FeedTrackAlbumArt from './feed-track-album-art'


class FeedDashboardContainer extends React.Component {

  style = {
    feedDashboardContainer: {
      'height': '100%',
      'text-align': 'center'
    },
    feedDashboard: {
      'height': '95vh',
      'margin-top': '5vh',
      'background': 'green'
    }
  }

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
      <Grid fluid style={this.style.feedDashboardContainer}>
        <Row>
          <Col sm={12} md={12}></Col>
        </Row>
        <Row style={this.style.feedDashboard}>
          <Col sm={12} md={12}>
            <Row style={{'background':'red'}}>
              <Col sm={2} md={3}></Col>
              <Col sm={8} md={6} style={{'background':'blue'}}>
                <Row style={{'background':'yellow'}}>
                  <Col sm={12} md={12}></Col>
                </Row>
                <Row style={{'background':'pink'}}>
                  <Col sm={6} md={8} style={{'margin':'auto'}}>
                    <FeedTrackAlbumArt/>
                  </Col>
                </Row>
                <Row>
                  {this.props.feedTrack.title}
                </Row>
                <Row>
                  {this.props.feedTrack.author}
                </Row>
                <Row>
                  <TrackWaveform />
                </Row>
              </Col>
              <Col sm={2} md={3}></Col>
            </Row>
            <Row style={{'background':'black'}}>
              <Col sm={3} md={4}></Col>
              <Col sm={6} md={4} style={{'background':'orange'}}>
                <Row>
                  <Col sm={4} md={4}>Dislike</Col>
                  <Col sm={4} md={4}>Play/Pause</Col>
                  <Col sm={4} md={4}>Like</Col>
                </Row>
              </Col>
              <Col sm={3} md={4}></Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={12}></Col>
        </Row>
      </Grid>
    )
  }
}

export default FeedDashboardContainer

import React from 'react'
import PropTypes from 'prop-types'
import {Grid, Row, Col} from 'react-flexbox-grid'
import TrackWaveform from './track-waveform'
import FeedTrackAlbumArt from './feed-track-album-art'
import FeedQueueContainer from './feed-queue-container'


class FeedDashboardContainer extends React.Component {

  style = {
    feedDashboardContainer: {
      'height': '95vh',
      'background': 'green',
      'overflow': 'hidden'
    },
    feedDashboard: {
      'margin-top': '5vh'
    },
    trackInfo: {
      'padding': '1em',
      'text-align': 'center'
    },
    dashboardControlsContainer: {
      'padding': '2em 0',
      'background': 'black'
    },
    dashboardControl: {
      'padding': '1em',
      'text-align': 'center'
    },
    feedQueueContainer: {
      'background': 'brown'
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
                  <Col sm={12} md={12} style={this.style.trackInfo}>
                    {this.props.feedTrack.title}
                  </Col>
                </Row>
                <Row>
                  <Col sm={12} md={12} style={this.style.trackInfo}>
                    {this.props.feedTrack.author}
                  </Col>
                </Row>
                <Row>
                  <Col sm={12} md={12} style={this.style.trackInfo}>
                    <TrackWaveform />
                  </Col>
                </Row>
              </Col>
              <Col sm={2} md={3}></Col>
            </Row>
            <Row style={this.style.dashboardControlsContainer}>
              <Col sm={2} md={3}></Col>
              <Col sm={8} md={6} style={{'background':'orange'}}>
                <Row>
                  <Col sm={4} md={4} style={this.style.dashboardControl} >Dislike</Col>
                  <Col sm={4} md={4}style={this.style.dashboardControl} >Play/Pause</Col>
                  <Col sm={4} md={4}style={this.style.dashboardControl} >Like</Col>
                </Row>
              </Col>
              <Col sm={2} md={3}></Col>
            </Row>
            <Row style={this.style.feedQueueContainer}>
              <Col sm={2} md={3}></Col>
              <Col sm={8} md={6} style={{'backgorund': 'gray'}}>
                <FeedQueueContainer />
              </Col>
              <Col sm={2} md={3}></Col>
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

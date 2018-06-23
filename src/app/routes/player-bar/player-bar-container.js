import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Segment } from 'semantic-ui-react'
import './player-bar-container.scss'


class PlayerBarContainer extends React.Component {

  static props = {
    playingTrack: PropTypes.shape({
      id: PropTypes.int,
      title: PropTypes.string,
      author: PropTypes.string,
      runtime: PropTypes.int,
      album_art_url: PropTypes.string
    }).isRequired
  }

  static state = {
    isPlaying: false,
    currentTrack: null,
    nextQueue: []
  }

  constructor(props, defaultProps) {
    super(props, defaultProps);
  }

  render() {
    return (
      <Grid columns='three' celled='internally' >
        <Grid.Row centered stretched>
          <Grid.Column width={3}></Grid.Column>
          <Grid.Column width={10}></Grid.Column>
          <Grid.Column width={3}></Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default PlayerBarContainer

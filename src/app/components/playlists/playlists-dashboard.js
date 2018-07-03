import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Segment,
  Header,
  Image,
  Search
} from 'semantic-ui-react'
import PlaylistTrack from './playlist-track'
import { AllShapes } from '../../shapes/all-shapes'
import { AllDefaults } from '../../tests/defaults/all-defaults'


class PlaylistsDashboard extends React.Component {

  static props = {
    playlistTracks: PropTypes.arrayOf(AllShapes.track)
  }

  static defaultProps = {
    playlist: AllDefaults.playlists[0]
  }

  constructor(props, defaultProps) {
    super(props, defaultProps)
  }

  render() {
    return (
      <Grid padded centered>
        <Grid.Row >
          <Grid.Column>
            <Search fluid className="search-container" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Segment.Group>
              {this.props.playlist.tracks.map((track) => {
                return <PlaylistTrack track={track} />
              })}
            </Segment.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default PlaylistsDashboard

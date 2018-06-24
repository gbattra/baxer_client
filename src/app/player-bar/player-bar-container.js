import './player-bar.scss'
import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Segment,
  Header,
  Icon,
  Image,
  Button
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import PlayerControls from './player-controls.js'


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
      <Grid columns='three' divided>
        <Grid.Row centered stretched>
          <Grid.Column width={3} verticalAlign='middle'>
            <Link to='/profile'>
              <Button basic>
                <Header as='h4'>
                  <Image circular src='https://react.semantic-ui.com/assets/images/avatar/small/molly.png' />
                  Profile
                </Header>
              </Button>
            </Link>
          </Grid.Column>
          <Grid.Column width={10}>
            <PlayerControls track={this.props.playingTrack}/>
          </Grid.Column>
          <Grid.Column width={3} verticalAlign='middle'>
            <Link to='/playlists'>
              <Button basic>
                <Header as='h4'>
                  <Image circular src='https://react.semantic-ui.com/assets/images/avatar/large/daniel.jpg' />
                  Playlists
                </Header>
              </Button>
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default PlayerBarContainer

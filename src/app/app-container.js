import React from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom'
import { Grid, Segment } from 'semantic-ui-react'
import FeedContainer from './routes/feed/feed-container'
import PlayerBarContainer from './player-bar/player-bar-container'
import PlaylistsContainer from './routes/playlists/playlists-container'
import './app-container.scss'


class AppContainer extends React.Component {

  static props = {
    playingTrack: PropTypes.shape({
      id: PropTypes.int,
      title: PropTypes.string,
      author: PropTypes.string,
      runtime: PropTypes.int,
      album_art_url: PropTypes.string
    })
  }

  static defaultProps = {
    playingTrack: {
      id: 1,
      title: 'Create',
      author: 'Overwerk',
      runtime: 120,
      album_art_url: ''
    }
  }

  state = {
    dashboard: 'playlists'
  }

  constructor(props, defaultProps) {
    super(props, defaultProps);
  }

  getDashboardComponent() {
    if (this.state.dashboard === 'feed') {
      return (
        <FeedContainer />
      )
    } else if (this.state.dashboard === 'profile') {

    } else if (this.state.dashboard === 'playlists') {
      return (
        <PlaylistsContainer />
      )
    }
  }

  render() {
    return (
      <Router>
        <Grid celled='internally' className='app-container'>
          <Grid.Row stretched>
            <Grid.Column width={16} className='dashboard-container'>
              {this.getDashboardComponent()}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
              <PlayerBarContainer playingTrack={this.props.playingTrack} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Router>
    )
  }
}

export default AppContainer

import './app-container.scss'
import { AllShapes } from '../../shapes/all-shapes'
import { AllDefaults } from '../../tests/defaults/all-defaults'
import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Segment } from 'semantic-ui-react'
import FeedContainer from '../feed/feed-container'
import PlayerBarContainer from '../player-bar/player-bar-container'
import PlaylistsContainer from '../playlists/playlists-container'
import ProfileContainer from '../profile/profile-container'
import TrackPageContainer from '../track/track-page-container'
import { Switch, BrowserRouter, Route } from 'react-router-dom';


const ROUTES = {
  PROFILE: 0,
  PLAYLISTS: 1,
  FEED: 2
}


class AppContainer extends React.Component {

  static props = {
    playingTrack: AllShapes.track,
    playlists: PropTypes.arrayOf(AllShapes.playlist),
    allRoutes: AllShapes.route,
    profile: AllShapes.profile
  }

  static defaultProps = {
    profile: AllDefaults.profile,
    playingTrack: AllDefaults.tracks[0],
    playlists: AllDefaults.playlists,
    allRoutes: AllDefaults.routes
  }

  state = {
    currentRoute: this.props.allRoutes[ROUTES.PROFILE],
    leftNavRoute: this.props.allRoutes[ROUTES.FEED],
    rightNavRoute: this.props.allRoutes[ROUTES.PLAYLISTS]
  }

  constructor(props, defaultProps) {
    super(props, defaultProps);
  }

  updateRouteState = (side, route) => {
    const sideNavRoute = side === 'left' ? 'leftNavRoute' : 'rightNavRoute'
    this.setState((prevState) => {
      return {
        [sideNavRoute]: prevState.currentRoute,
        currentRoute: route
      }
    })
  }

  render() {
    return (
      <BrowserRouter>
        <Grid celled='internally' className='app-container'>
          <Grid.Row stretched>
            <Grid.Column width={16} className='dashboard-container'>
              <Route path='/feed' render={() => <FeedContainer />} />
              <Route path='/profile' render={() => <ProfileContainer profile={this.props.profile}/>} />
              <Route path='/playlists' render={() => <PlaylistsContainer
                                                        playlists={this.props.playlists}
                                                      />}
              />
              <Route path='/track' render={() => <TrackPageContainer
                                                    track={this.props.playingTrack}
                                                    currentRoute={this.state.currentRoute}
                                                  />}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
              <PlayerBarContainer
                playingTrack={this.props.playingTrack}
                updateRouteState={this.updateRouteState}
                leftNavRoute={this.state.leftNavRoute}
                rightNavRoute={this.state.rightNavRoute}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </BrowserRouter>
    )
  }
}

export default AppContainer

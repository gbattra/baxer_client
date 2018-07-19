import './home-page-container.scss'
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
import UploadPageContainer from '../upload/upload-page-container'
import { Switch, Route } from 'react-router-dom';

const ROUTES = {
  PROFILE: 0,
  PLAYLISTS: 1,
  FEED: 2
}

class HomePageContainer extends React.Component {

  static props = {
    playlists: PropTypes.arrayOf(AllShapes.playlist),
    allRoutes: AllShapes.route,
    profile: AllShapes.profile
  }

  static defaultProps = {
    profile: AllDefaults.profile,
    playlists: AllDefaults.playlists,
    allRoutes: AllDefaults.routes
  }

  state = {
    playingTrack: AllDefaults.tracks[0],
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
      <Grid celled='internally' className='app-container'>
        <Grid.Row stretched>
          <Grid.Column width={16} className='dashboard-container'>
            <Switch>
              <Route path='/home/feed' exact render={() => <FeedContainer />} />
              <Route path='/home/profile' exact render={() => <ProfileContainer profile={this.props.profile}/>} />
              <Route path='/home/profile/upload' exact render={() => <UploadPageContainer />} />
              <Route path='/home/playlists' exact render={() => <PlaylistsContainer
                                                        playlists={this.props.playlists}
                                                      />}
              />
              <Route path='/home/track' exact render={() => <TrackPageContainer
                                                    track={this.state.playingTrack}
                                                    currentRoute={this.state.currentRoute}
                                                  />}
              />
            </Switch>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Route path='/home' render={() => {
              return (
                <Grid.Column width={16}>
                  <PlayerBarContainer
                    playingTrack={this.state.playingTrack}
                    updateRouteState={this.updateRouteState}
                    leftNavRoute={this.state.leftNavRoute}
                    rightNavRoute={this.state.rightNavRoute}
                  />
                </Grid.Column>
            )
          }} />
        </Grid.Row>
      </Grid>
    )
  }
}

export default HomePageContainer

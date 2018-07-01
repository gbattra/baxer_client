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
import PlayerControls from './player-controls.js'
import NavButton from '../../utils/components/nav-button'
import { AllShapes } from '../../shapes/all-shapes'


class PlayerBarContainer extends React.Component {

  static props = {
    playingTrack: AllShapes.track.isRequired,
    leftNavRoute: AllShapes.route,
    rightNavRoute: AllShapes.route,
    updateRouteState: PropTypes.func.isRequired
  }

  state = {
    isPlaying: false,
    currentTrack: null,
    nextQueue: []
  }

  constructor(props, defaultProps) {
    super(props, defaultProps)
  }

  navButtonClicked = (side, route) => {
    this.props.updateRouteState(side, route)
  }

  render() {
    return (
      <Grid columns='three' divided>
        <Grid.Row centered stretched>
          <Grid.Column width={3} verticalAlign='middle'>
            <NavButton side='left' route={this.props.leftNavRoute} onClickFunc={this.navButtonClicked}/>
          </Grid.Column>
          <Grid.Column width={10}>
            <PlayerControls track={this.props.playingTrack}/>
          </Grid.Column>
          <Grid.Column width={3} verticalAlign='middle'>
            <NavButton side='right' route={this.props.rightNavRoute} onClickFunc={this.navButtonClicked}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default PlayerBarContainer

import './track.scss'
import React from 'react'
import PropTypes from 'prop-types'
import { AllShapes } from '../../shapes/all-shapes'
import {
  Grid
} from 'semantic-ui-react'
import TrackDetail from './track-detail'
import TrackComments from './track-comments'
import NavButton from '../../utils/components/nav-button'


class TrackPageContainer extends React.Component {

  static props = {
    currentRoute: AllShapes.route,
    track: AllShapes.track.isRequired
  }

  constructor(props) {
    super(props)
  }

  navButtonClicked = (side, route) => {
  }

  render() {
    return (
      <Grid divided columns={3} className="track-page-container">
        <Grid.Column width={3}>
          <NavButton side='left' icon route={this.props.currentRoute} onClickFunc={this.navButtonClicked} />
        </Grid.Column>
        <Grid.Column width={6}>
            <TrackDetail track={this.props.track} />
        </Grid.Column>
        <Grid.Column width={4}>
          <TrackComments comments={this.props.track.comments} />
        </Grid.Column>
        <Grid.Column width={3} />
      </Grid>
    )
  }
}

export default TrackPageContainer

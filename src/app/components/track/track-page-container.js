import './track.scss'
import React from 'react'
import PropTypes from 'prop-types'
import { AllShapes } from '../../shapes/all-shapes'
import {
  Grid
} from 'semantic-ui-react'
import TrackDetail from './track-detail'
import TrackComments from './track-comments'


class TrackPageContainer extends React.Component {

  static props = {
    track: AllShapes.track.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Grid divided columns={3} className="track-page-container">
        <Grid.Column width={3} />
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

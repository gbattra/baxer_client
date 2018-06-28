import './track.scss'
import React from 'react'
import PropTypes from 'prop-types'
import { AllShapes } from '../../shapes/all-shapes'
import {
  Grid
} from 'semantic-ui-react'
import TrackDetail from './track-detail'


class TrackPageContainer extends React.Component {

  static props = {
    track: AllShapes.track.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Grid padded divided columns={3} className="track-page-container">
        <Grid.Column width={3} />
        <Grid.Column width={6}>
            <TrackDetail track={this.props.track} />
        </Grid.Column>
        <Grid.Column width={4} />
        <Grid.Column width={3} />
      </Grid>
    )
  }
}

export default TrackPageContainer

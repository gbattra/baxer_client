import React from 'react'
import PropTypes from 'prop-types'
import { AllShapes } from '../../shapes/all-shapes'
import { AllDefaults } from '../../tests/defaults/all-defaults'
import {
  Grid
} from 'semantic-ui-react'
import TrackCard from '../track/track-card'


class SubmitNewTrack extends React.Component {

  static props = {
    track: AllShapes.track.isRequired,
    userIsOwner: AllShapes.bool
  }

  static defaultProps = {
    userIsOwner: true
  }

  render() {
    return (
      <Grid padded centered verticalAlign='middle'>
          <TrackCard track={this.props.track} sideButtonsDisabled userIsOwner />
      </Grid>
    )
  }
}

export default SubmitNewTrack

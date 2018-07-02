import React from 'react'
import PropTypes from 'prop-types'
import { AllShapes } from '../../shapes/all-shapes'
import {
  Grid,
  Statistic,
  Icon
} from 'semantic-ui-react'
import TrackRank from './track-rank'


class TrackStatsheet extends React.Component {

  static props = {
    track: AllShapes.track
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Grid padded verticalAlign='middle'>
        <Grid.Row centered stretched>
          <TrackRank trackRank={this.props.track.trackRank} />
        </Grid.Row>
        <Grid.Row centered>
          <Statistic.Group size='small'>
            <Statistic value='1,234' label='shares' />
            <Statistic value='71%' label='likes' />
            <Statistic value='3,423' label='total listens' />
            <Statistic value='64%' label='growth rate' />
          </Statistic.Group>
        </Grid.Row>
      </Grid>
    )
  }
}

export default TrackStatsheet

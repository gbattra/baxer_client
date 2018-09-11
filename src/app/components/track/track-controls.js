import React from 'react'
import PropTypes from 'prop-types'
import { AllShapes } from '../../shapes/all-shapes'
import {
  Grid,
  Button,
  Progress
} from 'semantic-ui-react'


class TrackControls extends React.Component {

  static props = {
    track: AllShapes.track
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Grid>
        <Grid.Row stretched>
          <Grid.Column width={6}  verticalAlign='middle'>
              <Button.Group inverted>
                <Button icon='step backward' size='huge' />
                <Button icon='pause' size='massive' />
                <Button icon='step forward' size='huge' />
              </Button.Group>
          </Grid.Column>
          <Grid.Column width={6} verticalAlign='middle'>
            <div>
              <Progress inverted percent={10} color={this.props.track.trackRank.color} size='tiny' style={{'marginBottom':'0'}} />
            </div>
          </Grid.Column>
          <Grid.Column width={4} verticalAlign='middle'>
            <Button.Group inverted>
              <Button icon='heart' size='huge' />
              <Button icon='horizontal ellipsis' size='huge' />
            </Button.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default TrackControls

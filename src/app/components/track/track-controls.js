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
              <Button.Group>
                <Button basic icon='step backward' size='huge' />
                <Button basic icon='pause' size='massive' />
                <Button basic icon='step forward' size='huge' />
              </Button.Group>
          </Grid.Column>
          <Grid.Column width={6} verticalAlign='middle'>
            <div>
              <Progress percent={10} color='teal' size='tiny' style={{'margin-bottom':'0'}} />
            </div>
          </Grid.Column>
          <Grid.Column width={4} verticalAlign='middle'>
            <Button.Group>
              <Button basic icon='heart' size='huge' />
              <Button basic icon='horizontal ellipsis' size='huge' />
            </Button.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default TrackControls

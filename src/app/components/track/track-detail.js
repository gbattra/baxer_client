import React from 'react'
import PropTypes from 'prop-types'
import { AllShapes } from '../../shapes/all-shapes'
import {
  Grid,
  Image,
  Header,
  Label,
  Button
} from 'semantic-ui-react'
import TrackControls from './track-controls'
import TrackStatsheet from './track-statsheet'


class TrackDetail extends React.Component {

  static props = {
    track: AllShapes.track.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Grid centered>
        <Grid.Row centered>
          <Grid.Column width={6}>
            <Image src={this.props.track.trackArtUrl} size='medium' rounded />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched centered>
          <Grid.Column>
          <Header as='h3' block textAlign='center'>
            {this.props.track.title}
            <Header.Subheader>
              {this.props.track.author}
            </Header.Subheader>
          </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched>
          <Grid.Column>
            <TrackControls track={this.props.track} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched>
          <TrackStatsheet track={this.props.track} />
        </Grid.Row>
      </Grid>
    )
  }
}

export default TrackDetail

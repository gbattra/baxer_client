import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Card,
  Button,
  Popup
} from 'semantic-ui-react'
import { AllShapes } from '../../shapes/all-shapes'
import { Link } from 'react-router-dom'


class TrackCard extends React.Component {

  static props = {
    track: AllShapes.track,
    userIsOwner: PropTypes.bool,
    sideButtonsDisabled: PropTypes.bool
  }

  state = {
    sideButtonsDisabled: this.props.sideButtonsDisabled
  }

  constructor(props, defaultProps) {
    super(props, defaultProps)
  }

  render() {
    if (this.props.userIsOwner) {
      return (
        <Link to='/home/track'>

        <Card
          color={this.props.track.color}
          image={this.props.track.trackArtUrl}
          header={this.props.track.title} link extra={
            <Grid columns='equal' textAlign='center'>
              <Grid.Column>
                <Popup trigger={
                  <Button basic floated='left' icon='heartbeat' disabled={this.state.sideButtonsDisabled} />
                } content={
                  "View this track's stat sheet"
                } inverted position='right center' />
              </Grid.Column>
              <Grid.Column>
                <Button basic centered='true' icon='play' />
              </Grid.Column>
              <Grid.Column>
                <Button basic floated='right' icon='horizontal ellipsis' disabled={this.state.sideButtonsDisabled} />
              </Grid.Column>
            </Grid>
        }/>
        </Link>
      )
    } else {
      return (
        <Card color={this.props.track.color} image={this.props.track.trackArtUrl} header={this.props.track.title} link extra={
          <Grid columns='equal' textAlign='center'>
            <Grid.Column>
              <Button basic floated='left' icon='heart' />
            </Grid.Column>
            <Grid.Column>
              <Button basic centered='true' icon='play' />
            </Grid.Column>
            <Grid.Column>
              <Button basic floated='right' icon='comment' />
            </Grid.Column>
          </Grid>
        } />
      )
    }
  }
}

export default TrackCard

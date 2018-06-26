import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Card,
  Header,
  Button,
  Image
} from 'semantic-ui-react'


class TrackCard extends React.Component {

  static props = {
    track: PropTypes.shape({

    })
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Card fluid color={this.props.track.color}>
        <Image src={this.props.track.trackArtUrl} />
        <Card.Content textAlign='center'>
          <Card.Header>{this.props.track.title}</Card.Header>
          <Card.Meta>
            {this.props.track.author}
          </Card.Meta>
        </Card.Content>
      </Card>
    )
  }
}

export default TrackCard

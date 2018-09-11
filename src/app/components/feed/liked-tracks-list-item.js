import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Container,
  Segment,
  Header,
  Image,
  Icon,
  Button
} from 'semantic-ui-react'
import { AllShapes } from '../../shapes/all-shapes'


class LikedTracksListItem extends React.Component {

  static props = {
    likedTracksListItem: AllShapes.track.isRequired,
  }

  state = {
    isPlaying: this.props.likedTracksListItem.isPlaying
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Segment color={this.props.likedTracksListItem.color}>
        <Grid inverted verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={3}>
              <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' rounded />
            </Grid.Column>
            <Grid.Column width={10}>
              <Header as='h5'>
                {this.props.likedTracksListItem.title}
                <Header.Subheader>
                  {this.props.likedTracksListItem.author}
                </Header.Subheader>
              </Header>
            </Grid.Column>
            <Grid.Column width={3} className="center aligned">
              {this.state.isPlaying ? (
                <Button basic icon>
                  <Icon name='pause'/>
                </Button>
              ) : (
                <Button basic icon>
                  <Icon name='play'/>
                </Button>
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

export default LikedTracksListItem

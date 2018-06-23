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


class LikedTracksListItem extends React.Component {

  static props = {
    likedTracksListItem: PropTypes.shape({
      id: PropTypes.int,
      title: PropTypes.string,
      author: PropTypes.string,
      runtime: PropTypes.int,
      album_art_url: PropTypes.string,
      isPlaying: PropTypes.bool
    }).isRequired,
  }

  state = {
    isPlaying: this.props.likedTracksListItem.isPlaying
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Segment>
        <Grid verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={3}>
              <Image src='https://react.semantic-ui.com/assets/images/wireframe/square-image.png' rounded />
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
                <Button icon>
                  <Icon name='pause'/>
                </Button>
              ) : (
                <Button icon>
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

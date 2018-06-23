import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Container,
  Segment,
  Header,
  Image,
  Icon
} from 'semantic-ui-react'


class LikedTracksListItem extends React.Component {

  static props = {
    likedTracksListItem: PropTypes.shape({
      id: PropTypes.int,
      title: PropTypes.string,
      author: PropTypes.string,
      runtime: PropTypes.int,
      album_art_url: PropTypes.string
    }).isRequired
  }

  state = {
    isSelected: true
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Segment>
        <Grid verticalAlign='middle'>
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
                  {this.state.isSelected ? (
                      <Icon name='pause' size='large'/>
                  ) : null}
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Grid>
      </Segment>
    )
  }
}

export default LikedTracksListItem

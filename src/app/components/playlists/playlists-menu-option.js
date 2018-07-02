import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Header,
  Segment,
  Image,
  Icon
} from 'semantic-ui-react'
import { AllShapes } from '../../shapes/all-shapes'


class PlaylistsMenuOption extends React.Component {

  static props = {
    playlist: AllShapes.playlist.isRequired
  }

  state = {
    isSelected: this.props.playlist.isSelected
  }

  constructor(props, defaultProps) {
    super(props, defaultProps)
  }

  render() {
    return (
      <Segment color={this.props.playlist.color}>
        <Grid verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={13}>
              <Header as='h4'>
                <Image circular src={this.props.playlist.playlistArtUrl} />
                {this.props.playlist.name}
              </Header>
            </Grid.Column>
            <Grid.Column width={3} className="right aligned">
              {this.state.isSelected ? (
                  <Icon name='selected radio' size='large'/>
              ) : null}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }

}

export default PlaylistsMenuOption

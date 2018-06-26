import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Header, Image } from 'semantic-ui-react'


class PlaylistHeader extends React.Component {

  static props = {
    imageUrl: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Grid centered padded>
        <Grid.Row>
          <Header as='h2'>
            <Image circular src={this.props.imageUrl} />
            {this.props.label}
          </Header>
        </Grid.Row>
      </Grid>
    )
  }

}

export default PlaylistHeader

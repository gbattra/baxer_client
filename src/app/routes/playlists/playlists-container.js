import './playlists.scss'
import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Segment, Container } from 'semantic-ui-react'


class PlaylistsContainer extends React.Component {

  render() {
    return (
      <Grid columns={3} divided className="playlists-container">
        <Grid.Row centered stretched>
          <Grid.Column width={4}>
            <Container>
            </Container>
          </Grid.Column>
          <Grid.Column width={8}>
            <Container>
            </Container>
          </Grid.Column>
          <Grid.Column width={4}>
            <Container>
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default PlaylistsContainer

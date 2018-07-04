import React from 'react'
import PropTypes from 'prop-types'
import { AllShapes } from '../../shapes/all-shapes'
import { AllDefaults } from '../../tests/defaults/all-defaults'
import {
  Grid,
  Container
} from 'semantic-ui-react'
import UploadDashboard from './upload-dashboard'

class UploadPageContainer extends React.Component {

  render() {
    return (
      <Grid columns={3} divided className="playlists-container">
        <Grid.Row centered stretched>
          <Grid.Column width={4}>
          </Grid.Column>
          <Grid.Column width={8}>
            <Container>
              <UploadDashboard />
            </Container>
          </Grid.Column>
          <Grid.Column width={4}>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default UploadPageContainer

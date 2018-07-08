import React from 'react'
import PropTypes from 'prop-types'
import { AllShapes } from '../../shapes/all-shapes'
import { AllDefaults } from '../../tests/defaults/all-defaults'
import {
  Grid,
  Container
} from 'semantic-ui-react'
import UploadDashboard from './upload-dashboard'
import NavButton from '../../utils/components/nav-button'


const ROUTES = {
  PROFILE: 0,
  PLAYLISTS: 1,
  FEED: 2
}


class UploadPageContainer extends React.Component {

  static props = {
    currentRoute: AllShapes.route
  }

  static defaultProps = {
    currentRoute: AllDefaults.routes[ROUTES.PROFILE]
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Grid columns={3} divided className="playlists-container">
        <Grid.Row centered stretched>
          <Grid.Column width={4}>
            <NavButton side='left' icon route={this.props.currentRoute} onClickFunc={this.navButtonClicked} />
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

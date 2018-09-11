import './profile.scss'
import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Container,
  Button
} from 'semantic-ui-react'
import ProfileDashboard from './profile-dashboard'
import ProfileInfo from './profile-info'
import ProfileBadgeList from './profile-badges-list'
import { AllShapes } from '../../shapes/all-shapes'


class ProfileContainer extends React.Component {

  static props = {
    profile: AllShapes.profile.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Grid inverted columns={3} divided className="profile-container">
        <Grid.Row centered stretched>
          <Grid.Column width={4}>
            <Container>
              <ProfileInfo profile={this.props.profile}/>
            </Container>
          </Grid.Column>
          <Grid.Column width={8}>
            <Container>
              <ProfileDashboard profile={this.props.profile} />
            </Container>
          </Grid.Column>
          <Grid.Column width={4}>
            <Container>
              <ProfileBadgeList badges={this.props.profile.badges} />
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default ProfileContainer

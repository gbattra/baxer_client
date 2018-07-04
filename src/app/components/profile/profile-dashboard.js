import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Button,
  Header,
  Search,
  Card,
  Icon
} from 'semantic-ui-react'
import TrackCard from './track-card'
import { AllShapes } from '../../shapes/all-shapes'
import { Link } from 'react-router-dom'


class ProfileDashboard extends React.Component {

  static props = {
    profile: AllShapes.profile.isRequired,
    userIsOwner: PropTypes.bool
  }

  static defaultProps = {
    userIsOwner: true
  }

  constructor(props, defaultProps) {
    super(props, defaultProps)
  }

  render() {
    return (
      <Grid padded centered>
        <Grid.Row >
          <Grid.Column width={13}>
            <Search fluid className="search-container" />
          </Grid.Column>
          <Grid.Column width={3}>
            <Link to='/profile/upload'>
              <Button icon labelPosition='right' size='large' floated='right'>
                Upload
                <Icon name='sign out alternate' rotated='counterclockwise' color='violet'/>
              </Button>
            </Link>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Card.Group itemsPerRow={4}>
              {this.props.profile.tracks.map((track) => {
                return <TrackCard track={track} userIsOwner={this.props.userIsOwner}/>
              })}
            </Card.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default ProfileDashboard

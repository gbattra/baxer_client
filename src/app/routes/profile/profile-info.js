import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Segment,
  Button,
  Header,
  Card,
  Image
} from 'semantic-ui-react'
import ProfileBadgeList from './profile-badges-list'


class ProfileInfo extends React.Component {

  static props = {
    profile: PropTypes.shape({
      id: PropTypes.int,
      color: PropTypes.string,
      profileImageUrl: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      dateJoined: PropTypes.string,
      location: PropTypes.string,
      badges: PropTypes.arrayOf(PropTypes.shape({
        color: PropTypes.string,
        image: PropTypes.string,
        description: PropTypes.string,
        value: PropTypes.string
      }))
    })
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Grid padded centered>
        <Grid.Row padded>
          <Grid.Column width={12} centered>
            <Grid.Row>
              <Card fluid color={this.props.profile.color}>
                <Image src={this.props.profile.profileImageUrl} />
                <Card.Content textAlign='center'>
                  <Card.Header>{this.props.profile.name}</Card.Header>
                  <Card.Meta>
                    {this.props.profile.description}
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <Grid columns={2}>
                    <Grid.Column textAlign='right' >
                      <Button icon='edit' size='small' basic />
                    </Grid.Column>
                    <Grid.Column textAlign='left'>
                      <Button icon='settings' size='small' basic />
                    </Grid.Column>
                  </Grid>
                </Card.Content>
              </Card>
              <Grid.Row padded>
                <Grid.Column centered>
                  <ProfileBadgeList badges={this.props.profile.badges} />
                </Grid.Column>
              </Grid.Row>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default ProfileInfo

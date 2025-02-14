import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Segment,
  Header,
  Popup
} from 'semantic-ui-react'
import { AllShapes } from '../../shapes/all-shapes'


class ProfileBadge extends React.Component {

  static props = {
    badge: AllShapes.badge.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={{'padding':'0.25em'}}>
        <Popup trigger = {
          <Segment color={this.props.badge.color}>
            <div style={{'padding-right':'0.5em'}}>
              <Header as='h5' icon={this.props.badge.icon} subheader={this.props.badge.value} content={this.props.badge.label} />
            </div>
          </Segment>
        } content={this.props.badge.description} />
      </div>
    )
  }
}

export default ProfileBadge

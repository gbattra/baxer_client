import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Segment,
  Header,
  Popup
} from 'semantic-ui-react'


class ProfileBadge extends React.Component {

  static props = {
    badge: PropTypes.shape({
      color: PropTypes.string,
      image: PropTypes.string,
      label: PropTypes.string,
      description: PropTypes.string,
      value: PropTypes.string
    }).isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={{'padding':'0.25em'}}>
        <Popup trigger = {
          <Segment inverted  color={this.props.badge.color}>
            <div style={{'padding-right':'0.5em'}}>
              <Header as='h5' icon={this.props.badge.icon} subheader={this.props.badge.value} inverted content={this.props.badge.label} />
            </div>
          </Segment>
        } content={this.props.badge.description} inverted />
      </div>
    )
  }
}

export default ProfileBadge

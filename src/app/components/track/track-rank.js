import React from 'react'
import PropTypes from 'prop-types'
import { AllShapes } from '../../shapes/all-shapes'
import { AllDefaults } from '../../tests/defaults/all-defaults'
import {
  Icon,
  Header,
  Popup,
  Grid,
  Segment
} from 'semantic-ui-react'


class TrackRank extends React.Component {

  static props = {
    trackRank: AllShapes.trackRank.isRequired,
    trackRanks: PropTypes.arrayOf(AllShapes.trackRank)
  }

  static defaultProps = {
    trackRanks: AllDefaults.trackRanks
  }

  constructor(props, defaultProps) {
    super(props, defaultProps)
  }

  trackRankHeader = (trackRank, isMainRank) => {
    const hSize = isMainRank ? 'h1' : 'h3'
    const subheader = isMainRank ? 'Track Rank' : `${trackRank.value}`
    return (
      <Header as={hSize} block={isMainRank} icon color={trackRank.color}>
        <Icon name={trackRank.icon} />
          <span style={{'text-transform':'uppercase'}}>{trackRank.label}</span>
        <Header.Subheader>{subheader}</Header.Subheader>
      </Header>
    )
  }

  render() {
    return (
      <Popup trigger={this.trackRankHeader(this.props.trackRank, true)}
      content={
        <div>
          <Header as='h5' subheader="Track ranks are determined by the number of shares the track has. The more shares, the higher the rank" />
          <Segment.Group horizontal>
            {this.props.trackRanks.map(
              (trackRank) => {
                return (
                  <Segment padded tertiary textAlign='center'>
                    {this.trackRankHeader(trackRank, false)}
                  </Segment>
                )
              }
            )}
          </Segment.Group>
        </div>
      } position='top center' />
    )
  }
}

export default TrackRank

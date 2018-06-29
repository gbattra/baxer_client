import React from 'react'
import PropTypes from 'prop-types'
import { AllShapes } from '../../shapes/all-shapes'
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
    trackRanks: [
      {
        color: 'black',
        icon: 'chess pawn',
        label: 'pawn',
        value: '100'
      },
      {
        color: 'brown',
        icon: 'chess knight',
        label: 'knight',
        value: '1,000'
      },
      {
        color: 'purple',
        icon: 'chess bishop',
        label: 'bishop',
        value: '10,000'
      },
      {
        color: 'teal',
        icon: 'chess rook',
        label: 'rook',
        value: '100,000'
      },
      {
        color: 'yellow',
        icon: 'chess queen',
        label: 'queen',
        value: '1,000,000'
      },
      {
        color: 'red',
        icon: 'chess king',
        label: 'king',
        value: '10,000,000'
      }
    ]
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
          <Header as='h5' subheader="Track ranks show how many shares your track has received. The more shares, the higher the rank" />
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

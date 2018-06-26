import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Segement,
  Container,
  Button,
  Icon,
  Header,
  Search,
  Dropdown
} from 'semantic-ui-react'
import LikedTracksListItem from './liked-tracks-list-item'


class LikedTracksList extends React.Component {

  static props = {
    sortByOptions: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string,
      value: PropTypes.string,
      label: PropTypes.shape({
        color: PropTypes.string,
        empty: PropTypes.bool,
        circular: PropTypes.bool
      })
    })),
    likedTracksListItems: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.int,
      title: PropTypes.string,
      author: PropTypes.string,
      runtime: PropTypes.int,
      albumArtUrl: PropTypes.string,
      isPlaying: PropTypes.bool
    }))
  }

  static defaultProps = {
    sortByOptions: [
      {
        text: 'Date Created',
        value: 'dateCreated',
        label: {
          color: 'green',
          empty: true,
          circular: true
        }
      }
    ],
    likedTracksListItems: [
      {
        id: 1,
        title: 'Head Full of Shadows',
        author: 'The Glitch Mob',
        runtime: 120,
        albumArtUrl: '',
        isPlaying: true
      },
      {
        id: 1,
        title: 'Map of the Problematique',
        author: 'Muse',
        runtime: 120,
        albumArtUrl: '',
        isPlaying: false
      }
    ]
  }

  constructor(props, defaultProps) {
    super(props, defaultProps)
  }

  render() {
    return (
      <Grid padded>
        <Grid.Row verticalAlign='middle' className="left aligned">
          <Grid.Column width={3} className="right aligned">
            <Dropdown icon='filter' floating button className='icon'>
              <Dropdown.Menu>
                <Dropdown.Menu scrolling>
                  {this.props.sortByOptions.map(option => <Dropdown.Item key={option.value} {...option} />)}
                </Dropdown.Menu>
              </Dropdown.Menu>
            </Dropdown>
          </Grid.Column>
          <Grid.Column width={13} centered className="right aligned">
            <Header as='h3' block icon='bolt' content='Liked tracks' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16} className="right aligned">
            <Search fluid className="search-container" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched>
          <Grid.Column>
            {this.props.likedTracksListItems.map((likedTracksListItem) => {
              return <LikedTracksListItem likedTracksListItem={likedTracksListItem} />
            })}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default LikedTracksList

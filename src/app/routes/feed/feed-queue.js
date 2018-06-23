import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Segment } from 'semantic-ui-react'


class FeedQueue extends React.Component {

  static props = {
    upcomingTracks: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.int,
      title: PropTypes.string,
      author: PropTypes.string,
      runtime: PropTypes.int,
      album_art_url: PropTypes.string
    }))
  }

  static defaultProps = {
    upcomingTracks: [
      {
        id: 1,
        title: 'Create',
        author: 'Overwerk',
        runtime: 120,
        album_art_url: ''
      },
      {
        id: 1,
        title: 'Wont Stop Rocking',
        author: 'R3hab',
        runtime: 120,
        album_art_url: ''
      },
      {
        id: 1,
        title: 'Create',
        author: 'Overwerk',
        runtime: 120,
        album_art_url: ''
      },
      {
        id: 1,
        title: 'Wont Stop Rocking',
        author: 'R3hab',
        runtime: 120,
        album_art_url: ''
      },
      {
        id: 1,
        title: 'Create',
        author: 'Overwerk',
        runtime: 120,
        album_art_url: ''
      },
      {
        id: 1,
        title: 'Wont Stop Rocking',
        author: 'R3hab',
        runtime: 120,
        album_art_url: ''
      }
    ]
  }

  constructor(props, defaultProps) {
    super(props, defaultProps)
  }

  render() {
    return (
      <div>
        {this.props.upcomingTracks.map((track) => {
          return (
            <Grid padded centered>
              <Grid.Row>
                <Grid.Column>
                  <Segment></Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          )
        })}
      </div>
    )
  }
}

export default FeedQueue

import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Icon,
  Image,
  Popup,
  Input
} from 'semantic-ui-react'
import { AllShapes } from '../../shapes/all-shapes'
import { AllDefaults } from '../../tests/defaults/all-defaults'
import { Dropdown } from 'semantic-ui-react'


class EditNewTrackInfo extends React.Component {

  static props = {
    track: AllShapes.track.isRequired,
    genres: PropTypes.arrayOf(AllShapes.genre)
  }

  static defaultProps = {
    genres: AllDefaults.genres
  }

  constructor(props, defaultProps) {
    super(props, defaultProps)
  }

  render() {
    return (
      <Grid padded centered verticalAlign='middle'>
        <Grid.Row centered>
          <Grid.Column width={7} className='image-button'>
            <Popup trigger={
              <Image
                rounded
                bordered
                fluid
                src='https://react.semantic-ui.com/images/wireframe/white-image.png'
              />
            } content={
              <div>
                <strong>Click to upload</strong> track art. Otherwise, Rocketyr will use default art for this track.
              </div>
            } />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched centered>
          <Grid.Column width={10}>
            <Input placeholder='Track title' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched centered>
          <Grid.Column width={10}>
            <Dropdown placeholder='Genre' search fluid selection options={this.props.genres} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default EditNewTrackInfo

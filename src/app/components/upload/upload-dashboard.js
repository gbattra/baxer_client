import './upload.scss'
import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Header,
  Icon,
  Segment,
  Image,
  Button
} from 'semantic-ui-react'
import Dropzone from 'react-dropzone'
import TrackSteps from './track-steps'


class UploadDashboard extends React.Component {

  onDrop = (yesFiles, noFiles) => {
      debugger;
  }

  render() {
    return (
      <Grid padded>
        <Grid.Row stretched centered>
          <Grid.Column>
            <Header as='h3' icon>
              <Icon name='sign out alternate' rotated='counterclockwise' color='violet'/>
              Track Upload
              <Header.Subheader>{"Ready to show the world what you've made?"}</Header.Subheader>
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column verticalAlign='middle'>
            <TrackSteps stage={1} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered stretched>
          <Grid.Column width={13} verticalAlign='middle'>
            <Dropzone
              accept='audio/mpeg, audio/m4a, audio/mp3'
              onDrop={this.onDrop}
              className='dropzone'
              activeClassName='active-dropzone'
              acceptClassName='accept-dropzone'
              rejectClassName='reject-dropzone'
            >
              <div className='dropzone-content-wrapper'>
                <Grid.Row centered>
                  Drag and drop track here
                </Grid.Row>
                <Grid.Row centered>
                  <Button icon labelPosition='right' size='large'>
                    Browse
                    <Icon name='search'/>
                  </Button>
                </Grid.Row>
              </div>
            </Dropzone>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Button color='teal' size='large'>
            Next
            <Icon name='right arrow'/>
          </Button>
        </Grid.Row>
      </Grid>
    )
  }
}

export default UploadDashboard

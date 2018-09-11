import './upload.scss'
import React from 'react'
import PropTypes from 'prop-types'
import { AllShapes } from '../../shapes/all-shapes'
import { AllDefaults } from '../../tests/defaults/all-defaults'
import {
  Grid,
  Header,
  Icon,
  Segment,
  Image,
  Button
} from 'semantic-ui-react'
import TrackSteps from './track-steps'
import FileUploadStage from './file-upload-stage'
import EditNewTrackInfo from './edit-new-track-info'
import SubmitNewTrack from './submit-new-track'


class UploadDashboard extends React.Component {

  static props = {
    track: AllShapes.track.isRequired
  }

  static defaultProps = {
    track: AllDefaults.tracks[0]
  }

  state = {
    stage: 1,
    track: this.props.track
  }

  setStage = (dir) => {
    this.setState((prevState) => {
      const val = dir === 'next' ? prevState.stage + 1 : prevState.stage - 1
      return {
        stage: val
      }
    })
  }

  getUploadStageContent = () => {
    const { stage, track } = this.state
    let content = <FileUploadStage track={track} />
    if (stage === 2) {
      content = <EditNewTrackInfo track={track} />
    } else if (stage === 3) {
      content = <SubmitNewTrack track={track} />
    }
    return content
  }

  submitTrack = () => {

  }

  render() {
    return (
      <Grid padded>
        <Grid.Row stretched centered>
          <Grid.Column>
            <Header inverted as='h3' icon>
              <Icon name='sign out alternate' rotated='counterclockwise' color='red'/>
              Track Upload
              <Header.Subheader>{"Ready to show the world what you've made?"}</Header.Subheader>
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column verticalAlign='middle'>
            <TrackSteps stage={this.state.stage} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered stretched>
          <Grid.Column width={13} verticalAlign='middle'>
            {this.getUploadStageContent()}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          {this.state.stage > 1 ? (
            <Button color='grey' size='large' onClick={this.setStage.bind(null, 'back')}>
            <Icon name='left arrow'/>
              Back
            </Button>
          ) : (<div></div>)}
          {this.state.stage < 3 ? (
            <Button color='teal' size='large' onClick={this.setStage.bind(null, 'next')}>
              Next
              <Icon name='right arrow'/>
            </Button>
          ) : (
            <Button color='green' size='large' onClick={this.submitTrack}>
              Submit
            </Button>
          )}

        </Grid.Row>
      </Grid>
    )
  }
}

export default UploadDashboard

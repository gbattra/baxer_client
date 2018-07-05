import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Button,
  Icon
} from 'semantic-ui-react'
import Dropzone from 'react-dropzone'


class FileUploadStage extends React.Component {

  onDrop = (yesFiles, noFiles) => {
      debugger;
  }

  render() {
    return (
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
    )
  }
}

export default FileUploadStage

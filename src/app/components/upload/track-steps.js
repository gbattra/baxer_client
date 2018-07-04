import React from 'react'
import PropTypes from 'prop-types'
import { Step, Icon } from 'semantic-ui-react'


class TrackSteps extends React.Component {

  static props = {
    stage: PropTypes.number.isRequired
  }

  render() {
    return (
      <Step.Group style={{'textAlign':'left'}}>
        <Step active>
          <Icon name='music' />
          <Step.Content>
            <Step.Title>{'File Upload'}</Step.Title>
            <Step.Description>Upload your track</Step.Description>
          </Step.Content>
        </Step>

        <Step disabled>
          <Icon name='edit' />
          <Step.Content>
            <Step.Title>Track Info</Step.Title>
            <Step.Description>Title, genre, etc</Step.Description>
          </Step.Content>
        </Step>

        <Step disabled>
          <Icon name='checkmark' />
          <Step.Content>
            <Step.Title>Submit</Step.Title>
            <Step.Description>{'3.. 2.. 1.. liftoff!'}</Step.Description>
          </Step.Content>
        </Step>
      </Step.Group>
    )
  }
}

export default TrackSteps

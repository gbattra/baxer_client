import React from 'react'
import PropTypes from 'prop-types'
import { Step, Icon } from 'semantic-ui-react'


class TrackSteps extends React.Component {

  static props = {
    stage: PropTypes.number.isRequired
  }

  render() {
    const { stage } = this.props
    return (
      <Step.Group size='tiny' style={{'textAlign':'left'}}>
        <Step active={stage === 1} complete={(stage > 1).toString()}>
          <Icon name='music' />
          <Step.Content>
            <Step.Title>{'File Upload'}</Step.Title>
            <Step.Description>Upload your track</Step.Description>
          </Step.Content>
        </Step>

        <Step active={stage === 2} disabled={stage < 2} complete={(stage > 2).toString()}>
          <Icon name='edit' />
          <Step.Content>
            <Step.Title>Track Info</Step.Title>
            <Step.Description>Title, genre, etc</Step.Description>
          </Step.Content>
        </Step>

        <Step active={stage === 3} disabled={stage < 3} complete={(stage > 3).toString()}>
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

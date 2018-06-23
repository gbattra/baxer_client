import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Segment,
  Button,
  Icon,
  Popup
} from 'semantic-ui-react'


class FeedControls extends React.Component {

  render() {
    return (
      <Grid verticalAlign='middle'>
        <Grid.Row columns={3} centered>
          <Grid.Column className="right aligned">
            <div>
              <Popup trigger={
                <Button content='Skip' icon='red x' labelPosition='left' />
              } content="Skipping a track doesn't send it to any new Rocketyrs." inverted />
            </div>
          </Grid.Column>
          <Grid.Column className="center aligned">
            <Button icon='pause' size='massive'/>
          </Grid.Column>
          <Grid.Column className="left aligned">
            <div>
              <Popup trigger={
                <Button content='Like' icon='teal heart' labelPosition='right' />
              } content="Liking a track sends it to 3 new Rocketyrs (once it's finished playing)." inverted />
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default FeedControls

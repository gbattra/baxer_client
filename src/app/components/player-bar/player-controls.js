import './player-bar.scss'
import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Button,
  Icon,
  Image,
  Progress,
  Header,
  Popup
} from 'semantic-ui-react'
import { AllShapes } from '../../shapes/all-shapes'


class PlayerControls extends React.Component {

  static props = {
    track: AllShapes.track.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Grid>
        <Grid.Row stretched>
          <Grid.Column width={5}  verticalAlign='middle'>
              <Button.Group inverted>
                <Button icon='shuffle' size='medium' />
                <Button icon='step backward' size='medium' />
                <Button icon='pause' size='huge' />
                <Button icon='step forward' size='medium' />
                <Button icon='redo alternate' size= 'medium' />
              </Button.Group>
          </Grid.Column>
          <Grid.Column width={5} verticalAlign='middle'>
            <div>
              <Progress inverted percent={10} color={this.props.track.trackRank.color} size='tiny' style={{'marginBottom':'0'}} />
            </div>
          </Grid.Column>
          <Grid.Column width={1} verticalAlign='middle'>
            <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' rounded />
          </Grid.Column>
          <Grid.Column width={4} verticalAlign='middle'>
            <Header inverted as='h5'>
              {this.props.track.title}
              <Header.Subheader>
                {this.props.track.author}
              </Header.Subheader>
            </Header>
          </Grid.Column>
          <Grid.Column width={1} verticalAlign='middle'>
              <Popup trigger={
                <Button color='white' icon='ellipsis horizontal' size='medium'/>
              } content={
                <Grid celled='internally'>
                  <Grid.Row>
                    <Grid.Column>
                      <Button basic content='Add to playlist' className="no-border"/>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      <Button basic content='Remove from playlist' className="no-border"/>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      <Button basic content='Add to queue'className="no-border"/>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              } hoverable />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default PlayerControls

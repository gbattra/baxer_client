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


class PlayerControls extends React.Component {

  static props = {
    track: PropTypes.shape({
      id: PropTypes.int,
      title: PropTypes.string,
      author: PropTypes.string,
      runtime: PropTypes.int,
      album_art_url: PropTypes.string
    }).isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Grid>
        <Grid.Row stretched>
          <Grid.Column width={5}  verticalAlign='middle'>
              <Button.Group>
                <Button basic icon='shuffle' size='medium'/>
                <Button basic icon='step backward' size='medium'/>
                <Button basic icon='pause' size='huge'/>
                <Button basic icon='step forward' size='medium'/>
                <Button basic icon='redo alternate' size='medium'/>
              </Button.Group>
          </Grid.Column>
          <Grid.Column width={5} verticalAlign='middle'>
            <div>
              <Progress percent={10} color='teal' size='tiny' style={{'margin-bottom':'0'}} />
            </div>
          </Grid.Column>
          <Grid.Column width={1} verticalAlign='middle'>
            <Image src='https://react.semantic-ui.com/assets/images/wireframe/square-image.png' rounded />
          </Grid.Column>
          <Grid.Column width={4} verticalAlign='middle'>
            <Header as='h5'>
              {this.props.track.title}
              <Header.Subheader>
                {this.props.track.author}
              </Header.Subheader>
            </Header>
          </Grid.Column>
          <Grid.Column width={1} verticalAlign='middle'>
            <div>
              <Popup trigger={
                <Button basic icon='ellipsis horizontal' size='medium'/>
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
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default PlayerControls

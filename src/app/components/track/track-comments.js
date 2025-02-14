import React from 'react'
import PropTypes from 'prop-types'
import { AllShapes } from '../../shapes/all-shapes'
import { AllDefaults } from '../../tests/defaults/all-defaults'
import {
  Grid,
  Button,
  Comment,
  Form,
  Header,
  Input
} from 'semantic-ui-react'


class TrackComments extends React.Component {

  static props = {
    comments: PropTypes.arrayOf(AllShapes.comment)
  }

  static defaultProps = {
    comments: AllDefaults.comments
  }

  constructor(props, defaultProps) {
    super(props, defaultProps)
  }

  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Comment.Group className="comments-container">
              <Header inverted as='h3' dividing content='Comments' />
              <Comment>
                <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                <Comment.Content>
                  <Input placeholder='Comment' className="add-comment"/>
                </Comment.Content>
              </Comment>
              {this.props.comments.map((comment, i) => {
                return (
                  <Comment key={i}>
                    <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                    <Comment.Content>
                      <Comment.Author as='a' style={{'color':'white'}}>{comment.author}</Comment.Author>
                      <Comment.Metadata>
                        <div style={{'color':'gray'}}>{comment.datePosted}</div>
                      </Comment.Metadata>
                      <Comment.Text style={{'color':'white'}}>{comment.body}</Comment.Text>
                      <Comment.Actions>
                        <Comment.Action style={{'color':'grey'}}>Reply</Comment.Action>
                      </Comment.Actions>
                    </Comment.Content>
                    <Comment.Group>
                    {comment.replies.map((reply, i) => {
                      return (
                          <Comment key={i}>
                          <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
                          <Comment.Content>
                            <Comment.Author as='a' style={{'color':'white'}}>{reply.author}</Comment.Author>
                            <Comment.Metadata>
                              <div style={{'color':'grey'}}>{reply.datePosted}</div>
                            </Comment.Metadata>
                            <Comment.Text style={{'color':'white'}}>{reply.body}</Comment.Text>
                          </Comment.Content>
                        </Comment>
                      )
                    })}
                    </Comment.Group>
                  </Comment>
                )
              })}
            </Comment.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default TrackComments

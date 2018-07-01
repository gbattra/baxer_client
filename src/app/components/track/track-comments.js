import React from 'react'
import PropTypes from 'prop-types'
import { AllShapes } from '../../shapes/all-shapes'
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
    comments: [
      {
        author: 'Broderick Attra',
        body: 'Game changing track!',
        datePosted: 'April 12, 2018',
        reply: {
          author: 'The Glitch Mob',
          body: 'Thanks man, you are our number one fan!',
          datePosted: 'April 12, 2018'
        }
      }
    ]
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
              <Header as='h3' dividing content='Comments' />
              <Comment>
                <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                <Comment.Content>
                  <Input placeholder='Comment' className="add-comment"/>
                </Comment.Content>
              </Comment>
              {this.props.comments.map((comment) => {
                return (
                  <Comment>
                    <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                    <Comment.Content>
                      <Comment.Author as='a'>{comment.author}</Comment.Author>
                      <Comment.Metadata>
                        <div>{comment.datePosted}</div>
                      </Comment.Metadata>
                      <Comment.Text>{comment.body}</Comment.Text>
                      <Comment.Actions>
                        <Comment.Action>Reply</Comment.Action>
                      </Comment.Actions>
                    </Comment.Content>
                  {Object.keys(comment.reply).length > 0 ? (
                    <Comment.Group>
                      <Comment>
                        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
                        <Comment.Content>
                          <Comment.Author as='a'></Comment.Author>
                          <Comment.Metadata>
                            <div>{comment.reply.datePosted}</div>
                          </Comment.Metadata>
                          <Comment.Text>{comment.reply.body}</Comment.Text>
                        </Comment.Content>
                      </Comment>
                    </Comment.Group>
                  ) : null}
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

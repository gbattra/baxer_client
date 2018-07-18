import React from 'react'
import PropTypes from 'prop-types'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class SignUpForm extends React.Component {

  state = {
    form: {
      username: 'greg',
      email: 'gregattra@gmail.com',
      password: 'testpassword12345',
      confirmPassword: 'testpassword12345'
    }
  }

  static props = {
    signUpClicked: PropTypes.func.isRequired
  }

  constructor(props, defaultProps) {
    super(props, defaultProps)
  }

  changeInputValue = (e) => {
    const form = this.state.form
    form[e.target.name] = e.target.value
    this.setState({
      form: form
    })
  }

  handleOnClick = () => {
    const form = this.state.form
    this.props.signUpClicked(form)
  }

  render() {
    return (
      <div className='login-form'>
        {/*
          Heads up! The styles below are necessary for the correct render of this example.
          You can do same with CSS, the main idea is that all the elements up to the `Grid`
          below must have a height of 100%.
        */}
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='black' textAlign='center'>
              <Image rounded bordered src='https://avatars3.githubusercontent.com/u/19349046?s=400&u=7b4d7b3cb39d0e74b027ebb5d109f2287ae90302&v=4' />
              Rocketyr
            </Header>
            <Form size='large'>
              <Segment>
                <Form.Input
                  onChange={this.changeInputValue}
                  value={this.state.form.username}
                  fluid icon='user'
                  iconPosition='left'
                  name='username'
                  placeholder='Username' />

                <Form.Input
                  onChange={this.changeInputValue}
                  value={this.state.form.email}
                  fluid icon='mail'
                  iconPosition='left'
                  name='email'
                  placeholder='E-mail address' />

                <Form.Input
                  onChange={this.changeInputValue}
                  value={this.state.form.password}
                  fluid icon='lock'
                  iconPosition='left'
                  name='password'
                  placeholder='Password'
                  type='password' />

                <Form.Input
                  onChange={this.changeInputValue}
                  value={this.state.form.confirmPassword}
                  fluid icon='lock'
                  iconPosition='left'
                  name='confirmPassword'
                  placeholder='Confirm password'
                  type='password' />

                <Button color='violet' fluid size='large' onClick={this.handleOnClick}>
                  Sign Up
                </Button>
              </Segment>
            </Form>
            <Message>
              Already a Rocketyr? <Link to='/log-in'>Log In</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default SignUpForm
